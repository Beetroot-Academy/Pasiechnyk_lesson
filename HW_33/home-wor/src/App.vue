<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 29 29"
              class="title__logo"
            >
              <g fill-rule="evenodd">
                <path
                  d="M8.495 3.628S4.939 4.95 2.839 9.922l11.585-2.19-5.929-4.104zm-5.831 7.003s-1.568 3.455.481 8.448l6.612-9.763-7.093 1.315zm.924 8.94s1.322 3.556 6.294 5.656L7.693 13.64l-4.105 5.931zm7.003 5.83s3.455 1.567 8.448-.481l-9.763-6.61 1.315 7.091zm9.131-.772s3.557-1.322 5.656-6.296l-11.586 2.189 5.93 4.107zm5.349-15.452l-6.61 9.763 7.093-1.316c0 .001 1.566-3.454-.483-8.447zm-.443-.492s-1.322-3.556-6.295-5.655l2.189 11.585 4.106-5.93zm-7.004-5.83s-3.453-1.568-8.447.482l9.764 6.61-1.317-7.092z"
                ></path>
                <path
                  d="M14.151 0C6.336 0 0 6.336 0 14.15 0 21.963 6.335 28.3 14.151 28.3c7.813 0 14.149-6.338 14.149-14.15C28.301 6.336 21.965 0 14.151 0zm0 27.206c-7.199 0-13.057-5.857-13.057-13.056 0-7.199 5.858-13.056 13.057-13.056 7.197 0 13.055 5.857 13.055 13.056 0 7.199-5.858 13.056-13.055 13.056z"
                ></path>
              </g>
            </svg>
            CSSgram
          </h1>
          <h2 class="subtitle">
            Update CSS Variables with <span class="title">JS</span>
          </h2>
        </v-col>
      </v-row>

      <v-row class="header__slider">
        <v-col>
          <v-slider
            v-model="borderSlider"
            label="Border"
            :max="setBorder.max"
            :min="setBorder.min"
            hide-details
          >
          </v-slider>
        </v-col>
        <v-col class="header__base-color">
          <span class="subtitle">Base Color:</span>
          <b-form-input
            v-model="colorInput"
            type="color"
            :id="`type-color`"
          ></b-form-input>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="main__slider">
      <v-row>
        <v-col>
          <img src="./assets/unnamed.jpg" alt="photo" />
        </v-col>
      </v-row>
      <v-row class="set__slider">
        <v-row>
          <v-col>
            <v-subheader>Blur:</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="blurSlider"
                    class="align-center"
                    :max="setBlur.max"
                    :min="setBlur.min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="blur"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>Contrast:</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="contrastSlider"
                    class="align-center"
                    :max="setContrast.max"
                    :min="setContrast.min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="contrast"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>Hue Rotate:</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="hueRotateSlider"
                    class="align-center"
                    :max="setHueRotate.max"
                    :min="setHueRotate.min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="hueRotate"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>Sepia:</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="sepiaSlider"
                    class="align-center"
                    :max="setSepia.max"
                    :min="setSepia.min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="sepia"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>Saturate:</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="saturateSlider"
                    class="align-center"
                    :max="setSaturate.max"
                    :min="setSaturate.min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="saturate"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row
          ><v-btn color="primary" elevation="2" @click="clear"
            >Clear all</v-btn
          ></v-row
        >
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      colorInput: `#ffc600`,
      setBorder: { min: 0, max: 50 },
      setBlur: { min: 0, max: 20 },
      setContrast: { min: 0, max: 200 },
      setHueRotate: { min: 0, max: 360 },
      setSepia: { min: 0, max: 100 },
      setSaturate: { min: 0, max: 200 },
    };
  },
};
</script>

<style>
@import url("./assets/reset.css");
#app {
  background: #191d23 !important;
}
body {
  text-align: center !important;
  color: #ffffff !important;
}
.container {
  padding: 30px 20px 0 !important;
  max-width: 1200px !important;
}
img {
  max-width: 100% !important;
}
.title {
  color: v-bind(colorInput);
}
.title__logo {
  fill: v-bind(colorInput);
}
.subtitle {
  color: white !important;
}
.v-label {
  color: #ffffff !important;
}
.header__slider,
.header__base-color,
.main__slider {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.form-control {
  width: 50px !important;
}
</style>
