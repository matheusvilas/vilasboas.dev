<template>
  <article class="modal">
    <div class="modal__background"></div>
    <div class="modal__content">
      <div class="modal__button">
        <button class="modal__button-img" v-on:click="handleCloseModal" />
      </div>
      <div class="modal-container">
        <div class="modal__header">
          <h2 class="modal__title">Site Institucional Schin</h2>
          <picture class="modal__banner">
            <img
              :src="require('../assets/images/banner-example.png')"
              alt="Flowers"
              style="width:auto;"
            />
          </picture>
        </div>
        <div class="modal__body">
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.
            Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor.
            Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio
          </q>
          <div class="modal__stack">
            <p>Stack</p>
            <stack />
          </div>
        </div>
        <div class="modal__footer">
          <a href="google.com">
            Visitar
            <img src="../assets/images/chevron-right.svg" alt />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import Stack from "./Stack.vue";

@Component({
  components: { Stack },
})
export default class Modal extends Vue {
  @Emit()
  handleCloseModal() {
    return true;
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;

  display: block;

  &-container {
    padding: 34px 38px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  &__background {
    background: rgba(#000, 0.88);
    width: 100%;
    height: 100%;
  }

  &__banner {
    max-height: 270px;
    width: 100%;
    display: block;
  }

  &__body {
    display: flex;
    justify-content: space-between;

    q {
      font-size: 18px;
      font-weight: 400;
      max-width: 480px;
      max-height: 250px;
      height: 250px;
      overflow-y: auto;
    }
  }

  &__stack {
    min-width: 118px;
    p {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

  &__header {
    margin-bottom: 30px;
  }

  &__content {
    position: relative;
  }

  &__button {
    position: absolute;
    top: -35px;
    right: -38px;

    &-img {
      background: url("../assets/images/icon-close.svg");
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
      border: 0;
      outline: 0;
      padding: 0;
      background-size: contain;
    }
  }

  &__footer {
    margin-top: auto;
    width: 118px;
    margin-left: auto;

    a {
      font-size: 18px;
      font-weight: bold;
      color: black;
      display: flex;
      justify-content: center;
      align-content: center;

      img {
        margin-left: 8px;
      }
    }
  }

  &__content {
    position: absolute;
    max-width: 710px;
    height: 689px;
    display: block;
    background: white;
    top: 105px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
  }
}
</style>
