<template>
  <div class="col-lg-3 col-sm-6 wow fadeInUp" :data-wow-delay="delay + 's'">
    <div class="facility-item">
      <div :class="['facility-icon', 'bg-' + item.color]">
        <span :class="['bg-' + item.color]"></span>
        <i :class="['fas', 'fa-' + item.icon, 'fa-3x', 'text-' + item.color]"></i>
        <span :class="['bg-' + item.color]"></span>
      </div>
      <div :class="['facility-text', 'bg-' + item.color]">
        <h3 :class="['text-' + item.color + ' mb-3']">{{ item.title }}</h3>
        <p class="mb-0">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  delay: { type: Number, default: 0.1 }
})
</script>