<template>
  <div class="cart-list-block">
    <header class="py-4 mb-5">
      <div class="cart-header-content">
        <div class="d-flex align-item-center shopping-sm-text mb-1">
          <span><i class="fas fa-home"></i></span><span class="mx-2">/</span><span>Shopping Cart</span>
        </div>
        <div class="d-flex align-item-center">
          <h3>Shopping Cart</h3>
        </div>
      </div>
    </header>
    <section>
      <div class="cart-count"><span>0</span> Courses in Cart</div>
      <div class="cart-list">
        <div v-if="cartEmpty" class="cart-empty">
          <span><i class="fas fa-shopping-cart cart-img"></i></span>
          <span class="keep-shopping-text">Your cart is empty. Keep shopping to find a course!</span>
          <button class="btn btn-danger btn-lg">Keep Shopping</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return {
      cartEmpty: true
    }
  },
  methods: {

  }
}
</script>

<style>
header {
  color: #fff;
  background: #505763;
}
.cart-header-content {
  width: 90%;
  margin: auto;
}
.shopping-sm-text {
  font-size: 15px;
}
section {
  position: relative;
  width: 90%;
  margin: auto;
}
.cart-count {
  color: #29303b;
  font-size: 17px;
  margin-bottom: 5px;
}
.cart-list {
  box-shadow: 0 0 2px #dedfe0;
  padding: 30px;
}
.cart-list .cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart-img {
  color: #e8e9eb;
  font-size: 100px;
  margin-bottom: 20px;
}
.keep-shopping-text {
  color: #29303b;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>