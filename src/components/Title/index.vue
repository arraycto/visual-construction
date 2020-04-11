<template>
  <div class="vc-title">{{ content }}</div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  name: "vc-title"
};
</script>
