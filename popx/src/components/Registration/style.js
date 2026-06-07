import styled from "styled-components";

export const TotalRegPage = styled.div`
  width: 320px;
  height: 580px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const RegContentContainer = styled.div`
  padding: 28px 24px 0;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 20px 16px 0;
  }
`;

export const RegTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.35;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 19px;
    margin-bottom: 16px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const FieldValidationMsg = styled.p
`
  color:red;
  font-family:"Roboto";
  font-weight:bold;
  font-size:10px;
`

export const FloatingLabel = styled.label`
  position: absolute;
  top: -8px;
  left: 12px;
  font-size: 10px;
  font-weight: 600;
  color: #6c63ff;
  background: #ffffff;
  padding: 0 4px;
  z-index: 1;
`;

export const RegInput = styled.input`
  width: 100%;
  padding: 12px 12px;
  font-size: 13px;
  color: #1a1a1a;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  outline: none;
  background: #fff;

  @media (max-width: 480px) {
    padding: 10px 10px;
    font-size: 12px;
  }
`;

export const AgencyQuestion = styled.p`
  font-size: 12px;
  color: #1a1a1a;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #1a1a1a;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  accent-color: #6c63ff;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  padding: 16px 24px 28px;

  @media (max-width: 480px) {
    padding: 12px 16px 24px;
  }
`;