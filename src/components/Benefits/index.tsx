import { BenefitsContainer, BenefitsContent } from "./styles";
import PadlockImage from "@/assets/cadeado-icon.png";
import SearchImage from "@/assets/seacrh-be-icon.png";
import ShieldImage from "@/assets/shield-ben-icon.png";

function Benefits() {
  return (
    <BenefitsContainer className="container" data-aos="fade-up">
      <BenefitsContent component="div">
        <div className="image">
          <img src={PadlockImage} alt="Icone de um cadeado fechado" />
        </div>
        <h2>Visibilidade</h2>
        <p>Consiga vender para instituições publicas.</p>
      </BenefitsContent>

      <BenefitsContent component="div">
        <div className="image">
          <img src={SearchImage} alt="Icone de uma lupa" />
        </div>
        <h2>Formalidade</h2>
        <p>Saia da informalidade e tenha mais benefícios.</p>
      </BenefitsContent>

      <BenefitsContent component="div">
        <div className="image">
          <img src={ShieldImage} alt="Icone de um escudo" />
        </div>
        <h2>Exlusividade</h2>
        <p>Obter benefícios exclusivos do governo.</p>
      </BenefitsContent>
    </BenefitsContainer>
  );
}

export default Benefits;
