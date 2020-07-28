<template>
  <div id="app">
    <social-nav></social-nav>
    <navbar-display></navbar-display>
    <hr class="mt-0"/>
    <!-- <sub-nav-display></sub-nav-display> -->
    
    <router-view />
  </div>
</template>

<script>
import NavbarDisplay from './components/navbar-display.vue';
import SubNavDisplay from './components/sub-nav-display.vue';
import SocialNav from './components/social-nav.vue';

export default {
  name: "App",
  components: {
    NavbarDisplay,
    SubNavDisplay,
    SocialNav,
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
    "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #73726c;
  margin: 31px 0 0 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3c3b37;
  font-size: 15px;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
