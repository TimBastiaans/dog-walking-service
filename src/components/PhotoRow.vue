<template>
  <div class="photo-row text-center show-on-desktop">
    <img v-for="dogImage in images" :src=dogImage class="photo-box" :key="dogImage" :alt="images.marley">
  </div>
</template>

<script>

import {imagesRow} from "@/website";
export default {
  name: "PhotoBoxLine",
  data(){
    return{
      images: imagesRow
    }
  }
}

</script>

<style scoped>
.photo-box{
  width: 180px;
  height: 180px;
  object-fit: scale-down;
  margin-right: 10px;
}
.photo-row{
  padding: 1em;
}
@media (max-width: 760px) {
  .show-on-desktop { display: none !important; }
}
</style>