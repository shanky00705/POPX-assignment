import styled from "styled-components"

export const TotalPageContainer = styled.div`
  width: 320px;
  height: 580px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`

export const SectionContainer = styled.div`
  padding: 24px 24px 36px;

  @media (max-width: 480px) {
    padding: 20px 16px 32px;
  }
`

export const TitleHeading = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const DescriptionPara = styled.p`
  font-size: 13px;
  color: #888888;
  line-height: 1.6;
  margin-bottom: 28px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 22px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${props => props.Page === "HOME" ? "#6c63ff" : "#c8c8c8"};
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 14px;
  }
`

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #c2bdf8;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 14px;
  }
`