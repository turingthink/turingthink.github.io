<template>
  <div>
    <!-- Page Header -->
    <div class="container-xxl py-5 page-header position-relative mb-5">
      <div class="container py-5">
        <h1 class="display-2 text-white animated slideInDown mb-4">EV3 机器人编程</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-white active" aria-current="page">动手实践，培养工程思维</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Introduction Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-4">什么是 EV3？</h1>
            <p class="mb-4"><b>EV3</b> 是乐高（LEGO）Mindstorms 系列的第三代机器人产品，结合了机械搭建和编程控制。</p>
            <p class="mb-4">通过 EV3，孩子可以设计、搭建和编程自己的机器人，培养空间想象力、工程思维和解决问题的能力。</p>
            <div class="row g-3">
              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="bg-light rounded p-3 text-center">
                  <i class="fas fa-robot fa-3x text-primary mb-2"></i>
                  <p class="mb-0">机器人设计</p>
                </div>
              </div>
              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                <div class="bg-light rounded p-3 text-center">
                  <i class="fas fa-microchip fa-3x text-success mb-2"></i>
                  <p class="mb-0">编程控制</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div class="row">
              <div class="col-12 text-center">
                <img class="img-fluid w-75 rounded-circle bg-light p-3" src="/img/classes-6.jpg" alt="EV3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course System Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">EV3 课程体系</h1>
          <p>从机械基础到智能机器人</p>
        </div>
        
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="bg-light rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="text-primary mb-3"><i class="fas fa-cubes me-2"></i>第一阶段：机械基础</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>梁、轴、销的连接</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>齿轮传动原理</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>涡轮箱的应用</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>滑轮与皮带传动</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>杠杆原理</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>曲柄摇杆机构</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>凸轮机构</li>
                    <li class="mb-2"><i class="fas fa-check text-primary me-2"></i>基本机器人底盘</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="bg-light rounded p-4 wow fadeInUp" data-wow-delay="0.2s">
              <h3 class="text-success mb-3"><i class="fas fa-laptop-code me-2"></i>第二阶段：EV3 编程入门</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>EV3 主机介绍</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>编程软件界面</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>马达控制</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>传感器介绍</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>颜色传感器</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>超声波传感器</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>触动传感器</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>陀螺仪传感器</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12">
            <div class="bg-light rounded p-4 wow fadeInUp" data-wow-delay="0.3s">
              <h3 class="text-warning mb-3"><i class="fas fa-trophy me-2"></i>第三阶段：机器人挑战</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>巡线机器人</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>迷宫机器人</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>搬运机器人</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>相扑机器人</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>投篮机器人</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>解魔方机器人</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>FLL 竞赛入门</li>
                    <li class="mb-2"><i class="fas fa-check text-warning me-2"></i>创意机器人设计</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">开启机器人编程之旅</h1>
          <p>培养未来工程师</p>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="bg-light rounded p-4 text-center wow fadeInUp" data-wow-delay="0.1s">
              <i class="fas fa-clock fa-3x text-primary mb-3"></i>
              <h4 class="mb-3">课程时长</h4>
              <p class="mb-0">60分钟/节</p>
              <p>共24节课</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="bg-light rounded p-4 text-center wow fadeInUp" data-wow-delay="0.2s">
              <i class="fas fa-user-graduate fa-3x text-success mb-3"></i>
              <h4 class="mb-3">适学年龄</h4>
              <p class="mb-0">7-12 岁</p>
              <p>需有搭建基础</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="bg-light rounded p-4 text-center wow fadeInUp" data-wow-delay="0.3s">
              <i class="fas fa-yen-sign fa-3x text-warning mb-3"></i>
              <h4 class="mb-3">课程费用</h4>
              <p class="mb-0">¥80/节</p>
              <p>按课时收费</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg rounded-pill px-5">
            立即咨询报名 <i class="fa fa-arrow-right ms-2"></i>
          </NuxtLink>
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