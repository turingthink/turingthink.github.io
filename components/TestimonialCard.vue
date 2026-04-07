<template>
  <div class="testimonial-item bg-light rounded p-5">
    <ol class="fs-5" v-for="(item, idx) in item.items" :key="idx">
      <b><i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i> {{ item }}</b>
    </ol>
    <div class="d-flex align-items-center bg-white me-n5" style="border-radius: 50px 0 0 50px;">
      <div class="ps-3">
        <h3 class="mb-1">{{ item.title }}</h3>
      </div>
      <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true }
})
</script>