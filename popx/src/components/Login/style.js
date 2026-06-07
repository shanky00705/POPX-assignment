import styled from "styled-components";

export const TotalLoginPage = styled.div`
  width: 320px;
  height: 580px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`

export const SubContentContainerPage = styled.div`
  padding: 28px 24px;

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`

export const SigninTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  line-height: 1.35;

  @media (max-width: 480px) {
    font-size: 19px;
  }
`

export const SigninDesc = styled.p`
  font-size: 13px;
  color: #888888;
  line-height: 1.6;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 18px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

export const LabelTitle = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: #6c63ff;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`

export const EmailPasswordInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 13px;
  color: #1a1a1a;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  outline: none;
  background: #fff;

  @media (max-width: 480px) {
    padding: 9px 10px;
    font-size: 12px;
  }
`

export const BtnContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 480px) {
    margin-top: 14px;
  }
`