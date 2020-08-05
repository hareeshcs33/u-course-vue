<template>
    <div class="footer-block">
        <div class="footer-content">
            <div class="links">
                <div class="links-list">
                    <ul class="links-list-content">
                        <li>UCourse for Business</li>
                        <li>Teach on UCourse</li>
                        <li>Get the app</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                    <ul class="links-list-content">
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Help and Support</li>
                        <li>Affiliate</li>
                    </ul>
                    <ul class="links-list-content">
                        <li>Terms</li>
                        <li>Privacy policy and cookie policy</li>
                        <li>Sitemap</li>
                        <li>Featured courses</li>
                    </ul>
                </div>
                <ul class="drop-down-list">
                    <li class="form-group">
                        <select class="form-control w-100">
                            <option v-for="(option, index) in options" :key="index">{{option}}</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="position-relative d-flex align-item-center justify-content-between">
                <div class="navbar-brand pl-4 pb-2">
                    <router-link to="/u-course"><span class="u-text">U</span> <span class="course-text">course</span></router-link>
                </div>
                <div class="inc-link">&copy; UCourse, Inc</div>
            </div>
            <div class="my-link text-center">hareesh Sapparad &copy; Copyright 2020 </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            options: [
                'English',
                'bbb',
                'ccc',
                'ddd',
                'EEEE',
                'FFFF'
            ]
        }
    }
}
</script>
<style>
.footer-block {
    padding: 30px;
}
.links {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.links-list {
    width: 70%;
    display: flex;
    justify-content: space-between;
}
.links-list-content{
    display: flex;
    flex-direction: column;
}
.links-list-content li {
    color: #4c8fd3;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
}
.drop-down-list {
    width: 18%;
    display: flex;
    justify-content: flex-end;
}
.drop-down-list li {
    width: 100%;
}
.inc-link{
    color: #73726c;
    font-size: 14px;
}
.my-link {
    color: #4c8fd3;
    font-size: 12px;
}
.my-link:hover {
    color: #000;
}
</style>