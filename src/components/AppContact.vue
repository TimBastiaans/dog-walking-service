<template>
  <!-- Contact -->
  <div id="contact" class="form-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-container">
            <div class="section-title">CONTACT</div>
            <h2>{{ contact.title }}</h2>
            <p>{{ contact.subTitle }}</p>
            <ul class="list-unstyled li-space-lg">
              <li class="address"><i class="fas fa-map-marker-alt"></i>{{ socials.address }}</li>
              <li><i class="fas fa-phone"></i><a :href=hrefCellphone>{{ socials.cellphone }}</a></li>
              <li><i class="fas fa-envelope"></i><a :href=hrefEmail>{{ socials.email }}</a></li>
            </ul>
            <div class="align-content-center">
            <span class="fa-stack">
                            <a :href=socials.facebook>
                                <span class="hexagon"></span>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
            <span class="fa-stack">
                            <a :href=socials.whatsapp>
                                <span class="hexagon"></span>
                                <i class="fab fa-whatsapp fa-stack-1x"></i>
                            </a>
                        </span>
            <span class="fa-stack">
                            <a :href=socials.linkedIn>
                                <span class="hexagon"></span>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
            </div>
<!--            <span class="fa-stack">-->
<!--                            <a href="#your-link">-->
<!--                                <span class="hexagon"></span>-->
<!--                                <i class="fab fa-pinterest fa-stack-1x"></i>-->
<!--                            </a>-->
<!--                        </span>-->
<!--            <span class="fa-stack">-->
<!--                            <a href="#your-link">-->
<!--                                <span class="hexagon"></span>-->
<!--                                <i class="fab fa-instagram fa-stack-1x"></i>-->
<!--                            </a>-->
<!--                        </span>-->
          </div> <!-- end of text-container -->
        </div> <!-- end of col -->
        <div class="col-lg-6">

          <!-- Contact Form -->
          <form id="contactForm" data-toggle="validator" data-focus="false">
            <div class="form-group">
              <input type="text" class="form-control-input" id="cname" required>
              <label class="label-control" for="cname">Naam</label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control-input" id="cemail" required>
              <label class="label-control" for="cemail">Email</label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control-textarea" id="cmessage" required></textarea>
              <label class="label-control" for="cmessage">Jouw bericht</label>
              <div class="help-block with-errors"></div>
            </div>
<!--            <div class="form-group checkbox">-->
<!--              <input type="checkbox" id="cterms" value="Agreed-to-Terms" required>I agree with Aria's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>-->
<!--              <div class="help-block with-errors"></div>-->
<!--            </div>-->
            <div class="form-group">
              <button type="submit" class="form-control-submit-button">Verstuur Bericht</button>
            </div>
            <div class="form-message">
              <div id="cmsgSubmit" class="h3 text-center hidden"></div>
            </div>
          </form>
          <!-- end of contact form -->

        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of form-2 -->
  <!-- end of contact -->
</template>

<script>
import {socials, contact} from "@/website";

export default {
  name: "AppContact",
  data(){
    return{
      socials: socials,
      contact: contact,
      whatsapp: socials.whatsapp,
      hrefCellphone: "tel:" + socials.cellphone,
      hrefEmail: "mailto:" + socials.email,
    }
  },
  computed:{
    noSpace(cellphone){
      return cellphone.replace(/\s/g, '');
    }
  }
}
</script>

<style scoped>

</style>