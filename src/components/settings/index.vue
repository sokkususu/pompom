<template>
  <div id="settings">
    <h4>Rounds</h4>
    <vue-slider
      v-model="settings.rounds"
      :adsorb="true"
      :min="2"
      :max="10"
      :marks="[2, 4, 10]"
      :contained="true"
      :lazy="true"
    ></vue-slider>
    <h4>Focus duration</h4>
    <vue-slider
      v-model="settings.focusDuration"
      :adsorb="true"
      :min="5"
      :max="60"
      :marks="[5, 25, 60]"
      :contained="true"
    ></vue-slider>
    <h4>Short break duration</h4>
    <vue-slider
      v-model="settings.shortBreakDuration"
      :adsorb="true"
      :min="5"
      :max="30"
      :marks="[5, 30]"
      :contained="true"
    ></vue-slider>
    <h4>Long break duration</h4>
    <vue-slider
      v-model="settings.longBreakDuration"
      :adsorb="true"
      :min="5"
      :max="45"
      :marks="[5, 20, 45]"
      :contained="true"
    ></vue-slider>
    <br />
    <button @click="apply">Apply</button>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Settings",
  components: {
    VueSlider,
  },
  data() {
    return {
      settings: {
        rounds: 4,
        focusDuration: 25,
        shortBreakDuration: 5,
        longBreakDuration: 20,
      },
    };
  },
  created() {
    for (let param in this.settings) {
      this.settings[param] = this[param];
    }
  },
  methods: {
    ...mapMutations(["applySettings", "resetRounds", "changeStatus"]),
    ...mapActions(["resetTimer"]),
    apply() {
      this.applySettings(this.settings);
      this.resetTimer();
      this.resetRounds();
      this.changeStatus("focus");
    },
  },
  computed: {
    ...mapGetters([
      "rounds",
      "focusDuration",
      "shortBreakDuration",
      "longBreakDuration",
    ]),
  },
};
</script>

<style lang="scss">
$themeColor: #ff5b41;
@import "~vue-slider-component/lib/theme/antd.scss";
</style>