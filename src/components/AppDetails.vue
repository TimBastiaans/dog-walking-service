<template>
  <!-- Details 1 -->
  <div id="details" class="accordion">
    <div class="area-1">
    </div><!-- end of area-1 on same line and no space between comments to eliminate margin white space --><div class="area-2">

    <!-- Accordion -->
    <div class="accordion-container" id="accordionOne">
      <h2>Waarom hondenuitlaatservice Marley?</h2>
      <div class="item">
        <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span><span class="accordion-title">Het allerbeste voor jouw hond</span>
                        </span>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
          <div class="accordion-body">
            - De lichaamsbeweging die elke hond nodig heeft <br>
            - Socialisatie met andere honden en mensen <br>
            - Extra liefde en aandacht waar iedere hond dol op is
          </div>
        </div>
      </div> <!-- end of item -->

      <div class="item">
        <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">Veiligheid staat op nummer <a class="big-one">1</a></span>
                        </span>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
          <div class="accordion-body">
            Jouw hond zal voor alle zekerheid een gps tracker tijdens het uitlaten.
          </div>
        </div>
      </div> <!-- end of item -->

      <div class="item">
        <div id="headingthree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Intakegesprek en eerste wandeling </span>
                        </span>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
          <div class="accordion-body">
            Deze is gratis waarbij u zelf ook van harte welkom bent om met ons mee te gaan.
          </div>
        </div>
      </div> <!-- end of item -->

      <div class="item">
        <div id="headingFour">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">4</span><span class="accordion-title">Je hond wordt altijd thuis opgehaald</span>
                        </span>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
          <div class="accordion-body">
            Marley haalt alle honden op in een bus die zijn ingericht voor iedere hond met een eigen bench.
          </div>
        </div>
      </div> <!-- end of item -->

      <div class="item">
        <div id="headingFive">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">5</span><span class="accordion-title">Foto's van de avonturen van uw hond</span>
                        </span>
        </div>
        <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
          <div class="accordion-body">
            Brengt na iedere paar wandelingen verslag en/of foto's uit van de avonturen van uw hond.
                <span class="fa-stack">
                    <a :href=socials.facebook>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
          </div>
        </div>
      </div> <!-- end of item -->
    </div>
  </div> <!-- end of area-2 -->
  </div> <!-- end of accordion -->
  <!-- end of details 1 -->
</template>

<script>
import {socials} from "@/website";

export default {
  name: "AppDetails",
  data() {
    return {
      socials: socials,
    }
  }
}
</script>

<style scoped>
@media (min-width: 1200px){
  .accordion .accordion-container{
    max-width: 36rem;
  }
}
@media (max-width: 761px){
  .accordion .accordion-container{
    padding-top: 2rem;
  }
}
.big-one{
  font-size: 24px;
  font-family: sans-serif;
}

</style>