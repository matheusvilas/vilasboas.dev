<template>
  <header class="header">
    <div class="container-site">
      <nav class="header__nav d-flex">
        <nuxt-link class="mr-auto" to="/">
          <img class="header__img" src="../assets/images/astronaut.svg" alt />
        </nuxt-link>
        <ul class="header__list" :class="{ 'is-active': menuActive }">
          <li
            class="header__item"
            :class="{ 'is-active': $route.name === 'blog' }"
          >
            <nuxt-link to="/blog">DIÁRIO DE BORDO</nuxt-link>
          </li>
          <li
            class="header__item"
            :class="{ 'is-active': $route.name === 'projetos' }"
          >
            <nuxt-link to="/projetos">PROJETOS</nuxt-link>
          </li>
          <li
            class="header__item"
            :class="{ 'is-active': $route.name === 'sobre' }"
          >
            <nuxt-link to="/sobre">SOBRE</nuxt-link>
          </li>
        </ul>
        <button
          class="header__hamburguer d-md-none"
          :class="{ 'is-active': menuActive }"
          @click="handleMenuOpen()"
        >
          Menu
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class TheHeader extends Vue {
  menuActive: boolean = false;

  handleMenuOpen() {
    this.menuActive = !this.menuActive;
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    padding: 18px 22px;

    @include media-breakpoint-up(md) {
      padding: 18px 48px;
    }
  }

  &__hamburguer {
    background: transparent;
    border: none;
    color: #f7df1e;
    outline: none;
    height: 67px;

    &.is-active {
      position: fixed;
      right: 22px;
      top: 18px;
      z-index: 10;
    }
  }

  &__list {
    display: flex;

    @include media-breakpoint-down(md) {
      position: fixed;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      width: 100%;
      left: 0;
      top: 0;
      z-index: 10;
      pointer-events: none;
      opacity: 0;
    }

    &.is-active {
      pointer-events: all;
      opacity: 1;
    }
  }

  &__item {
    margin-left: 34px;
    display: flex;
    align-items: center;

    a {
      font-weight: 700;
      font-size: 24px;
      color: white;

      &:hover {
        text-decoration: none;
      }
    }

    &.is-active {
      a {
        color: #f7df1e;
      }
    }
  }
}
</style>
