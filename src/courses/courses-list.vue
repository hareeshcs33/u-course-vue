<template>
  <div class="course-list">
      <course-item
        v-for="(item, index) in courses"
        :key="index" :item="item"
        @click.native="eachCourseItem(index)"
        ></course-item>
  </div>
</template>
<script>
import CourseItem from "./course-item";

export default {
  props: ["courses"],
  data() {
    return {};
  },
  components: {
    CourseItem
  },
  methods: {
    eachCourseItem(index){
        console.log('eachCourseItem', index);
    }
  }
};
</script>
<style>
.course-list {
  display: flex;
  flex-flow: row wrap;
}
.course-item {
  margin: 0 5px 20px;
}
</style>
