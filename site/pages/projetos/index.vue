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
    Modal
  }
})
export default class Project extends Vue {
  projects: IProjectItem[] = [
    {
      id: "01",
      slug: "my-heineken",
      image: {
        thumb: require("../../assets/images/projects/my-heineken/thumb.png"),
        banner: require("../../assets/images/projects/my-heineken/banner.jpg")
      },
      description: `<p>Com o aplicativo My Heineken você pode juntar pontos para trocar por prêmios, ter acesso a conteúdos exclusivos e comprar sua Heineken® em nossos parceiros na hora que quiser.
      Conheça os benefícios e experiências do My Heineken. <br /><br />
<strong>Junte e Troque</strong> <br />
Junte pontos e troque por prêmios exclusivos <br />
<strong>Mundo Heineken®</strong> <br />
Conteúdos e experiências Heineken® para ver, ouvir e compartilhar com os amigos <br /> <strong>Heineken® Delivery</strong> <br />
Uma forma rápida e prática de comprar a sua Heineken® onde estiver
strong>Pesquisa</strong> <br />
Ganhe pontos interagindo e dividindo suas opiniões com a Heineken®</p>`,
      title: "My Heineken",
      stack: ["react-native", "react"],
      link: "https://apps.apple.com/br/app/my-heineken/id1527637334"
    },
    {
      id: "02",
      slug: "sos-me-poupe",
      image: {
        thumb: require("../../assets/images/projects/sos-me-poupe/thumb.png"),
        banner: require("../../assets/images/projects/sos-me-poupe/banner.png")
      },
      description: `<p>O SOS Me Poupe é uma plataforma gratuita que conecta pequenos negócios e profissionais autônomos ao público do canal de finanças pessoais no YouTube. A iniciativa serve de vitrine para profissionais divulgarem seus produtos e serviços durante a pandemia. A plataforma também apresentará conteúdos exclusivos voltados ao empreendedorismo.</p><p>O site usa a geolocalização do usuário para indicar os produtos/serviços mais próximos a ele.</p>`,
      title: "SOS Me Poupe",
      stack: ["nuxt", "vue"],
      link: "https://sos.mepoupe.com/"
    },
    {
      id: "03",
      slug: "siga-corona",
      image: {
        thumb: require("../../assets/images/projects/sos-me-poupe/thumb.png"),
        banner: require("../../assets/images/projects/sos-me-poupe/banner.png")
      },
      description: `<p>#SigaCorona é um agregador de notícias compartilhadas por fontes confiáveis sobre o Corona Vírus nas principais redes sociais.</p>`,
      title: "#SigaCorona",
      stack: ["nuxt", "vue"],
      link: "https://sigacorona.com/#/"
    },
    {
      id: "04",
      slug: "heineken-chegadeira",
      image: {
        thumb: require("../../assets/images/projects/sos-me-poupe/thumb.png"),
        banner: require("../../assets/images/projects/sos-me-poupe/banner.png")
      },
      description: `<p>O projeto é constituído por um CMS que faz o controle de todo o site, desde os bares até os vouchers gerados.</p><p>O site usa a geolocalização do usuário para indicar os bares participantes mais próximos, e além disso, o usuário pode cadastrar um voucher por semana para se beneficiar da cerveja grátis 1 vez por semana.</p>`,
      title: "Heineken Chegadeira",
      stack: ["nuxt", "vue"],
      link:
        "https://www2.heineken.com/br/agegateway?returnurl=%2fbr%2fchegadeira"
    },
    {
      id: "05",
      slug: "spotify-itau-contra-algoritmo",
      image: {
        thumb: require("../../assets/images/projects/sos-me-poupe/thumb.png"),
        banner: require("../../assets/images/projects/sos-me-poupe/banner.png")
      },
      description: `<p>O contra algoritmo funciona no sentido inverso dos algoritmos tradicionais, que se baseiam nos gostos usuais das pessoas, para tirá-las de suas bolhas musicais.</p><p>Ao fazer login na plataforma com a conta do Spotify (serviço de streaming digital), o usuário tem acesso a artistas e músicas alinhados ao seu estilo. Mas que não estão em suas preferências.</p><p>Na prática, o Contra-Algoritmo faz um cálculo baseado nos atributos das músicas mais escutadas pelo usuário, mostrando a ele quais artistas do Rock In Rio ele tem mais afinidade e quais estão fora da sua bolha. Uma playlist do spotify pode ser gerada com os artistas de fora da bolha.</p><p>O sistema também destaca o line-up da atual edição do Rock in Rio. Informa ainda a agenda do evento, que se encerra no dia 6 de outubro de 2019.</p>`,
      title: "Spotify x Itaú Contra Algoritmo",
      stack: ["nuxt", "vue"],
      link:
        "https://catracalivre.com.br/causando/banco-lanca-contra-algoritmo-para-apresentar-diversidade -musical/"
    }
  ];
  modal: IProjectModal = {
    isShowing: false,
    title: "",
    img: "",
    description: "",
    stack: [],
    link: ""
  };

  handlePress(id: string) {
    const chosenProject = this.projects.find(project => project.id === id);
    if (chosenProject) {
      this.modal = {
        isShowing: true,
        title: chosenProject.title,
        img: chosenProject.image.banner,
        description: chosenProject.description,
        stack: chosenProject.stack,
        link: chosenProject.link
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
