<template>
  <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
    <TestimonialCard v-for="(item, index) in testimonials" :key="index" :item="item" />
  </div>
</template>

<script setup>
const { testimonials } = useTestimonials()
</script>