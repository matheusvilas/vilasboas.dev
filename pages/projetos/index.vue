<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section__title">Projetos mais recentes</h2>
      <ul class="project__group" v-if="projects">
        <li v-for="project in projects" :key="project.id">
          <project-item :infos="project" @handle-press="handlePress" />
        </li>
      </ul>
    </div>
    <modal v-if="modal" :modal="modal" @handle-close-modal="toggleModal" />
  </section>
</template>

<script lang="ts">
declare var require: any;
import { Vue, Component } from "vue-property-decorator";
import ProjectItem from "../../components/ProjectItem.vue";
import Modal from "../../components/Modal.vue";
import { IProjectItem, IProjectModal } from "@/types";

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
  modal: IProjectModal = {
    isShowing: false,
    title: "",
    img: "",
    description: "",
    stack: [],
    link: "",
  };

  handlePress(id: string) {
    const chosenProject = this.projects.find((project) => project.id === id);
    if (chosenProject) {
      this.modal = {
        isShowing: true,
        title: chosenProject.title,
        img: chosenProject.image.banner,
        description: chosenProject.description,
        stack: chosenProject.stack,
        link: chosenProject.link,
      };
    }
  }

  toggleModal() {
    if (this.modal) this.modal.isShowing = !this.modal.isShowing;
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
