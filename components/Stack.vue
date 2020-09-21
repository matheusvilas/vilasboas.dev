<template>
  <ul class="stack" v-if="stack">
    <li v-for="(item, key) in stack" :key="key">
      <span class="stack__img" :class="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Stack extends Vue {
  // @Prop() stack?: string[];
  stack: string[] = ["vue", "scss", "html"];
}
</script>

<style lang="scss" scoped>
.stack {
  display: flex;

  &__img {
    display: block;

    margin-right: 8px;

    &.vue {
      background: url("../assets/images/stack/vue.png");
      width: 32px;
      height: 32px;
    }

    &.scss {
      background: url("../assets/images/stack/scss.png");
      width: 37px;
      height: 28px;
    }

    &.html {
      background: url("../assets/images/stack/html.png");
      width: 32px;
      height: 32px;
    }
  }
}
</style>
