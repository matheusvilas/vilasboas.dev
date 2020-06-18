<template>
  <header class="header">
    <nav class="header__nav d-flex">
      <nuxt-link class="mr-auto" to="/">
        <img class="header__img" src="../assets/images/astronaut.svg" alt />
      </nuxt-link>
      <ul class="header__list">
        <li class="header__item" :class="{ 'is-active': $route.name === 'blog' }">
          <nuxt-link to="/blog">DIÁRIO DE BORDO</nuxt-link>
        </li>
        <li class="header__item" :class="{ 'is-active': $route.name === 'projetos' }">
          <nuxt-link to="/projetos">PROJETOS</nuxt-link>
        </li>
        <li class="header__item" :class="{ 'is-active': $route.name === 'sobre' }">
          <nuxt-link to="/sobre">SOBRE</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class TheHeader extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    padding: 18px 48px;
  }

  &__list {
    display: flex;
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
