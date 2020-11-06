<template>
  <v-row justify="center" align="center">
    <ChartBar />
    <ChartDoughnut />
    <ChartLine />
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import ChartBar from "~/components/Charts/ChartBar";
import ChartDoughnut from "~/components/Charts/ChartDoughnut";
import ChartLine from "~/components/Charts/ChartLine";
export default {
  components: {
    Logo,
    ChartBar,
    ChartDoughnut,
    ChartLine,
    VuetifyLogo
  }
};
</script>
