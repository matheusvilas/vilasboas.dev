<template>
  <ul class="social-link">
    <li class="social-link__link">
      <a href="">
        <img src="../assets/images/facebook.svg" alt="" />
      </a>
    </li>
    <li class="social-link__link">
      <a href="">
        <img src="../assets/images/facebook.svg" alt="" />
      </a>
    </li>
    <li class="social-link__link">
      <a href="">
        <img src="../assets/images/facebook.svg" alt="" />
      </a>
    </li>
    <li class="social-link__link">
      <a href="">
        <img src="../assets/images/facebook.svg" alt="" />
      </a>
    </li>
    <li class="social-link__link">
      <a href="">
        <img src="../assets/images/facebook.svg" alt="" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class SocialLink extends Vue {}
</script>

<style lang="scss" scoped>
.social-link {
  display: flex;
  align-items: center;

  &__link {
    margin-left: 15px;
  }
}
</style>
