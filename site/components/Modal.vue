<template>
  <article class="modal" :class="{'is-showing': isModalShowing}">
    <div class="modal__background"></div>
    <div class="modal__content">
      <div class="modal__button">
        <button class="modal__button-img" v-on:click="handleCloseModal" />
      </div>
      <div class="modal-container">
        <div class="modal__header">
          <h2 class="modal__title">{{title}}</h2>
          <picture class="modal__banner">
            <img :src="img" alt="Flowers" style="width:auto;" />
          </picture>
        </div>
        <div class="modal__body">
          <q>{{description}}</q>
          <div class="modal__stack">
            <p>Stack</p>
            <stack />
          </div>
        </div>
        <div class="modal__footer">
          <a :href="link">
            Visitar
            <img src="../assets/images/chevron-right.svg" alt />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import Stack from "./Stack.vue";
import { IProjectModal } from "../types";

@Component({
  components: { Stack },
})
export default class Modal extends Vue {
  @Prop() modal!: IProjectModal;

  @Emit()
  handleCloseModal() {
    return true;
  }

  get isModalShowing() {
    return this.modal.isShowing;
  }

  get title() {
    return this.modal.title;
  }

  get img() {
    return this.modal.img;
  }

  get description() {
    return this.modal.description;
  }

  get stack() {
    return this.modal.stack;
  }

  get link() {
    return this.modal.link;
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
    cursor: pointer;

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

// Animation
.modal {
  pointer-events: none;

  &__content {
    transform: scale(0.7) translateY(200px) translateX(-50%);
    transition: all 300ms ease-in-out;
    opacity: 0;
  }

  &__background {
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  &.is-showing {
    transform: scale(1) translateY(0);
    pointer-events: all;

    .modal__content {
      transform: scale(1) translateY(0) translateX(-50%);
      opacity: 1;
    }

    .modal__background {
      opacity: 1;
    }
  }
}
</style>
