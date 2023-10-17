import React from "react";

import * as S from "./styles";

import { data } from "./constants";

export function Footer() {
  return (
    <S.FooterContainer>
      <S.ContentContainer>
        <S.AboutContainer>
          <S.Title>Sobre nós</S.Title>
          <S.Description>
            A Phoenix é líder na criação de templates de sites de alta
            qualidade, projetados para atender às necessidades de negócios e
            indivíduos. Nossa equipe de especialistas em design web oferece
            soluções versáteis e personalizáveis, permitindo que você crie uma
            presença online única e impactante.
          </S.Description>
        </S.AboutContainer>
        <S.ContactContainer>
          <S.Title>Contato:</S.Title>
          <S.Description>
            Email: phoenixLTDA@phnx.com.br <br />
            Telefone: (11)8765-4763
          </S.Description>
        </S.ContactContainer>
      </S.ContentContainer>
      <S.FooterCopywrite>
        &copy; Copyright 2023 Phoenix
        <S.IconContainer>
          {data.map((item) => {
            return (
              <S.StyledButton>
                <S.Icon src={item} href={item}>
                  {console.log(item)}
                </S.Icon>
              </S.StyledButton>
            );
          })}
        </S.IconContainer>
      </S.FooterCopywrite>
    </S.FooterContainer>
  );
}
