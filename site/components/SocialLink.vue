<template>
  <ul class="social-link">
    <li class="social-link__link">
      <a href>
        <img src="../assets/images/facebook.svg" alt />
      </a>
    </li>
    <li class="social-link__link">
      <a href>
        <img src="../assets/images/facebook.svg" alt />
      </a>
    </li>
    <li class="social-link__link">
      <a href>
        <img src="../assets/images/facebook.svg" alt />
      </a>
    </li>
    <li class="social-link__link">
      <a href>
        <img src="../assets/images/facebook.svg" alt />
      </a>
    </li>
    <li class="social-link__link">
      <a href>
        <img src="../assets/images/facebook.svg" alt />
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
    margin-right: 15px;

    a {
      width: 32px;
      height: 32px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
