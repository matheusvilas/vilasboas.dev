<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section__title">Posts mais recentes</h2>
      <ul class="project__group" v-if="blogs">
        <li v-for="blog in blogs" :key="blog.id">
          <blog-item
            :blogSlug="blog.slug"
            :blogImage="blog.image"
            :blogTitle="blog.title"
            :blogCategory="blog.category"
            :blogDate="blog.date"
            :blogDescription="blog.description"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BlogItem from "../../components/BlogItem.vue";

interface IBlogItem {
  id: string;
  slug: string;
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

@Component({
  components: {
    BlogItem
  }
})
export default class Blog extends Vue {
  blogs: IBlogItem[] = [
    {
      id: "01",
      slug: "slug-01",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    },
    {
      id: "02",
      slug: "slug-01",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    },
    {
      id: "03",
      slug: "slug-01",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    },
    {
      id: "04",
      slug: "slug-01",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    },
    {
      id: "05",
      slug: "slug-01",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    },
    {
      id: "06",
      slug: "slug-06",
      image: require("../../assets/images/js.png"),
      title: "slug 01",
      description:
        "Javas script é bacana demais Javas script é bacana demaisJavas script é bacana demaisJavas script é bacana demaisJavas script é bacana de...",
      category: "Diário de Bordo",
      date: "16/06/.2020 - 11:43"
    }
  ];
}
</script>

<style lang="scss" scoped></style>
