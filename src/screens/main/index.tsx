import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer/footer";
import { SectionProducts } from "../../components/sectionProduts";

export default function Main() {
  return (
    <main className="w-full bg-blue-50 min-h-dvh  flex flex-col items-start justify-center">
      <Banner />
      <SectionProducts
        imgSource="/airpods.png"
        title="AirPods"
        price="30.000.00 Kz"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum perferendis nihil cum, labore iure quis, maiores nobis ipsum numquam magnam alias voluptatum? Modi at eum et fugit reiciendis fugiat."
      />
      <SectionProducts
        reverse
        imgSource="/iphone16.png"
        title="Iphone 16 pro max"
        price="1.700.000.00 Kz"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum perferendis nihil cum, labore iure quis, maiores nobis ipsum numquam magnam alias voluptatum? Modi at eum et fugit reiciendis fugiat."
      />
      <SectionProducts
        imgSource="/mackbook.png"
        title="Mackbook pro M3"
        price="2.100.000.00 Kz"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum perferendis nihil cum, labore iure quis, maiores nobis ipsum numquam magnam alias voluptatum? Modi at eum et fugit reiciendis fugiat."
      />
      <SectionProducts
        reverse
        imgSource="/whatch.png"
        title="Apple Watch"
        price="50.000.00 Kz"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum perferendis nihil cum, labore iure quis, maiores nobis ipsum numquam magnam alias voluptatum? Modi at eum et fugit reiciendis fugiat."
      />

      <Footer />
    </main>
  );
}
