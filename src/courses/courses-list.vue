<template>
    <div class="course-list">
        <course-item></course-item>
    </div>
</template>
<script>
import CourseItem from './course-item';

export default {
    data(){
        return {

        }
    },
    components: {
        CourseItem
    }
}
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