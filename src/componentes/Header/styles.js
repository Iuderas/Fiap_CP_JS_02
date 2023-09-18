import styled from "styled-components";
import image from "../../images/pngwing.com.png";

export const HeaderContainer = styled.div`
  font-family: "Poppins";
  max-width: 1180px;
  max-height: 120px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const HeaderTitle = styled.a`
  font-weight: 700;
  font-size: 45px;
  color: white;
  text-decoration: none;
`;

export const HeaderLinks = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

HeaderLogo.defaultProps = {
  src: image,
};
