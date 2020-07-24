<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section__title">Projetos mais recentes</h2>
      <ul class="project__group" v-if="projects">
        <li v-for="project in projects" :key="project.id">
          <project-item
            :projectSlug="project.slug"
            :projectImage="project.image.thumb"
            :projectTitle="project.title"
          />
        </li>
      </ul>
    </div>
    <modal @handleCloseModal="closeModal" />
  </section>
</template>

<script lang="ts">
declare var require: any;
import { Vue, Component } from "vue-property-decorator";
import ProjectItem from "../../components/ProjectItem.vue";
import Modal from "../../components/Modal.vue";

interface IProjectItem {
  id: string;
  title: string;
  slug: string;
  image: {
    thumb: string;
    banner: string;
  };
  description: string;
  stack: string[];
  link: string;
}

@Component({
  components: {
    ProjectItem,
    Modal,
  },
})
export default class Project extends Vue {
  projects: IProjectItem[] = [
    {
      id: "01",
      slug: "slug-01",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
    {
      id: "02",
      slug: "slug-02",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
    {
      id: "03",
      slug: "slug-03",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
    {
      id: "04",
      slug: "slug-04",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
    {
      id: "05",
      slug: "slug-05",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
    {
      id: "06",
      slug: "slug-06",
      image: {
        thumb: require("../../assets/images/project-image.jpg"),
        banner: require("../../assets/images/banner-example.png"),
      },
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan in urna nec dignissim.<br/>
                    Proin in imperdiet mi. Suspendisse nec lorem lobortis, pulvinar turpis sed, efficitur tortor. <br/>
                    Curabitur bibendum ullamcorper mauris quis porta. Integer pretium, lectus eget rutrum tristique, nisl turpis faucibus odio</p>`,
      title: "slug 01",
      stack: ["vue", "scss", "html"],
      link: "https://orango.dev",
    },
  ];

  closeModal() {
    console.log("emited");
  }
}
</script>

<style lang="scss" scoped>
.project {
  &__group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
