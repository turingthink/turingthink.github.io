<template>
  <footer class="container-fluid bg-dark text-white-50 footer mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">TuringThink</a> All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <NuxtLink to="/">首页</NuxtLink>
              <NuxtLink to="/classes">课程大纲</NuxtLink>
              <NuxtLink to="/about">帮助</NuxtLink>
              <NuxtLink to="/contact">问题列表</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-menu a {
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid rgba(255, 255, 255, .1);
  color: #fff;
}
.footer-menu a:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: none;
}
.footer-menu a:hover {
  color: var(--primary) !important;
}
</style>