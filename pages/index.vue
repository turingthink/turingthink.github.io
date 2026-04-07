<template>
  <div>
    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5">
      <div class="owl-carousel header-carousel position-relative" ref="headerCarousel">
        <div class="owl-carousel-item position-relative">
          <img class="img-fluid" src="/img/carousel-1.jpg" alt="">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(0, 0, 0, .2);">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">LETS教学系统</h1>
                  <p class="fs-5 fw-medium text-white mb-4 pb-2">自主研发乐特思教学系统（Learning Explorer Teaching System）, 进行数据分析和数据挖掘, 从而因材施教制定个性化的学的学习方案。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-carousel-item position-relative">
          <img class="img-fluid" src="/img/carousel-2.jpg" alt="">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(0, 0, 0, .2);">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">TuringThink专注少儿编程</h1>
                  <p class="fs-5 fw-medium text-white mb-4 pb-2">致力于激发创造力，逻辑思维能力和多维度的学习能力，通过有趣而实践的课程，我们帮助学生掌握编程技能，并培养他们解决问题的能力。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel End -->

    <!-- Facilities Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">八大能力</h1>
          <p>通过我们的课程多方面提升学生的综合能力</p>
        </div>
        <div class="row g-4">
          <FacilityItem v-for="(item, index) in facilities1" :key="index" :item="item" :delay="0.1 + (index * 0.2)" />
        </div>
      </div>
    </div>

    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-4">
          <FacilityItem v-for="(item, index) in facilities2" :key="index" :item="item" :delay="0.1 + (index * 0.2)" />
        </div>
      </div>
    </div>

    <!-- Call To Action Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" src="/img/call-to-action.jpg" style="object-fit: cover;">
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">带你走进编程世界</h1>
                <p class="mb-4">编程是一个充满挑战但也充满乐趣和奖励的领域。随着时间的推移，你将发现自己可以创造出令人印象深刻的应用程序和解决方案，同时也提高了解决问题和逻辑思考的能力。继续学习和不断进步，你将在编程世界中取得更多的成就。祝你编程旅程愉快！</p>
              </div>
            </div>
          </div>
        </div>
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
          <CourseCard v-for="(course, index) in courses" :key="index" :course="course" :delay="0.1 + (index * 0.2)" />
        </div>
      </div>
    </div>

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">教师团队</h1>
          <p>我们的教师团队是我们公司的核心资产，由一群热情、经验丰富的教育专家和编程技术专家组成。</p>
        </div>
        <div class="row g-4">
          <TeamMember v-for="(member, index) in teamMembers" :key="index" :member="member" :delay="0.1 + (index * 0.2)" />
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
const facilities1 = [
  { icon: 'fa-lightbulb', color: 'primary', title: '逻辑思维能力', desc: '鼓励孩子编写自己的算法和程序来解决问题。' },
  { icon: 'fa-square-root-alt', color: 'success', title: '数学能力', desc: '编写算法来解决问题，培养孩子的逻辑思维和分析能力。' },
  { icon: 'fa-question', color: 'warning', title: '发现并解决问题的能力', desc: '给孩子一些创造性的编程挑战，鼓励他们思考新的方法和创新的解决方案。' },
  { icon: 'fa-chalkboard-teacher', color: 'info', title: '专注力', desc: '将编程学习划分为较短的时间段，每次集中精力完成一个小任务。' }
]

const facilities2 = [
  { icon: 'fa-tools', color: '4', title: '创新创造能力', desc: '鼓励孩子学习新的编程技术和工具。' },
  { icon: 'fa-users', color: '5', title: '团队协作能力', desc: '组织团队编程挑战，要求孩子在团队中合作完成编程任务。' },
  { icon: 'fa-microphone-alt', color: '6', title: '语言表达能力', desc: '要求孩子在小组或班级中进行技术演示和演讲。' },
  { icon: 'fa-hammer', color: '7', title: '动手能力', desc: '不仅限于编程，也鼓励孩子学习其他动手技能。' }
]

const courses = [
  { name: 'AI 人工智能', image: '/img/classes-0.jpg', teacher: '王禹老师', title: '金牌讲师', price: '¥180', age: '12-18 岁', duration: '60分钟/节', lessons: '60节', link: '/ai' },
  { name: 'Scratch 编程', image: '/img/classes-1.jpg', teacher: '郑达花老师', title: '钻石讲师', price: '¥90', age: '7-10 岁', duration: '60分钟/节', lessons: '40节', link: '/scratch' },
  { name: 'Python 编程', image: '/img/classes-2.jpg', teacher: '杨延民老师', title: '金牌讲师', price: '¥100', age: '10-16 岁', duration: '60分钟/节', lessons: '40节', link: '/python' },
  { name: 'NOIP C++ 编程', image: '/img/classes-3.jpg', teacher: '马永吉老师', title: '金牌讲师', price: '¥160', age: '14+ 岁', duration: '60分钟/节', lessons: '40节', link: '/noip' }
]

const teamMembers = [
  { name: '王老师', image: '/img/team-1.jpg', description: '有丰富的教学经验，精通多门编程语言，包括python、c++等。' },
  { name: '郑老师', image: '/img/team-2.jpg', description: '经验丰富、富有爱心和耐心的教育专家。并且是家庭教育心理咨询师。' },
  { name: '马老师', image: '/img/team-3.jpg', description: '丰富的经验和专业知识，擅长教学引导,指导学生，培养他们的编程能力。' }
]

const { testimonials } = useTestimonials()

onMounted(() => {
  nextTick(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $('.header-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: ['<span class="owl-prev">‹</span>', '<span class="owl-next">›</span>']
      })
      
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