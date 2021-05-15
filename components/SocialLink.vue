<template>
  <ul class="social-link">
    <li class="social-link__link">
      <a href="https://twitter.com/vilasboasdev">
        <twitter />
      </a>
    </li>

    <li class="social-link__link">
      <a href="https://www.facebook.com/matsvilas" target="_blank">
        <facebook />
      </a>
    </li>

    <li class="social-link__link">
      <a href="https://www.linkedin.com/in/matsvilas/" target="_blank">
        <linkedin />
      </a>
    </li>
    <li class="social-link__link">
      <a href="https://github.com/MatheusVilas" target="_blank">
        <github />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Facebook from "./Facebook.vue";
import Twitter from "./Twitter.vue";
import Linkedin from "./Linkedin.vue";
import Github from "./Github.vue";
@Component({
  components: { Facebook, Twitter, Linkedin, Github },
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
    }
  }
}
</style>
