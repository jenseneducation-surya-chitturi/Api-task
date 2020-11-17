<template>
  <div class="home">
    <h1 @click="$router.push({ name: 'About'})">STAR WAR PERSON DETAILS</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style scoped>
.home{
  background-color: gray;
}
h1{
font-size: 3em;
  text-align: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

</style>
