<template>
  <div class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="delay + 's'">
    <div class="classes-item">
      <div class="bg-light rounded-circle w-75 mx-auto p-3">
        <img class="img-fluid rounded-circle" :src="course.image" :alt="course.name">
      </div>
      <div class="bg-light rounded p-4 pt-5 mt-n5">
        <NuxtLink class="d-block text-center h3 mt-3 mb-4" :to="course.link">{{ course.name }}</NuxtLink>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="d-flex align-items-center">
            <img class="rounded-circle flex-shrink-0" :src="course.teacherImage" alt="" style="width: 45px; height: 45px;">
            <div class="ms-3">
              <h6 class="text-primary mb-1">{{ course.teacher }}</h6>
              <small>{{ course.title }}</small>
            </div>
          </div>
          <span class="bg-primary text-white rounded-pill py-2 px-3">{{ course.price }}</span>
        </div>
        <div class="row g-1">
          <div class="col-4">
            <div class="border-top border-3 border-primary pt-2">
              <h6 class="text-primary mb-1">适学年龄:</h6>
              <small>{{ course.age }}</small>
            </div>
          </div>
          <div class="col-4">
            <div class="border-top border-3 border-success pt-2">
              <h6 class="text-success mb-1">时长:</h6>
              <small>{{ course.duration }}</small>
            </div>
          </div>
          <div class="col-4">
            <div class="border-top border-3 border-warning pt-2">
              <h6 class="text-warning mb-1">课时:</h6>
              <small>{{ course.lessons }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: { type: Object, required: true },
  delay: { type: Number, default: 0.1 }
})
</script>

<style scoped>
.classes-item {
  transition: .5s;
}
.classes-item:hover {
  margin-top: -10px;
}
</style>