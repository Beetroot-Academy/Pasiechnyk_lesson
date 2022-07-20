const gulp = require("gulp");

const argv = require("yargs").argv;

const projectConfig = require("./projectConfig.json");
const path = projectConfig.path;

const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
// const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const gcmq = require("gulp-group-css-media-queries");

/**
 * Dev check
 */
const isDev = function () {
  return !argv.prod;
};

/**
 * Prod check
 */
const isProd = function () {
  return !!argv.prod;
};

gulp.task("hello", function (done) {
  console.log("Hello Zell");
  done();
});

gulp.task("browsersync", function () {
  browserSync.init({
    open: true,
    server: path.dist.distPath,
  });
});

gulp.task("html", function html() {
  return gulp
    .src(path.src.html)
    .pipe(gulp.dest(path.dist.html))
    .on("end", browserSync.reload);
});

function scss() {
  return gulp
    .src(path.src.style)
    .pipe(sass())
    .pipe(
      gulpif(
        isProd(),
        autoprefixer({
          grid: true,
        })
      )
    )
    .pipe(gulpif(isProd(), gcmq()))
    .pipe(gulpif(isProd(), gulp.dest(path.dist.style)))
    .pipe(gulpif(isProd(), csso()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.dist.style))
    .pipe(browserSync.reload({ stream: true }));
}

gulp.task("scss", scss);

gulp.task("watch", function () {
  gulp.watch(path.watch.html, gulp.series("html"));
  gulp.watch(path.watch.style, gulp.series("scss"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("html", "scss"),
    gulp.parallel("browsersync", "watch")
  )
);
