<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="header">
            <div class="logo">IMPULSECRAFT</div>
            <div class="menu">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
      <div class="main-bg">
      </div>
      <div class="container" v-if="$router.history.current['path'] === '/'">
        <div class="main-screen">
          <div class="container">
            <div class="main-screen-text">
              Почувствуй ритм игры<br>
              вместе с нами!
            </div>
            <div class="main-screen-start">
              Начать игру
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-8">
            <router-view />
          </div>
          <div class="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Navigation,
    Sidebar,
  },
  data() {
    return {
      url: null,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap');

$bg: #e3e3e3;
$color: #3e3e3e;
$defaultFont: 'Rubik', sans-serif;

* {
  margin: 0;
  padding: 0;
  &::-webkit-scrollbar {
    width: 7px;
    background: darkgrey;
  }

  &::-webkit-scrollbar-thumb {
    background: darkgreen;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.myrow {
  margin: 0 !important;
}

.mycol {
  padding: 0 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: $bg;
  color: $color;
  font-family: $defaultFont;

  a {
    text-decoration: none;
    color: inherit;
  }

  .header {
    display: flex;
    margin: 30px 0;
    align-items: center;
    
    .logo {
      width: 40%;
      font-size: 34px;
      font-weight: 800;
    }

    .menu {
      width: 60%;
    }
  }

  .main-bg {
    height: 75vh;
    background: url('~@/assets/images/main-screen.jpg') no-repeat center center;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;
    position: absolute;
  }

  .main-screen {
      height: 75vh;
      display: flex;
      align-items: center;

      .main-screen-text {
        font-size: calc(1rem + 2.4vw);
        font-weight: 800;
        color: #E3e3e3;
        line-height: 1.2;
        text-shadow: 0 0 2px darkgreen;
      }

      .main-screen-start {
        @include button();
        margin-top: 30px;
      }
  }

  .container {
    z-index: 2;
    position: relative;
  }

  .content {
    padding: 2.5% 0;
  }
}
</style>
