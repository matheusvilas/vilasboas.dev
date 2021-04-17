<template>
  <section class="home">
    <div class="container container--background">
      <h1 class="color-white">Matheus Vilas Boas</h1>

      <h2 class="color-yellow">Frontend Developer</h2>

      <div class="spacing-top">
        <q class="color-white">
          I’m a developer who likes to understand and learn what’s new to keep
          myself updated, and I understand that is necessary to look back to
          understand what caused these changes. Two years ago I switched my
          focus from web to mobile and I’m loving working with that and I've
          been building some challenging apps.
        </q>
      </div>

      <div class="spacing-top">
        <h4 class="color-yellow">Casion Tech Goodies</h4>
        <h5 class="color-white">2019 - Present</h5>
        <q class="color-white">
          During the time I worked on Casion, I had the chance to be involved in
          big projects for companies like Santander, Itaú, Spotify, Heineken and
          others. I worked on these projects developing web systems, creating
          API's and integrating them with the frontend, making smooth animations
          and building atomic solutions.
        </q>
      </div>

      <div class="spacing-top">
        <h4 class="color-yellow">Foster</h4>
        <h5 class="color-white">2018 - 2019</h5>
        <q class="color-white">
          During my time on Foster I worked on maintenance and development of
          big institutional portals for healthcare companies such as HCoR, HAOC,
          OswaldoCruz. In this period I also developed single page applications
          for companies like IBM, Vale, Ogilvy and Castrol.
        </q>
      </div>

      <div class="spacing-top">
        <h4 class="color-yellow">ASPREV</h4>
        <h5 class="color-white">2017 - 2018</h5>
        <q class="color-white">
          During my period on Asprev, i was assigned to the team that developed
          and maintained the intern system with the responsibility to serve and
          automate legal cases.
        </q>
      </div>

      <div class="spacing-top">
        <h4 class="color-yellow">Micro Máquinas</h4>
        <h5 class="color-white">2015 - 2016</h5>
        <q class="color-white">
          In my first technological experience I was responsible for maintaining
          hardwares and configurating computers.
        </q>
      </div>

      <div class="spacing-top">
        <h4 class="color-yellow">Contact:</h4>

        <a class="contact-info" href="mailto:matheus@vilasboas.dev">
          matheus@vilasboas.dev
        </a>
        <a class="contact-info" href="tel:+5511996828874">
          +55 11 9 9682 8874
        </a>
      </div>

      <div class="spacing-top">
        <social-link />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import SocialLink from "@/components/SocialLink.vue";

export default Vue.extend({
  components: { SocialLink },
  head() {
    return {
      title: "Matheus Vilas Boas",
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  .color-white {
    color: white;
  }
  .color-yellow {
    color: #f7df1e;
  }

  .contact-info {
    @extend .color-white;

    text-decoration: underline;
    display: block;
    margin-bottom: 10px;
  }

  .container {
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 20px;
    max-width: 600px;

    &--background {
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.84);
      border: 1px solid rgba(247, 244, 244, 0.15);
    }
  }

  .spacing-top {
    margin-top: 30px;
  }

  &__title {
    margin-top: 120px;
    color: white;
    font-size: 20px;

    strong {
      font-weight: bold;
      font-size: 75px;
      margin-top: 10px;
      display: block;
    }
  }
}
</style>
