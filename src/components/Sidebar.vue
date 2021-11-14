<template>
  <div class="sidebar-wrapper">
      <LK />
  </div>
</template>

<script>
import LK from '@/components/LK.vue';

export default {
    name: "Sidebar",
    components: {
        LK
    }
}
</script>

<style lang="scss" scoped>
    .sidebar-wrapper {
        margin-top: 93px;
    }
</style>