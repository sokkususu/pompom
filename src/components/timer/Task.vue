<template>
  <div id="task">
    <button @click="displayLabelsList">Select label</button>
    <ul id="labels-list">
      <li class="label" v-for="label in labels" :key="label.id">
        <span class="marker" :style="`color: ${label.color}`">●</span>
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

export default {
  name: "Task",
  methods: {
    displayLabelsList() {
      document.getElementById("labels-list").classList.toggle("display");
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