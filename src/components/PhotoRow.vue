<template>
  <div class="photo-row text-center">
    <img v-for="dogImage in images" :src=dogImage class="photo-box" :key="dogImage" :alt="images.marley">
  </div>
</template>

<script>

import {images} from "@/website";
export default {
  name: "PhotoBoxLine",
  data(){
    return{
      images: images
    }
  }
}

</script>

<style scoped>
.photo-box{
  width: 120px;
  height: 120px;
  object-fit: fill;
  margin-right: 10px;
}
.photo-row{
  padding: 1em;
}
</style>