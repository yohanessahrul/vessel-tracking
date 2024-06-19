<template>
  <div>
    <h2>Vessel tracking... {{ id  }}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus id unde aperiam voluptatibus eveniet voluptatum sit, hic eum aliquid. Error quas delectus blanditiis corrupti eligendi rem quam culpa? Eum, hic.</p>
    <p><NuxtLink to="/">Back to Home</NuxtLink></p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
</script>

<style scoped>

</style>