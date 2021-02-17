<template>
  <div class="menu">
    <round-button>
      <icon-base
        width="12"
        height="12"
        icon-name="icon-stop"
        viewBox="0 0 12 12"
        ><icon-stop />
      </icon-base>
    </round-button>
    <round-button accent>
      <icon-base
        style="padding-left: 5px"
        width="18"
        height="18"
        icon-name="icon-stop"
        viewBox="0 0 12 12"
        ><icon-start />
      </icon-base>
    </round-button>
    <round-button>
      <icon-base
        width="12"
        height="12"
        icon-name="icon-stop"
        viewBox="0 0 12 12"
        ><icon-next stroke="currentColor" />
      </icon-base>
    </round-button>
  </div>
</template>

<script>
import RoundButton from "../RoundButton";

import IconBase from "../IconBase";
import IconNext from "../icons/timer_icons/IconNext";
import IconStart from "../icons/timer_icons/IconStart";
import IconStop from "../icons/timer_icons/IconStop";

export default {
  components: {
    RoundButton,
    IconBase,
    IconNext,
    IconStart,
    IconStop,
  },
  methods: {},
};
</script>

<style>
.menu {
  display: flex;
  width: 178px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
}
</style>