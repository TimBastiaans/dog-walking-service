<template>
  <!-- Header -->
  <header id="header" class="header">
    <video-background
        :src=videoURL
        style="max-height: 800px; height: 100vh;">
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-container">
                <h1>{{ title }}</h1>
                <h5 class="p-heading p-intro">{{ subTitle }} </h5>
                <h5 class="p-heading p-large">{{ text }} </h5>
                <a class="btn-solid-lg page-scroll" href="#intro">Werkwijze</a>
              </div>
            </div> <!-- end of col -->
          </div> <!-- end of row -->
        </div> <!-- end of container -->
      </div> <!-- end of header-content -->
    </video-background>

  </header> <!-- end of header -->
  <!-- end of header -->
</template>

<script>
import {header, videos} from "@/website"
export default {
  name: "AppHeader",
  data() {
    return {
      title: header.title,
      subTitle: header.subTitle,
      text: header.text,
      videoURL: videos.intro,
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {}
}
</script>

<style scoped>
.p-intro{
  margin-top: 1em;
  margin-bottom: 0;
  color: #dfe5ec;
}
</style>