<template>
  <div class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="delay + 's'">
    <div class="team-item position-relative">
      <img class="img-fluid rounded-circle w-75" :src="member.image" :alt="member.name">
      <div class="team-text">
        <h3>{{ member.name }}</h3>
        <p>{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: { type: Object, required: true },
  delay: { type: Number, default: 0.1 }
})
</script>

<style scoped>
.team-item .team-text {
  position: absolute;
  width: 250px;
  height: 250px;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #FFFFFF;
  border: 17px solid var(--light);
  border-radius: 250px;
  transition: .5s;
}
.team-item:hover .team-text {
  border-color: var(--primary);
}
</style>