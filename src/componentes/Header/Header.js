import * as S from "./styles";

const Header = () => {
  const links = ["Home", "Sobre", "Contato", "Blog", "FAQ"];

  return (
    <S.HeaderContainer>
      <S.HeaderLogo />
      <S.HeaderTitle href="@">Phoenix</S.HeaderTitle>

      <S.HeaderLinks>
        {links.map((item) => (
          <S.StyledLink href={item}>{item}</S.StyledLink>
        ))}
      </S.HeaderLinks>
    </S.HeaderContainer>
  );
};

export default Header;
