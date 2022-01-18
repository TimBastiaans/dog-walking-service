<template>
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    <!-- Text Logo - Use this if you don't have a graphic logo -->
    <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Aria</a> -->

    <!-- Image Logo -->
    <a class="navbar-brand logo-image" v-if="!IsMobile()" href="index.html"><img :src=logo alt="alternative"></a>

    <!-- Mobile Menu Toggle Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-awesome fas fa-bars"></span>
      <span class="navbar-toggler-awesome fas fa-times"></span>
    </button>
    <!-- end of mobile menu toggle button -->

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#intro">INTRO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#services">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#callMe">CALL ME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#projects">PROJECTS</a>
        </li>

        <!-- Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" :href=documents.terms ><span class="item-text">ALGEMENE VOORWAARDEN</span></a>
            <div class="dropdown-items-divide-hr"></div>
            <a class="dropdown-item" :href=documents.registration ><span class="item-text">INSCHRIJFFORMULIER</span></a>
            <div class="dropdown-items-divide-hr"></div>
            <a class="dropdown-item" :href=documents.keyContract ><span class="item-text">SLEUTELCONTRACT</span></a>
          </div>
        </li>
        <!-- end of dropdown menu -->

        <li class="nav-item">
          <a class="nav-link page-scroll" href="#contact">CONTACT</a>
        </li>
      </ul>
      <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a :href=socials.facebook>
                        <span class="hexagon"></span>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a :href=socials.linkedIn>
                        <span class="hexagon"></span>
                        <i class="fab fa-linkedin fa-stack-1x"></i>
                    </a>
                </span>
            </span>
    </div>
  </nav> <!-- end of navbar -->
  <!-- end of navbar -->
</template>

<script>
import {images, socials, documents} from "@/website";

export default {
  name: "AppNavigation",
  data(){
    return{
      socials: socials,
      logo: images.logo,
      documents: documents,
      pdflink: "src/assets/Documents/AlgemeneVoorwaarden.pdf"
    }
  },
  created() {
  },
  methods: {
      IsMobile(){
        return window.innerWidth <= 760;
      }
  },
}
</script>

<style scoped>
.navbar-custom .navbar-brand.logo-image img{
  height: auto;
}
</style>