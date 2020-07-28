<template>
<div class="u-course">
  <h1>Courses</h1>
  
  <courses-list></courses-list>

  
</div>
</template>
<script>
import CoursesList from '../courses/courses-list';

export default {
    data(){
      return {

      }
    },
    components: {
      CoursesList
    }
}
</script>
<style>
.u-course {
  margin: 0 15px;
}
</style>

