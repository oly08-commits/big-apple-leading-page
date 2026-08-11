import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer/footer";
import { PricingCard } from "../../components/pricing/pricing-card";
import { SectionProducts } from "../../components/sectionProduts";
import ProductsPricing from "../../constants/produts";

export default function Main() {
  return (
    <main className="w-full bg-blue-50 min-h-dvh  flex flex-col items-start justify-center">
      <Banner />

      <SectionProducts
        imgSource="/airpods.png"
        title="AirPods"
        price="30.000 Kz"
        description="Desfruta de um som envolvente e de alta qualidade com os AirPods. Com um design confortável e ligação rápida aos teus dispositivos Apple, são perfeitos para música, chamadas e entretenimento no dia a dia."
      />

      <SectionProducts
        reverse
        imgSource="/iphone16.png"
        title="iPhone 16 Pro Max"
        price="1.700.000 Kz"
        description="O iPhone 16 Pro Max combina desempenho excepcional, um sistema de câmaras profissional e um design sofisticado. Com o poderoso chip da Apple, oferece velocidade e eficiência para jogos, fotografia, vídeo e produtividade."
      />

      <SectionProducts
        imgSource="/mackbook.png"
        title="MacBook Pro M3"
        price="2.100.000 Kz"
        description="Potência profissional num design elegante e portátil. O MacBook Pro com chip M3 oferece desempenho extraordinário para programação, edição de vídeo, design, criação de conteúdo e outras tarefas exigentes."
      />

      <SectionProducts
        reverse
        imgSource="/whatch.png"
        title="Apple Watch"
        price="50.000 Kz"
        description="Mantém-te ligado e acompanha o teu dia com o Apple Watch. Recebe notificações, acompanha a tua atividade física e acede às principais funcionalidades do teu iPhone diretamente no pulso."
      />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {ProductsPricing.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
