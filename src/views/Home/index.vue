<template>
  <el-container>
    <el-aside width="240px">
      <ComsSidebar />
    </el-aside>
    <el-main>
      <RenderArea />
    </el-main>
    <el-aside width="240px">
      <ComsHandle />
    </el-aside>
  </el-container>
</template>

<script>
import ComsHandle from "@/components/ComsHandle";
import ComsSidebar from "@/components/ComsSidebar";
import RenderArea from "@/components/RenderArea";

export default {
  name: "Home",
  components: {
    ComsHandle,
    ComsSidebar,
    RenderArea
  }
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
