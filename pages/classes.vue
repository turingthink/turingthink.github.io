<template>
  <div>
    <!-- Page Header -->
    <div class="container-xxl py-5 page-header position-relative mb-5">
      <div class="container py-5">
        <h1 class="display-2 text-white animated slideInDown mb-4">课程体系</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-white active" aria-current="page">培养学生的计算思维、逻辑思考、创新创造和问题解决能力，使他们掌握基本的编程概念和技能。</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Classes Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">课程体系</h1>
          <p>少儿编程课程体系旨在提供一个有组织的学习路径，帮助学生逐步提高编程技能，培养计算机科学和编程方面的兴趣，并为他们未来的学术和职业生涯打下坚实的基础。</p>
        </div>
        <div class="row g-4">
          <CourseCard v-for="(course, index) in courses" :key="index" :course="course" :delay="0.1 + (index % 3) * 0.2" />
        </div>
      </div>
    </div>

    <!-- Appointment Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">竞赛和认证</h1>
                <p class="mb-4"><b>一些学生可能参加编程竞赛，如编程奥赛或机器人竞赛，这可以提高他们的竞争力和自信心。同时，一些课程提供编程认证，证明学生已经掌握了特定的编程技能。</b></p>
                <h1 class="mb-4">实践和项目</h1>
                <p class="mb-4"><b>学生通常需要完成各种编程项目，从简单的小程序到更复杂的应用程序或游戏。这些实际项目有助于学生将所学的知识应用到实际中。</b></p>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" src="/img/appointment.jpg" style="object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">少儿编程课程</h1>
          <p>实际的课程内容和模块可能会根据课程提供者和学生的需求而有所不同。</p>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          <TestimonialCard v-for="(item, index) in testimonials" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  { name: 'Scratch 编程', image: '/img/classes-1.jpg', teacher: '王禹老师', title: '金牌讲师', price: '¥90', age: '7-10 岁', duration: '60分钟/节', lessons: '40节' },
  { name: 'Python 编程', image: '/img/classes-2.jpg', teacher: '王禹老师', title: '金牌讲师', price: '¥100', age: '10-16 岁', duration: '60分钟/节', lessons: '40节' },
  { name: 'NOIP C++ 编程', image: '/img/classes-3.jpg', teacher: '马永吉老师', title: '金牌讲师', price: '¥160', age: '14+ 岁', duration: '60分钟/节', lessons: '40节' },
  { name: '幼儿基本搭建(大颗粒)', image: '/img/classes-4.jpg', teacher: '郑达花老师', title: '高级讲师', price: '¥60', age: '3-5 岁', duration: '45分钟/节', lessons: '30节' },
  { name: 'Wedo 机器人编程', image: '/img/classes-5.jpg', teacher: '杨延民老师', title: '钻石讲师', price: '¥70', age: '4-7 岁', duration: '60分钟/节', lessons: '16节' },
  { name: 'Ev3 机器人编程', image: '/img/classes-6.jpg', teacher: '杨延民老师', title: '钻石讲师', price: '¥80', age: '7-12 岁', duration: '60分钟/节', lessons: '24节' }
]

const testimonials = [
  { title: '编程基础', items: ['介绍编程和计算机的基本概念', '学习编程语言的基本语法、变量和数据类型', '熟悉条件语句和循环结构'] },
  { title: '图形编程', items: ['使用图形编程工具（如Scratch）创建动画和交互式故事', '学习事件处理和控制角色行为', '创作自己的游戏和应用程序'] },
  { title: '编程语言深入学习', items: ['学习一门主流编程语言，如Python或JavaScript', '深入了解面向对象编程思想', '参与开发实际项目'] }
]

onMounted(() => {
  nextTick(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<span class="owl-prev">‹</span>', '<span class="owl-next">›</span>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }
      })
    }
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