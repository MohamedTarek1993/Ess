<template>
  <div>
    <div class="card_choose">
      <img src="require(`../../src/assets/image/${post.img}.png" alt=" choose us" />
      <h4>{{ post.title }}</h4>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardChoose",
  props: ["post"],
};
</script>

<style>
</style>