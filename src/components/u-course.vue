<template>
  <div class="u-course mt-3">
    <h2 class="section-title">Courses</h2>
    <courses-list :courses="filteredCourses"> </courses-list>
  </div>
</template>
<script>
import CoursesList from "../courses/courses-list";
import { eventBus } from "../main";

export default {
  data() {
    return {
      courses: [
        {
          title: "Javascript Tutorial for complete beginners",
          author: "John papa",
          rating: "3.0",
          ratingCount: "1,000",
          price: "3,000",
          id: 1
        },
        {
          title: "jQuery Tutorial for complete beginners",
          author: "John papa",
          rating: "3.0",
          ratingCount: "1,000",
          price: "2,000",
          id: 2
        },
        {
          title: "Bootstrap Tutorial for complete beginners",
          author: "John papa",
          rating: "3.0",
          ratingCount: "1,000",
          price: "1,000",
          id: 3
        },
        {
          title: "CSS3 Tutorial for complete beginners",
          author: "John papa",
          rating: "3.0",
          ratingCount: "1,000",
          price: "500",
          id: 4
        },
        {
          title: "HTML5 Tutorial for complete beginners",
          author: "John papa",
          rating: "3.0",
          ratingCount: "1,000",
          price: "400",
          id: 5
        }
      ],
      searchText: ""
    };
  },
  components: {
    CoursesList
  },
  created() {
    eventBus.$on("searchText", searchText => {
      this.searchText = searchText;
    });
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(item => {
        return item.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }
};
</script>
<style>
.u-course {
  margin: 0 15px;
}
</style>
