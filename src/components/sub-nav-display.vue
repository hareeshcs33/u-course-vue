<template>
  <div class="sub-nav-section">
    <ul class="sub-nav-list">
      <li 
        :class="showSubNavSublist ? 'active' : ''"
        @mouseenter="showSubNavSublist = true"
        @mouseleave="showSubNavSublist = false"
      >
        <span></span>Development
      </li>
      <li><span v-if="showSubNavSublist"></span>Business</li>
      <li><span></span>IT & Software</li>
      <li><span></span>Office Productivity</li>
      <li><span></span>Personal Development</li>
      <li><span></span>Design</li>
      <li><span></span>Marketing</li>
      <li><span></span>Health & Fitness</li>
      <li><span></span>Music</li>
    </ul>
    <ul v-if="showSubNavSublist" class="sub-nav-sublist">
      <li>Web Development</li>
      <li>Databases</li>
      <li>Software Testing</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSubNavSublist: Boolean
    };
  }
};
</script>
<style>
.sub-nav-section {
  position: relative;
}
.sub-nav-list,
.sub-nav-sublist {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-nav-list li.active span::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #000;
  position: absolute;
  left: 49%;
  top: 14px;
}
.sub-nav-list li:hover {
  color: turquoise;
}
.sub-nav-list li,
.sub-nav-sublist li {
    position: relative;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}
.sub-nav-sublist {
  /* visibility: hidden; */
}
.sub-nav-sublist {
  /* visibility: visible; */
}
.sub-nav-sublist {
  color: #fff;
  background: #000;
  position: absolute;
  width: 100%;
  top: 30px;
  left: 0;
}
.sub-nav-sublist li {
  padding: 8px 12px;
}
</style>
