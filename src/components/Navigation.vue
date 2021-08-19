<template>
  <div class="navigation-wrapper">
      <div class="links">
        <div class="link">Главная</div>
        <div class="link">Серверы</div>
        <div class="link">Форум</div>
        <div class="link">Донат</div>
        <div class="link">Разное</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="scss" scoped>
    .navigation-wrapper {
        .links {
            display: flex;
            align-items: center;

            .link {
                flex-grow: 1;
                display: flex;
                justify-content: center;
            }
        }
    }
</style>