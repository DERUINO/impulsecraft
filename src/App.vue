<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <Navigation />
        </div>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/servers">servers</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  } 
}
</script>

<style lang="scss">
$bg: #3e3e3e;
$color: #e3e3e3;

$defaultFont: 'Myriad Pro';

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

  .container {
    
  }
}
</style>
