import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.jpg";
import benefitTwoImg from "../public/img/benefit-two.jpg";
import benefitThreeImg from "../public/img/benefit-three.jpg";

const benefitOne = {
  title: "Passo 1 - Doação de Tablets e Chips GSM",
  desc: "Os pais junto com a escola fornecem os dados para que o aluno receba o material de estudo. Aqui o aluno irá receber o Tablet, Chip e demais componentes necessarios ao estudo.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Candidatura e Parceria",
      desc: "A escola e governo fornecera tablets e acessórios para os alunos apos a escolha do parceiro ou empresa que deseje fornecer servicos para os alunos.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Tablet",
      desc: "Como forma de acesso será usando um tablet.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Acesso GSM",
      desc: "Para o acesso a internet sera atraves de chips GSM 4G com acesso a internet.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Passo 2 - Avaliação",
  desc: "Será feita uma avaliação acerca do conteúdo programático de ensino para o aluno. Quais matérias, Ordem, Quais as avaliações online.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Conteúdo",
      desc: "Escolha do conteudo adequado.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Matérias",
      desc: "Escolha das matérias.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Ordem",
      desc: "Escolha das ordens de estudo. ",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "Passo 3 - Aval do Professor e Acompanhamento",
  desc: "Mentores irão acompanhar e realizar adaptações. ",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Professores E Necessidades",
      desc: "Escolha do conteudo adequado.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Acompanhamento ",
      desc: "Escolha das matérias.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Analises e Adequações",
      desc: "Realizar modificações e adequações do material e estudo. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
