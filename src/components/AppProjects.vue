<template>
  <!-- Projects -->
  <div id="projects" class="filter">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">{{title}}</div>
          <h2>{{text}}</h2>
        </div> <!-- end of col -->
      </div> <!-- end of row -->
      <div class="row">
        <div class="col-lg-12">
          <!-- Filter -->
<!--          <div class="button-group filters-button-group">-->
<!--            <a class="button is-checked" data-filter="*"><span>SHOW ALL</span></a>-->
<!--            <a class="button" data-filter=".design"><span>DESIGN</span></a>-->
<!--            <a class="button" data-filter=".development"><span>DEVELOPMENT</span></a>-->
<!--            <a class="button" data-filter=".marketing"><span>MARKETING</span></a>-->
<!--            <a class="button" data-filter=".seo"><span>SEO</span></a>-->
<!--          </div> &lt;!&ndash; end of button group &ndash;&gt;-->
          <div class="grid">
            <div class="element-item development">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Axel</span></div><img :src=dogs.axel alt="alternative"></a>
            </div>
            <div class="element-item development">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Jochem</span></div><img :src=dogs.jochem alt="alternative"></a>
            </div>
            <div class="element-item design development marketing">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Balou</span></div><img :src=dogs.matie alt="alternative"></a>
            </div>
            <div class="element-item design development marketing">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Balder</span></div><img :src=dogs.balder alt="alternative"></a>
            </div>
            <div class="element-item design development marketing seo">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Silke</span></div><img :src=dogs.silke alt="alternative"></a>
            </div>
            <div class="element-item design marketing seo">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Keet & Tasman</span></div><img :src=dogs.KeetEnTasman alt="alternative"></a>
            </div>
            <div class="element-item design marketing">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>George</span></div><img :src=dogs.george alt="alternative"></a>
            </div>
            <div class="element-item design marketing">
              <a class="popup-with-move-anim"><div class="element-item-overlay"><span>Roos</span></div><img :src=dogs.roos alt="alternative"></a>
            </div>
          </div> <!-- end of grid -->
          <!-- end of filter -->
        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of filter -->
  <!-- end of projects -->
</template>

<script>
import {dogImages} from "@/website";
import {dogs} from "@/website";

export default {
  name: "AppProjects",
  data(){
    return{
      dogs: dogImages,
      title: dogs.title,
      text: dogs.text,
    }
  },
}
</script>

<style scoped>

</style>