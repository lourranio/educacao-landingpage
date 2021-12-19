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
  title: "Passo 1 - Candidatura do Aluno",
  desc: "Os pais junto com a escola fornecem os dados para que o aluno receba o material de estudo. Aqui o aluno irá receber o Tablet, Chip e demais componentes necessarios ao estudo.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Candidatura",
      desc: "O aluno se candidata ao material.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Material de Estudo",
      desc: "Escolha do material mais adequado.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Foco no material",
      desc: "Escolha de opções.",
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
