<template>
  <article class="modal">
    <div class="modal__background"></div>
    <div class="modal__content">
      <div class="modal__button">
        <button onPress />
      </div>
      <div class="modal-container">
        <div class="modal__header">
          <h2 class="modal__title">Site Institucional Schin</h2>
          <picture></picture>
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
          <button>
            Visitar
            <img src alt />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stack from "./Stack.vue";

@Component({
  components: { Stack }
})
export default class Modal extends Vue {}
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
  }

  &__background {
    background: rgba(#000, 0.88);
    width: 100%;
    height: 100%;
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
