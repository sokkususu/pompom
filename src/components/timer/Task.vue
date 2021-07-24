<template>
  <div id="task">
    <button id="task-button" @click="displayLabelsList">
      <template v-if="this.selectedLabel">
        <icon-base width="20" height="20" viewBox="0 0 20 20">
          <IconColorCircle />
        </icon-base>
        <span>{{ this.selectedLabel.name }}</span>
      </template>
      <template v-else>
        <icon-base width="20" height="20" viewBox="0 0 20 20">
          <IconColorCircle />
        </icon-base>
        <span>Select label</span>
      </template>
    </button>
    <ul id="labels-list">
      <li
        class="label"
        v-for="label in labels"
        :key="label.id"
        @click="selectLabel(label)"
      >
        <icon-base width="20" height="20" viewBox="0 0 20 20">
          <IconColorCircle />
        </icon-base>
        <span>{{ label.name }}</span>
      </li>
      <li class="label" id="add-button">
        <span class="marker">+</span><span>Add label</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import IconBase from "../icons/IconBase";
import IconAddLabel from "../icons/label_icons/IconAddLabel";
import IconColorCircle from "../icons/label_icons/IconColorCircle";
import IconSettings from "../icons/IconSettings";

export default {
  components: { IconBase, IconColorCircle, IconAddLabel, IconSettings },
  name: "Task",
  data() {
    return {
      selectedLabel: null,
    };
  },
  methods: {
    selectLabel(label) {
      this.selectedLabel = label;
    },
    displayLabelsList() {
      const labelsList = document.getElementById("labels-list");
      function listener() {
        labelsList.classList.remove("display");
        document.removeEventListener("click", listener);
      }

      if (labelsList.classList.contains("display")) {
        labelsList.classList.remove("display");
        document.removeEventListener("click", listener);
      } else {
        labelsList.classList.add("display");
        setTimeout(() => document.addEventListener("click", listener));
      }
    },
  },
  computed: {
    ...mapGetters(["labels"]),
  },
};
</script>

<style scoped>
#task {
  margin: auto;
  display: inline-block;
}

#task-button {
  background-color: white;
  padding: 8px;
  cursor: pointer;
}

#labels-list {
  display: none;
  background-color: white;
  z-index: 10;
  position: absolute;
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 10px 0;
  border-radius: 10px;
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.11);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.11);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.11);
}

#labels-list.display {
  display: block;
}

.label {
  padding: 8px 40px 8px 10px;
  background-color: rgba(247, 247, 247, 0);
  transition: all 0.3s;
}

.label:hover {
  cursor: pointer;
  background-color: rgb(247, 247, 247);
}

.marker {
  line-height: 0;
  font-size: 40px;
  display: inline-block;
  width: 35px;
  position: relative;
  top: 5px;
}

#add-button .marker {
  font-size: 30px;
  padding-left: 2px;
}
</style>