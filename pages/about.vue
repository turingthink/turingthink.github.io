<template>
  <div>
    <!-- Page Header -->
    <div class="container-xxl py-5 page-header position-relative mb-5">
      <div class="container py-5">
        <h1 class="display-2 text-white animated slideInDown mb-4">TuringThink简介</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-white active" aria-current="page">我们的使命是培养下一代创造者和创新者，在数字时代充分发挥他们的潜力。</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-4">课程体系</h1>
            <p>TuringThink提供多样化的课程，涵盖了多个编程语言和工具，旨在满足不同年龄和技能水平的学生需求。</p>
            <p class="mb-4"><b>1. NOIP C++: 精心设计的NOIP C++课程，为学生提供深入学习C++编程语言的机会。此课程为学生参加全国奥林匹克信息学竞赛做准备。</b></p>
            <p class="mb-4"><b>2. Python: Python课程专注于培养学生对Python的理解和运用能力。通过实践项目和创意应用的开发，学生将在动手实践中提高编程技能。</b></p>
            <p class="mb-4"><b>3. Scratch: 适合初学者的Scratch课程通过图形化编程界面，让学生创作动画、游戏和互动故事。这将激发学生的创造力和逻辑思维。</b></p>
            <p class="mb-4"><b>4. EV3: 利用乐高机器人套件EV3进行机器人编程和控制，培养学生解决问题和团队合作的关键技能。</b></p>
            <p class="mb-4"><b>5. WeDo: 针对年幼学生的乐高编程套件，通过有趣的项目探索基础编程概念，让学生在乐趣中启发好奇心和学习兴趣。</b></p>
          </div>
          <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div class="row">
              <div class="col-12 text-center">
                <img class="img-fluid w-75 rounded-circle bg-light p-3" src="/img/about-1.jpg" alt="">
              </div>
              <div class="col-6 text-start" style="margin-top: -150px;">
                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="/img/about-2.jpg" alt="">
              </div>
              <div class="col-6 text-end" style="margin-top: -150px;">
                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="/img/about-3.jpg" alt="">
              </div>
            </div>
          </div>
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
                <img class="position-absolute w-100 h-100 rounded" src="/img/lets.jpg" style="object-fit: cover;">
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">乐特思教学系统</h1>
                <p class="mb-4">
                  自主研发乐特思教学系统（Learning Explorer Teaching System）。该系统实时记录学生学习情况，并对学习数据进行大数据分析和数据挖掘。教师可以获得学生的多维度学习数据，从而因材施教，为每个学生定制最适合自己的学习方案。
                </p>
                <a class="btn btn-primary py-3 px-5" href="">即将开放<i class="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">教师团队</h1>
          <p>我们的教师团队是我们公司的核心资产，由一群热情、经验丰富的教育专家和编程技术专家组成。我们的教师团队拥有广泛的教育背景和专业知识。</p>
          <p>我们的教师团队具备创新思维和探索精神。他们积极跟踪编程教育领域的最新趋势和技术发展，不断更新教学内容和方法。</p>
        </div>
        <div class="row g-4">
          <TeamMember v-for="(member, index) in teamMembers" :key="index" :member="member" :delay="0.1 + (index * 0.2)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  { name: '王老师', image: '/img/team-1.jpg', description: '有丰富的教学经验，精通多门编程语言，包括scratch、python、c++等。' },
  { name: '郑老师', image: '/img/team-2.jpg', description: '经验丰富、富有爱心和耐心的教育专家。并且是家庭教育心理咨询师。' },
  { name: '马老师', image: '/img/team-3.jpg', description: '丰富的经验和专业知识，擅长教学引导,指导学生，培养他们的编程能力。' }
]

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