<template>
    <div class="social-nav-section">
        <ul class="social-nav-list">
            <!-- <li><i class="fab fa-github"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-google"></i></li> -->
        </ul>
    </div>
</template>
<style>
.social-nav-section {
    background: #000;
    width: 100%;
    height: 31px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.social-nav-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.social-nav-list li {
    color: #fff;
    font-size: 15px;
    border: 2px solid red;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    margin: 0 5px;
    cursor: pointer;
    padding: 2px;
}
.social-nav-list li:hover {
    background: red;
}
</style>