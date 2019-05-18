<template>
  <div id="app">
    <app-navbar/>
    <div class="ui container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components : {
    'app-navbar' : Navbar
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  background-color: #21ba45;
  color: white;
  transition: 500ms;
}
</style>
