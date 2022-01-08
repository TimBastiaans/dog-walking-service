<template>
  <div id="app">
    <AppNavigation />
    <AppHeader />
    <AppIntro />
    <AppCards />
    <AppServices />
    <AppTeamOfEmployees />
    <AppAbout />
    <AppProjects />
    <AppCallMe />
    <AppCustomerFeedback />
    <AppProjects />
    <AppDetails />
    <AppDetails2 />
    <AppContact />
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
import AppHeader from "./components/AppHeader";
import AppIntro from "./components/AppIntro";
import AppCards from "./components/AppCards";
import AppServices from "./components/AppServices";
import AppTeamOfEmployees from "./components/AppTeamOfEmployees";
import AppAbout from "./components/AppAbout";
import AppContact from "@/components/AppContact";
import AppFooter from "./components/AppFooter";
import AppCallMe from "./components/AppCallMe";
import AppCustomerFeedback from "./components/AppCustomerFeedback";
import AppProjects from "./components/AppProjects";
import AppDetails from "./components/AppDetails";
import AppDetails2 from "./components/AppDetails2";

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppHeader,
    AppIntro,
    AppCards,
    AppServices,
    AppTeamOfEmployees,
    AppAbout,
    AppCallMe,
    AppCustomerFeedback,
    AppProjects,
    AppDetails,
    AppDetails2,
    AppContact,
    AppFooter
  }
}
</script>

<style>
#app {

}

</style>
