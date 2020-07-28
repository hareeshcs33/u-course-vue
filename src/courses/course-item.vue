<template>
    <div class="card course-item">
        <div class="card-header p-0">
            <img src="https://via.placeholder.com/250x150" />
        </div>
        <div class="card-body item-card-body">
            <h3 class="item-title">Javascript Tutorial for complete beginners</h3>
            <div class="item-author">John papa</div>
            <div class="item-rating">
                <span>3.0</span>
                <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
                <span>(1,000)</span>
            </div>
            <div class="item-price">$1000</div>
        </div>
    </div>
</template>
<style>
.course-item {
    color: #3c3b37;
    width: 250px;
}
.item-card-body {
    padding: 10px;
}
.item-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}
.item-author {
    color: #73726c;
    font-size: 12px;
    margin-bottom: 3px;
}
.item-rating {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
}
.item-price {
    font-size: 17px;
    font-weight: bold;
}
</style>