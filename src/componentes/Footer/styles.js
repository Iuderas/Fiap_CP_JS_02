import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: #333333;
  bottom: 0;
  left: 0;
  padding: 15px;
  box-sizing: border-box;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 350px;
`;

export const AboutContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 350px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding: 0 10px; */
  margin-bottom: 16px;
  color: #807e7e;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
`;

export const FooterCopywrite = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #807e7e;
  font-size: 15px;
  color: #807e7e;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  height: fit-content;
  background: none;
  border: none;
  padding: 0;

  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  fill: #807e7e;
`;
