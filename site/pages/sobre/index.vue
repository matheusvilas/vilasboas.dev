<template>
  <section class="about section">
    <div class="about__bg"></div>
    <div class="container">
      <div class="about__content">
        <h2 class="about__title">Sobre</h2>
        <p class="about__paragraph">
          Olá viajante,<br />
          Bem vindo (à minha espaço nave). Este é o espaço que eu criei para
          compartilhar conteúdos técnicos e as minhas histórias como
          desenvolvedor e o percurso para eu chegar onde estou hoje, assim como
          vocês eu estou em uma eterna linha de aprendizagem e espero poder
          ajudar-los através de minhas mais diversas e caóticas vivências.
        </p>
        <social-link class="about__socials" />

        <p class="about__paragraph">
          Estou trabalhando com desenvolvimento faz +4 anos e durante este tempo
          foquei a maior parte em desenvolvimento web.<br />
          Porém no último ano eu comecei a trabalhar com Mobile e estou adorando
          toda essa experiência.
        </p>
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

    @include media-breakpoint-down(md) {
      background-position: center left;
      opacity: 0.2;
    }
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
