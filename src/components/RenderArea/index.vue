<template>
  <div class="render-area-wrap h-100">
    渲染区
    <div class="render-container h-100">
      <draggable :list="needRender" group="vc-component">
        <el-button
          v-for="(item, index) in needRender"
          :key="`${item}-${index}`"
          >{{ item }}</el-button
        >
        <div class="render-content">
          <component
            v-for="(item, index) in renderApp"
            :is="item.app"
            :key="`${item.app.name}-${index}`"
          ></component>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapState } from "vuex";
export default {
  name: "render-area",
  computed: {
    ...mapState(["needRender", "appMapList"])
  },
  data() {
    return {
      renderApp: []
    };
  },
  components: {
    draggable
  },
  watch: {
    needRender: {
      handler: function(newVal) {
        if (newVal.length) {
          newVal.forEach(app => {
            this.renderApp.push({
              app: this.appMapList.get(app)
            });
          });
        }
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
