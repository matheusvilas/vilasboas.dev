<template>
  <footer class="footer">
    <div class="container-site">
      <nav class="footer__nav">
        <p class="footer__site-name">vilasboas.dev</p>
        <social-link />
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SocialLink from "./SocialLink.vue";
@Component({
  components: { SocialLink }
})
export default class TheFooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 2px solid rgba(247, 223, 30, 0.42);
  padding: 0 48px;
  &__nav {
    height: 160px;
    display: flex;
    justify-content: space-between;
    @include media-breakpoint-down(md) {
      height: 120px;

      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__site-name {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: rgba(247, 223, 30, 0.6);
    font-size: 24px;
    @include media-breakpoint-down(md) {
      margin-bottom: 15px;
    }
  }
}
</style>
