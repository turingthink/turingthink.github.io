<template>
  <div>
    <!-- Page Header -->
    <div class="container-xxl py-5 page-header position-relative mb-5">
      <div class="container py-5">
        <h1 class="display-2 text-white animated slideInDown mb-4">联系我们</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-white active" aria-current="page">我们期待并欢迎您的加入!</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Contact Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">联系方式</h1>
        </div>
        <div class="row g-4 mb-5">
          <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 75px; height: 75px;">
              <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
            </div>
            <h6>中国云南省昆明市呈贡区</h6>
          </div>
          <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 75px; height: 75px;">
              <i class="fa fa-envelope-open fa-2x text-primary"></i>
            </div>
            <h6>turingthink@proton.me</h6>
          </div>
          <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 75px; height: 75px;">
              <i class="fa fa-phone-alt fa-2x text-primary"></i>
            </div>
            <h6>+086 138 9727 1605</h6>
          </div>
          <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.7s">
            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 75px; height: 75px;">
              <i class="fab fa-weixin fa-2x text-primary"></i>
            </div>
            <h6>lvqingfei2021</h6>
            <img class="w-50 h-50 rounded" src="/img/wx.png" style="object-fit: contain;">
          </div>
        </div>
      </div>
    </div>

    <!-- Call To Action Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">欢迎您的加入我们</h1>
                <p class="mb-4 fs-5">
                  非常感谢您的邀请和欢迎！我很高兴能够参与并回答您的问题以及提供帮助。如果您有任何问题、疑虑或需要进一步的信息，请随时向我提问。我将尽力为您提供最好的答案和支持。再次感谢您的欢迎！ 
                </p>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" src="/img/map.jpg" style="object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  nextTick(() => {
    if (window.WOW) {
      new window.WOW().init()
    }
  })
})
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(/img/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}
</style>