import "./index.css";
import {
  TotalLoginPage,
  SubContentContainerPage,
  SigninTitle,
  SigninDesc,
  FormContainer,
  LabelTitle,
  EmailPasswordInput,
  BtnContainer,
} from "./style";

import { PrimaryButton } from "../Home/style";
import { FieldValidationMsg } from "../Registration/style";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InfoContextObject from "../../Context/InfoContext";

const Login = () => {
  const navigate = useNavigate();

  const { SetNameEmail } = useContext(InfoContextObject);

  const [EmailInputFieldContent, SetEmailIPFContent] = useState("");
  const [EmailFieldTouched, SetEmailBlurStatus] = useState(false);

  const [PassInputFieldContent, SetPassIPFContent] = useState("");
  const [PassFieldTouched, SetPassBlurStatus] = useState(false);

  const RegisterInputByUsrInEmailField = (event) => {
    SetEmailIPFContent(event.target.value);
  };

  const RegisterInputByUsrInPassField = (event) => {
    SetPassIPFContent(event.target.value);
  };

  const SetEmailBlur = () => {
    SetEmailBlurStatus(true);
  };

  const SetPassBlur = () => {
    SetPassBlurStatus(true);
  };

  const onClickLogin = () => {
    if (EmailInputFieldContent.trim() !== "") {
      const NameExtracted = EmailInputFieldContent.split("@")[0];

      if (SetNameEmail) {
        SetNameEmail(NameExtracted, EmailInputFieldContent);
      }

      navigate("/account");
    }
  };

  return (
    <TotalLoginPage>
      <SubContentContainerPage>
        <SigninTitle>
          Signin to your
          <br />
          PopX account
        </SigninTitle>

        <SigninDesc>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </SigninDesc>

        <FormContainer>
          <LabelTitle>Email Address</LabelTitle>

          <EmailPasswordInput
            type="email"
            placeholder="Enter email address"
            value={EmailInputFieldContent}
            onChange={RegisterInputByUsrInEmailField}
            onBlur={SetEmailBlur}
          />

          {EmailFieldTouched && EmailInputFieldContent.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}
        </FormContainer>

        <FormContainer>
          <LabelTitle>Password</LabelTitle>

          <EmailPasswordInput
            type="password"
            placeholder="Enter password"
            value={PassInputFieldContent}
            onChange={RegisterInputByUsrInPassField}
            onBlur={SetPassBlur}
          />

          {PassFieldTouched && PassInputFieldContent.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}
        </FormContainer>

        <BtnContainer>
          <PrimaryButton onClick={onClickLogin}>
            Login
          </PrimaryButton>
        </BtnContainer>
      </SubContentContainerPage>
    </TotalLoginPage>
  );
};

export default Login;