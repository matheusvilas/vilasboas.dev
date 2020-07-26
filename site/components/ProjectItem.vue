<template>
  <button class="project-item" v-on:click="handlePress" v-if="infos">
    <img class="project-item__bg" :src="infos.image.thumb" :alt="infos.title" />
    <div class="project-item__info">
      <p class="project-item__title">{{infos.title}}</p>
    </div>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { IProjectItem } from "../types";

@Component({
  components: {},
})
export default class ProjectItem extends Vue {
  @Prop() infos!: IProjectItem;

  @Emit()
  handlePress() {
    return this.infos.id;
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  width: 338px;
  height: 214px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  display: block;
  border: none;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 300ms ease-in-out;
  }

  &__info {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    opacity: 0;
    background: rgba(#000000, 0.6);
    transition: all 300ms ease-in-out;
  }

  &__title {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 18px;
    padding-left: 13px;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  &:hover,
  &:focus {
    .project-item__info {
      opacity: 1;
    }

    .project-item__bg {
      transform: scale(1.2);
    }
  }
}
</style>
