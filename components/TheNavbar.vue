<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <NuxtLink to="/" class="navbar-brand">
      <img src="/img/logo.jpg" class="m-0 logo" alt="TuringThink">
    </NuxtLink>
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav mx-auto">
        <NuxtLink to="/" class="nav-item nav-link" :class="{ active: route.path === '/' }">首页</NuxtLink>
        <NuxtLink to="/about" class="nav-item nav-link" :class="{ active: route.path === '/about' }">关于我们</NuxtLink>
        <NuxtLink to="/classes" class="nav-item nav-link" :class="{ active: route.path === '/classes' }">课程体系</NuxtLink>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">编程课程</a>
          <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <NuxtLink to="/ai" class="dropdown-item">AI 人工智能</NuxtLink>
            <NuxtLink to="/noip" class="dropdown-item">NOIP C++ 竞赛</NuxtLink>
            <NuxtLink to="/python" class="dropdown-item">Python 课程</NuxtLink>
            <NuxtLink to="/scratch" class="dropdown-item">Scratch 编程</NuxtLink>
            <NuxtLink to="/ev3" class="dropdown-item">EV3 课程</NuxtLink>
            <NuxtLink to="/wedo" class="dropdown-item">Wedo 课程</NuxtLink>
            <NuxtLink to="/big-blocks" class="dropdown-item">大颗粒 课程</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/contact" class="nav-item nav-link" :class="{ active: route.path === '/contact' }">联系我们</NuxtLink>
      </div>
      <NuxtLink to="/contact" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">
        加入我们<i class="fa fa-arrow-right ms-3"></i>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
</script>