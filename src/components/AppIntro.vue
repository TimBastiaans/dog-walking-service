<template>
  <!-- Intro -->
  <div id="intro" class="basic-1">

    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="text-container">
            <div class="section-title">INTRO</div>
            <h2>{{introText.header}}</h2>
            <p>{{ introText.introText}}</p>
            <p class="testimonial-text">{{introText.introducement}}</p>
            <div class="testimonial-author">Jeanette Bastiaans</div>
          </div> <!-- end of text-container -->
        </div> <!-- end of col -->
        <div class="col-lg-7">
          <div class="image-container">
            <img class="img-fluid" :src=selfPortrait alt="alternative">
          </div> <!-- end of image-container -->
        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of basic-1 -->
  <!-- end of intro -->
</template>

<script>
import {images, videos, intro} from "@/website";
export default {
  name: "AppIntro",
  components:{
  },
  data(){
    return{
      videoURL: videos.intro,
      selfPortrait: images.jeannette,
      introText: intro,
    }
  }
}
</script>

<style scoped>
</style>