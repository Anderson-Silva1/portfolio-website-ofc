import Blog from "@/components/templates/Blog";
import Ferramentas from "@/components/templates/Ferramentas";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Sobre from "@/components/templates/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Blog />
        <Ferramentas />
      </main>
      <Footer />
    </>
  );
}
