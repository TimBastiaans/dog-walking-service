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
        <div class="col-lg-12">

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" src="images/services-1.jpg" alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ entryOption }}</h3>
              <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Environment and competition</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Designing the marketing plan</div>
                </li>
              </ul>
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
              <img class="img-fluid" src="images/services-2.jpg" alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option1}}</h3>
              <p>Use this service pack to give your company the necessary impulse to become an industry leader</p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Business strategy planning</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Taking the planned actions</div>
                </li>
              </ul>
              <p class="price">Starting at <span>{{priceOption1}}</span></p>
            </div>
            <div class="button-container">
              <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> <!-- end of button-container -->
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" src="images/services-3.jpg" alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option2}}</h3>
              <p>You already are a reference point in your industry now you need to learn about acquisitions</p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Maintaining the leader status</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Acquisitions the right way</div>
                </li>
              </ul>
              <p class="price">Starting at <span>{{ priceOption2 }}</span></p>
            </div>
            <div class="button-container">
              <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> <!-- end of button-container -->
          </div>
          <!-- end of card -->

          <!-- Card -->
          <div class="card">
            <div class="card-image">
              <img class="img-fluid" src="images/services-3.jpg" alt="alternative">
            </div>
            <div class="card-body">
              <h3 class="card-title">{{option3}}</h3>
              <p>You already are a reference point in your industry now you need to learn about acquisitions</p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Maintaining the leader status</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">Acquisitions the right way</div>
                </li>
              </ul>
              <p class="price">Starting at <span>{{ priceOption3 }}</span></p>
            </div>
            <div class="button-container">
              <a class="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div> <!-- end of button-container -->
          </div>
          <!-- end of card -->

        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of cards-2 -->
  <!-- end of services -->
</template>

<script>
import {prices} from "@/website";
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

</style>