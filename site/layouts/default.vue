<template>
  <div>
    <the-header />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

@Component({
  components: { TheHeader, TheFooter }
})
export default class Default extends Vue {}
</script>

<style lang="scss">
main {
  min-height: calc(100vh - 270px);
}
</style>
