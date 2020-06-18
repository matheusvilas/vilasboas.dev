<template>
  <section class="home">
    <div class="container">
      <div class="home__group">
        <h1 class="home__title">
          Oi, Sou o Matheus
          <strong>
            Dev <br />
            Mobile <br />
            Web <br />
          </strong>
        </h1>
      </div>
      <div class="home__group">
        <img
          class="home__astronaut"
          src="../assets/images/big-astronaut.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {}
});
</script>

<style lang="scss" scoped>
.home {
  .container {
    display: flex;
  }

  &__astronaut {
    opacity: 0.6;
    pointer-events: none;
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
