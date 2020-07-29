<template>
  <div>
    <nav class="navbar navbar-expand-md bg-white navbar-dark">

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <div class="navbar-brand">
              <router-link to="/u-course"><span class="u-text">U</span> <span class="course-text">course</span></router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/categories">Categories</router-link>
          </li>
          <li class="nav-item">
            <div class="form-group m-0">
              <div class="search-box">
                <span class="search"><i class="fas fa-search"></i></span>
                <input type="text" class="form-control" placeholder="search for anything" @keyup="search" v-model="searchCourse" />
                <!-- <button @click="search">search</button> -->
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/">
              Home
              <span><i class="fas fa-home"></i></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-courses">
              My courses
              <span><i class="fab fa-discourse"></i></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notifications">
              Notifications
              <span><i class="far fa-bell"></i></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/likes">
              Likes
              <span><i class="far fa-heart"></i></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-cart">
              Cart
              <span><i class="fas fa-cart-plus"></i></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">
              Profile
              <span><i class="fas fa-user-circle"></i></span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { eventBus } from '../main';

export default {
  data(){
    return {
      searchCourse: '',
    }
  },
  methods: {
    search(){
      // console.log('search triggered', this.searchCourse);
      eventBus.$emit('searchText', this.searchCourse);
    }
  }
}
</script>
<style>
.search-box {
  background: #fbfbf8;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 550px;
  height: 50px;
  border-radius: 30px;
  padding: 10px 15px;
  border: 1px solid #495057;
}
.search-box input {
  background: #fbfbf8;
  border: none;
  border-radius: 30px;
  margin: 0 10px;
}
.search-box input:focus {
  box-shadow: none;
  background: #fbfbf8;
}
.u-text {
  font-size: 30px;
  font-family: lato;
  text-shadow: 1px 1px 3px #d67575;
}
.course-text {
  color: #252525;
  font-size: 15px;
  font-family: lato;
  font-weight: bold;
  position: absolute;
  left: 38px;
  bottom: 16px;
  text-shadow: 1px 1px 3px pink;
}
</style>