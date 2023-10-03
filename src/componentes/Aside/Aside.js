import {
  AsideContainer,
  AsideDescription,
  AsideLinks,
  AsideTitle,
  PerfilImage,
  ProgressBar,
  SkillsContainer,
  Icon,
  SocialMediaLink,
  SkillItem,
  ProgressBarPercentage,
  AsideSubtitle,
} from "./styles";

import { socialMedia, skills } from "./constants";

import image from "../../images/Joao.jpg";

export function Aside() {
  return (
    <AsideContainer>
      <PerfilImage src={image} />
      <AsideTitle>João Kleber</AsideTitle>
      <AsideSubtitle>Biografia</AsideSubtitle>
      <AsideDescription>
        Sou um programador pleno de front-end apaixonado por criar experiências
        digitais envolventes. Com mais de cinco anos de experiência, comecei
        minha jornada como autodidata e rapidamente me destaquei no
        desenvolvimento web. Minha habilidade em HTML, CSS e JavaScript é
        incomparável, permitindo-me traduzir designs criativos em interfaces
        interativas e responsivas. Sou um mestre em frameworks populares, como
        React e Angular, e estou sempre atualizado com as últimas tendências de
        design e desenvolvimento. Minha dedicação à usabilidade e acessibilidade
        faz de mim um ativo valioso para qualquer equipe de desenvolvimento
        front-end. Estou ansioso para continuar crescendo e evoluindo nesta
        emocionante área.
      </AsideDescription>

      <SkillsContainer>
        {skills.map((item) => (
          <SkillItem>
            <Icon src={item.icon} />
            <ProgressBar>
              <ProgressBarPercentage percentage={item.percentage} />
            </ProgressBar>
          </SkillItem>
        ))}
      </SkillsContainer>

      <AsideLinks>
        {socialMedia.map((item) => (
          <SocialMediaLink href={item.profile}>
            <Icon src={item.icon} id={item.media} />
          </SocialMediaLink>
        ))}
      </AsideLinks>
    </AsideContainer>
  );
}
