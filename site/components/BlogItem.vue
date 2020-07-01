<template>
  <article class="blog">
    <nuxt-link to="/blog" :alt="blogSlug" class="blog__group">
      <img :src="blogImage" :alt="blogTitle" class="blog__image" />
      <div class="blog__content">
        <div class="blog__content--upper">
          <h3 class="blog__title">{{ blogTitle }}</h3>
          <span class="blog__date">{{ blogDate }} - {{ blogCategory }}</span>
        </div>
        <p class="blog__description">{{ blogDescription }}</p>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BlogItem extends Vue {
  @Prop() blogSlug?: string;
  @Prop() blogImage?: string;
  @Prop() blogTitle?: string;
  @Prop() blogCategory?: string;
  @Prop() blogDate?: string;
  @Prop() blogDescription?: string;
}
</script>

<style lang="scss" scoped>
.blog {
  margin-bottom: 40px;
  border: 1px solid rgba(247, 244, 244, 0.35);
  border-radius: 20px;
  overflow: hidden;

  &__group {
    max-height: 150px;
    display: flex;
  }

  &__image {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    color: #f7f4f4;
    max-width: 450px;
    height: 48px;
  }

  &__content {
    padding: 16px 24px;
    width: 100%;
    background: #000000c9;

    &--upper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  &__date {
    font-size: 14px;
    color: rgba(247, 244, 244, 0.8);
  }

  &__description {
    font-size: 16px;
    line-height: 20px;
    color: #f7f4f4;
    font-weight: 500;
    max-width: 600px;
  }
}
</style>
