import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Como resolver o problema do acesso a educação ?</title>
        <meta name="description" content="Desafio Educação no Brasil." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />
      <div className="bg-slate-50 ">
        <SectionTitle pretitle="Como resolver o problema ?" title=" Educação">
          Acreditamos que sem o acesso a comunicação não há aprendizado. A
          Educação é a base para um crescimento como ser humano. Para ajudar no
          início da formação do aluno, entregamos um Tablet com acesso a
          internet a todos os alunos da rede pública de ensino como parte da sua
          educação, assim como os livros, cadernos e apostilas..
        </SectionTitle>
        <SectionTitle>
          A solução passa pelo fornecimento de acesso a comunicação,
          fornecimento de conteúdo e acompanhamento do aluno. A solucão dos
          problemas de acesso à educação é com a aquisição e fornecimento de
          tablets + chips + conteúdos para uso educacional. Os tablets devem ser
          entregues às escolas para facilitar o acesso dos alunos às atividades
          remotas desenvolvidas pelas escolas e aos conteúdos on-line e
          plataformas virtuais disponibilizados pelas empresas Publicas e
          Privadas através de parcerias.
        </SectionTitle>
        <SectionTitle>
          Essa ação tem como{" "}
          <a className="underline decoration-sky-500">objetivo</a> garantir
          condições de acesso e ampliar as possibilidades de aprendizagem por
          meio de ferramentas e práticas digitais, para que o estudante consiga
          organizar e aprimorar seus{" "}
          <a className="underline decoration-pink-500">estudos.</a>
        </SectionTitle>
      </div>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits imgPos="left" data={benefitThree} />

      <Footer />
    </>
  );
}
