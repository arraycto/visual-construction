<template>
  <div class="coms-sidebar-wrap">
    <vc-title content="物料区" />
    <draggable
      class="drop-wrapper sidebar-list mt-10"
      :list="names"
      :group="{
        name: 'vc-component',
        pull: 'clone',
        put: false
      }"
      @change="handleChange"
    >
      <el-button v-for="(item, index) in names" :key="`${item}${index}`">
        {{ item }}
      </el-button>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapState } from "vuex";

export default {
  name: "sidebar",
  computed: {
    ...mapState(["names", "appMapList"])
  },
  components: {
    draggable
  },
  methods: {
    handleChange(event) {
      const { moved } = event;
      this.$store.commit("setNeedRender", moved.element);
    }
  }
};
</script>
