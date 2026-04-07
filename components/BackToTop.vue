<template>
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i class="bi bi-arrow-up"></i>
  </a>
</template>

<script setup>
onMounted(() => {
  const backToTop = document.querySelector('.back-to-top')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block'
    } else {
      backToTop.style.display = 'none'
    }
  })
  
  backToTop?.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  display: none;
  right: 45px;
  bottom: 45px;
  z-index: 99;
}
</style>