<template>
  <!-- Services -->
  <div id="services" class="cards-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 service-title">
          <div class="section-title">TARIEVEN</div>
          <h2>{{splitTitle(0)}},<br> {{splitTitle(1)}}</h2>
          <p>{{discountMessage}}</p>
        </div> <!-- end of col -->
      </div> <!-- end of row -->
      <div class="row">
        <div class="card-deck">
          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" :src=pricePicture1 alt="alternative">
            </div>
            <div class="card-body">
              <h5 class="card-title show-on-desktop">{{ entryOption }}</h5>
              <h3 class="card-title show-on-mobile">{{ entryOption }}</h3>
              <p class="price"><span>Gratis</span></p>
            </div>
            <div class="button-container">
              <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> <!-- end of button-container -->
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" :src=pricePicture2 alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option1}}</h3>

              <p class="price"><span>{{priceOption1}}</span></p>
            </div>
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" :src=pricePicture3 alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option2}}</h3>
<!--              <p>You already are a reference point in your industry now you need to learn about acquisitions</p>-->
<!--              <ul class="list-unstyled li-space-lg">-->
<!--                <li class="media">-->
<!--                  <i class="fas fa-square"></i>-->
<!--                  <div class="media-body">Maintaining the leader status</div>-->
<!--                </li>-->
<!--                <li class="media">-->
<!--                  <i class="fas fa-square"></i>-->
<!--                  <div class="media-body">Acquisitions the right way</div>-->
<!--                </li>-->
<!--              </ul>-->
              <p class="price"><span>{{ priceOption2 }}</span></p>
            </div>
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" :src=pricePicture4 alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option3}}</h3>
<!--              <p>You already are a reference point in your industry now you need to learn about acquisitions</p>-->
<!--              <ul class="list-unstyled li-space-lg">-->
<!--                <li class="media">-->
<!--                  <i class="fas fa-square"></i>-->
<!--                  <div class="media-body">Maintaining the leader status</div>-->
<!--                </li>-->
<!--                <li class="media">-->
<!--                  <i class="fas fa-square"></i>-->
<!--                  <div class="media-body">Acquisitions the right way</div>-->
<!--                </li>-->
<!--              </ul>-->
              <p class="price"><span>{{ priceOption3 }}</span></p>
            </div>
          </div>
          <!-- end of card -->
        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
    <div class="button-container">
      <a class="btn-solid-reg btn-lg page-scroll" href="#contact">
      <div id="createBtn">Neem contact op voor intresse</div>
      </a>
    </div>
  </div> <!-- end of cards-2 -->
  <!-- end of services -->
</template>

<script>
import {prices, dogImages} from "@/website";
export default {
  name: "AppServices",
  data (){
    return{
      title: prices.title,
      discountMessage: prices.discountMessage,
      entryOption: prices.entryOption,
      option1: prices.option1,
      option2: prices.option2,
      option3: prices.option3,
      option4: prices.option4,
      priceOption1: prices.price1,
      priceOption2: prices.price2,
      priceOption3: prices.price3,
      pricePicture1: dogImages.service1,
      pricePicture2: dogImages.service2,
      pricePicture3: dogImages.service3,
      pricePicture4: dogImages.service4,
    }
  },
  methods: {
    splitTitle(pos){
      let splittedString = this.title.split(",");
      return splittedString[pos];
    }
  }
}
</script>

<style scoped>

@media (max-width: 761px){
  .btn-lg{
    font-size: small;
    margin-bottom: 0;
  }
  .card {
    max-height: 400px;
  }
}
@media (min-width: 761px){
  .btn-lg {
    padding: 2.1875rem 2.875rem 2.1875rem 2.875rem;
    margin-bottom: 1.5rem;
    font-size: larger;
  }
}
@media (min-width: 980px){
  .show-on-mobile { display: none !important; }
}
@media (max-width: 980px){
  .show-on-desktop { display: none !important; }
}
 .cards-2 {
   padding: 1.25rem 1.5rem 1.125rem 1.5rem;
 }
</style>