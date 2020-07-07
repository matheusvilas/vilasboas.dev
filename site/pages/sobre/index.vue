<template>
  <section class="about section">
    <div class="about__bg"></div>
    <div class="container">
      <div class="about__content">
        <h2 class="about__title">Sobre</h2>
        <p class="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a justo felis. Aliquam erat volutpat.
          Vivamus a urna eu tortor sollicitudin varius. Maecenas placerat mauris ut quam accumsan, viverra lobortis metus egestas. Fusce blandit tincidunt felis quis consequat.
          Nunc condimentum sem vitae enim rutrum, vel sagittis purus venenatis. Sed efficitur gravida vestibulum. Nullam euismod leo at ultricies venenatis. Proin tempor lacus sit amet suscipit fermentum.
        </p>
        <social-link class="about__socials" />
        <h2 class="about__title">Skils</h2>
        <p
          class="about__paragraph"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a justo felis. Aliquam erat volutpat. Aliquam erat volutpat.</p>
        <stack />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SocialLink from "@/components/SocialLink.vue";
import Stack from "@/components/Stack.vue";

@Component({
  components: {
    SocialLink,
    Stack
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  position: relative;

  &__bg {
    background: url("../../assets/images/big-astronaut.png");
    background-repeat: no-repeat;
    background-position: center right;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
  }

  &__content {
    max-width: 600px;
    margin-bottom: 100px;
  }

  &__title {
    font-weight: medium;
    font-size: 48px;
    color: white;
    margin-bottom: 30px;
  }

  &__paragraph {
    font-size: 18px;
    color: white;
    line-height: 24px;
    margin-bottom: 30px;
  }

  &__socials {
    margin-bottom: 70px;
  }
}
</style>
