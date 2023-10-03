import styled from "styled-components";

export const AsideContainer = styled.aside`
  margin: 5px;
  padding: 5px;
  max-width: 300px;
  max-height: 800px;
  border-radius: 5px;
  width: 290px;
  height: 790px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #8f8f8f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AsideTitle = styled.h1`
  font-weight: 700;
  font-size: 25px;
  color: black;
  text-decoration: none;
  margin: 0;
`;

export const AsideSubtitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: black;
  text-decoration: none;
  margin: 0;
`;

export const AsideDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: black;
  text-decoration: none;
  text-align: center;
`;

export const PerfilImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  border: 1px solid black;
  margin: 10px 0 10px 0;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  display: flex;
  gap: 5px;
`;

export const AsideLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: 75px 75px 75px;
  margin-bottom: 12px;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const ProgressBar = styled.div`
  width: 90%;
  height: 15px;
  border-radius: 10px;
  background-color: white;
  opacity: 0.8;
`;

export const ProgressBarPercentage = styled.div`
  width: ${(props) => props.percentage};
  height: 100%;
  background-color: black;
  border-radius: 10px;
`;
