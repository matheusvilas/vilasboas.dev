<template>
  <section class="projects">
    <div class="container">
      <h2 class="project__title">Projetos mais recentes</h2>
      <ul class="project__group" v-if="projects">
        <li v-for="project in projects" :key="project.id">
          <project-item
            :projectSlug="project.slug"
            :projectImage="project.image"
            :projectTitle="project.title"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProjectItem from "../../components/ProjectItem.vue";

interface IProjectItem {
  id: string;
  slug: string;
  image: string;
  title: string;
}

@Component({
  components: {
    ProjectItem
  }
})
export default class Project extends Vue {
  projects: IProjectItem[] = [
    {
      id: "01",
      slug: "slug-01",
      image: require("../../assets/images/project-image.jpg"),
      title: "slug 01"
    },
    {
      id: "02",
      slug: "slug-02",
      image: require("../../assets/images/project-image.jpg"),
      title: "slug 02"
    },
    {
      id: "03",
      slug: "slug-03",
      image: require("../../assets/images/project-image.jpg"),
      title: "slug 03"
    },
    {
      id: "04",
      slug: "slug-04",
      image: require("../../assets/images/project-image.jpg"),
      title: "slug 04"
    },
    {
      id: "05",
      slug: "slug-05",
      image: require("../../assets/images/project-image.jpg"),
      title: "slug 05"
    }
  ];
}
</script>

<style lang="scss" scoped>
.projects {
  &__title {
    font-size: 18px;
    text-align: left;
    color: #f7f4f4;
  }

  &__group {
    display: flex;
    justify-content: center;
  }
}
</style>
