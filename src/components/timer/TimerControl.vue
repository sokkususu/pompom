<template>
  <div class="control">
    <round-button @click.native="resetTimer">
      <icon-base width="12" height="12" viewBox="0 0 12 12"
        ><icon-stop />
      </icon-base>
    </round-button>
    <round-button accent @click.native="play">
      <icon-base
        style="padding-left: 5px"
        width="18"
        height="18"
        viewBox="0 0 12 12"
      >
        <icon-start v-if="!isPlay" />
        <icon-pause v-else />
      </icon-base>
    </round-button>
    <round-button @click.native="skipTimer">
      <icon-base width="12" height="12" viewBox="0 0 12 12"
        ><icon-next stroke="currentColor" />
      </icon-base>
    </round-button>
  </div>
</template>

<script>
import RoundButton from "../RoundButton";

import IconBase from "../icons/IconBase";
import IconNext from "../icons/timer_icons/IconNext";
import IconStart from "../icons/timer_icons/IconStart";
import IconStop from "../icons/timer_icons/IconStop";
import IconPause from "../icons/timer_icons/IconPause";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    RoundButton,
    IconBase,
    IconNext,
    IconStart,
    IconStop,
    IconPause,
  },
  computed: {
    ...mapGetters(["isPlay"]),
  },
  methods: {
    ...mapActions(["skipTimer", "resetTimer", "play"]),
  },
};
</script>

<style>
.control {
  display: flex;
  width: 178px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
}
</style>