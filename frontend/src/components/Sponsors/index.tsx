import { SponsorsContainer, Textfield, Brands } from "./styles";

import CesupaLogo from "../../assets/CesupaLogo.svg";
import ArgoLogo from "../../assets/ArgoLogo.svg";
import OmniLogo from "../../assets/OmniLogo.svg";
import CabccLogo from "../../assets/CabccLogo.svg";
import CaencLogo from "../../assets/CaencLogo.svg";
import SqlNorteLogo from "../../assets/SqlNorteLogo.svg";
import SolLogo from "../../assets/SolLogo.svg";
import JambuLogo from "../../assets/JambuLogo.svg";
import OndroneLogo from "../../assets/OndroneLogo.svg";
import PaladarAmazonicoLogo from "../../assets/PaladarAmazonicoLogo.svg";

export function Sponsors() {
  return (
    <SponsorsContainer>
      <Textfield>
        <p>Realização</p>
        <p>Organização</p>
        <p>Apoio</p>
        <p>Parceria</p>
      </Textfield>
      <Brands>
        <div>
          <img src={CesupaLogo} alt="Logo do Cesupa" />
          <img src={ArgoLogo} alt="Logo da Argo" />
          <img src={OmniLogo} alt="Logo da Omni" />
        </div>
        <div>
          <img src={CabccLogo} alt="Logo do Cabcc" />
          <img src={CaencLogo} alt="Logo Do Caenc" />
        </div>
        <div>
          <img src={SqlNorteLogo} alt="Logo da Sql Norte" />
          <img src={SolLogo} alt="Logo da Sol" />
        </div>
        <div>
          <img src={JambuLogo} alt="Logo da Jambu" />
          <img src={OndroneLogo} alt="Logo da Ondrone" />
          <img src={PaladarAmazonicoLogo} alt="Logo da Paladar Amazônico" />
        </div>
      </Brands>
    </SponsorsContainer>
  );
}
