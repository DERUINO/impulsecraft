<template>
  <div class="navigation-wrapper">
      <div class="links">
        <div class="link"><router-link to="/">Главная</router-link></div>
        <div class="link"><router-link to="/servers">Серверы</router-link></div>
        <div class="link"><router-link to="/forum">Форум</router-link></div>
        <div class="link"><router-link to="/donate">Донат</router-link></div>
        <div class="link"><router-link to="/others">Разное</router-link></div>
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
            padding: 10px 0;

            .link {
                font-weight: bolder;
                flex-grow: 1;
                display: flex;
                justify-content: center;
            }
        }
    }
</style>