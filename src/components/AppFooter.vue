<template>
  <!-- Footer -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="text-container about">
            <h4>Informatie over Marley</h4>
            <p class="white">{{footerText}}</p>
          </div> <!-- end of text-container -->
        </div> <!-- end of col -->
        <div class="col-md-2 offset-md-2">
          <div class="text-container">
            <h4>Documenten</h4>
            <ul class="list-unstyled li-space-lg">
              <li>
                <a class="white" :href=documents.terms target="_blank">Algemene voorwaarden</a>
              </li>
              <li>
                <a class="white" :href=documents.registration target="_blank">Inschrijfforumilier</a>
              </li>
              <li>
                <a class="white" :href=documents.keyContract target="_blank">Sleutelcontract</a>
              </li>
            </ul>
          </div> <!-- end of text-container -->
        </div> <!-- end of col -->
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of footer -->
  <!-- end of footer -->
</template>

<script>
import { documents, details2 } from "@/website";

export default {
  name: "AppFooter",
  data() {
    return {
      documents: documents,
      footerText: details2.footerText,
    }
  }
}
</script>

<style scoped>

</style>