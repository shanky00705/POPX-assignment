import {
  TotalRegPage,
  RegContentContainer,
  RegTitle,
  FieldWrapper,
  FloatingLabel,
  RegInput,
  AgencyQuestion,
  RadioGroup,
  RadioLabel,
  RadioInput,
  BtnContainer,
  FieldValidationMsg,
} from "./style.js";

import { PrimaryButton } from "../Home/style.js";
import "./index.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InfoContextObject from "../../Context/InfoContext";

const Registration = () => {
  const navigate = useNavigate();
  const { SetNameEmail } = useContext(InfoContextObject);

  const [NameFieldUsrInput, AdjustNameFieldUsrInput] = useState("");
  const [NameFieldTouched, SetNameTouched] = useState(false);

  const [PhoneNumberFieldInput, AdjustPhoneNumberFieldInput] = useState("");
  const [PhoneFieldTouched, SetNumberTouched] = useState(false);

  const [EmailFieldInput, AdjustEmailFieldInput] = useState("");
  const [EmailFieldTouched, SetEmailFieldTouched] = useState(false);

  const [PasswordInput, AdjustPassword] = useState("");
  const [PasswordTouched, SetPassTouched] = useState(false);

  const RegisterNameInputContent = (event) => {
    AdjustNameFieldUsrInput(event.target.value);
  };

  const ManageNameFieldBlur = () => {
    SetNameTouched(true);
  };

  const RegisterNumberInputByUser = (event) => {
    AdjustPhoneNumberFieldInput(event.target.value);
  };

  const ManageNumFieldBlur = () => {
    SetNumberTouched(true);
  };

  const RegisterEmailInputByUser = (event) => {
    AdjustEmailFieldInput(event.target.value);
  };

  const ManageEmailFieldBlur = () => {
    SetEmailFieldTouched(true);
  };

  const RegisterPasswordInputByUser = (event) => {
    AdjustPassword(event.target.value);
  };

  const ManagePassBlur = () => {
    SetPassTouched(true);
  };

  const onClickCreateAcc = () => {
    if (
      NameFieldUsrInput === "" ||
      NameFieldUsrInput.length < 3 ||
      /\d/.test(NameFieldUsrInput)
    ) {
      SetNameTouched(true);
      return;
    }

    if (
      EmailFieldInput === "" ||
      !EmailFieldInput.includes("@")
    ) {
      SetEmailFieldTouched(true);
      return;
    }

    if (
      PasswordInput === "" ||
      PasswordInput.length < 8 ||
      !/[A-Z]/.test(PasswordInput) ||
      !/[a-z]/.test(PasswordInput) ||
      !/\d/.test(PasswordInput) ||
      !/[^A-Za-z0-9]/.test(PasswordInput) ||
      /\s/.test(PasswordInput)
    ) {
      SetPassTouched(true);
      return;
    }

    if (
      PhoneNumberFieldInput === "" ||
      /\D/.test(PhoneNumberFieldInput) ||
      PhoneNumberFieldInput.length !== 10 ||
      PhoneNumberFieldInput[0] < "6" ||
      PhoneNumberFieldInput[0] > "9"
    ) {
      SetNumberTouched(true);
      return;
    }

    SetNameEmail(NameFieldUsrInput, EmailFieldInput);
    navigate("/account");
  };

  return (
    <TotalRegPage>
      <RegContentContainer>
        <RegTitle>
          Create your
          <br />
          PopX account
        </RegTitle>

        <FieldWrapper>
          <FloatingLabel>Full Name*</FloatingLabel>

          <RegInput
            type="text"
            value={NameFieldUsrInput}
            onChange={RegisterNameInputContent}
            onBlur={ManageNameFieldBlur}
          />

          {NameFieldTouched && NameFieldUsrInput.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}

          {NameFieldTouched &&
            NameFieldUsrInput.length > 0 &&
            NameFieldUsrInput.length < 3 && (
              <FieldValidationMsg>
                *Must be at least 3 characters
              </FieldValidationMsg>
            )}

          {NameFieldTouched && /\d/.test(NameFieldUsrInput) && (
            <FieldValidationMsg>
              *Only letters are allowed
            </FieldValidationMsg>
          )}
        </FieldWrapper>
                <FieldWrapper>
          <FloatingLabel>Phone number*</FloatingLabel>

          <RegInput
            type="tel"
            value={PhoneNumberFieldInput}
            onChange={RegisterNumberInputByUser}
            onBlur={ManageNumFieldBlur}
          />

          {PhoneFieldTouched && PhoneNumberFieldInput.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}

          {PhoneFieldTouched &&
            PhoneNumberFieldInput.length > 0 &&
            /\D/.test(PhoneNumberFieldInput) && (
              <FieldValidationMsg>
                *Phone number should contain only digits
              </FieldValidationMsg>
            )}

          {PhoneFieldTouched &&
            PhoneNumberFieldInput.length > 0 &&
            PhoneNumberFieldInput.length < 10 && (
              <FieldValidationMsg>
                *Phone number must contain 10 digits
              </FieldValidationMsg>
            )}

          {PhoneFieldTouched &&
            PhoneNumberFieldInput.length > 10 && (
              <FieldValidationMsg>
                *Phone number must not contain more than 10 digits
              </FieldValidationMsg>
            )}

          {PhoneFieldTouched &&
            PhoneNumberFieldInput.length > 0 &&
            (PhoneNumberFieldInput[0] < "6" ||
              PhoneNumberFieldInput[0] > "9") && (
              <FieldValidationMsg>
                *Number should start with 6, 7, 8 or 9
              </FieldValidationMsg>
            )}
        </FieldWrapper>
        <FieldWrapper>
          <FloatingLabel>Email address*</FloatingLabel>

          <RegInput
            type="email"
            value={EmailFieldInput}
            onChange={RegisterEmailInputByUser}
            onBlur={ManageEmailFieldBlur}
          />

          {EmailFieldTouched && EmailFieldInput.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}

          {EmailFieldTouched &&
            EmailFieldInput.length > 0 &&
            !EmailFieldInput.includes("@") && (
              <FieldValidationMsg>
                *Must contain @
              </FieldValidationMsg>
            )}
        </FieldWrapper>

        <FieldWrapper>
          <FloatingLabel>Password*</FloatingLabel>

          <RegInput
            type="password"
            value={PasswordInput}
            onChange={RegisterPasswordInputByUser}
            onBlur={ManagePassBlur}
          />

          {PasswordTouched && PasswordInput.length === 0 && (
            <FieldValidationMsg>*Required</FieldValidationMsg>
          )}

          {PasswordTouched &&
            PasswordInput.length > 0 &&
            PasswordInput.length < 8 && (
              <FieldValidationMsg>
                *Password must contain at least 8 characters
              </FieldValidationMsg>
            )}

          {PasswordTouched &&
            !/[A-Z]/.test(PasswordInput) && (
              <FieldValidationMsg>
                *Password must contain an uppercase letter
              </FieldValidationMsg>
            )}

          {PasswordTouched &&
            !/[a-z]/.test(PasswordInput) && (
              <FieldValidationMsg>
                *Password must contain a lowercase letter
              </FieldValidationMsg>
            )}

          {PasswordTouched &&
            !/\d/.test(PasswordInput) && (
              <FieldValidationMsg>
                *Password must contain a number
              </FieldValidationMsg>
            )}

          {PasswordTouched &&
            !/[^A-Za-z0-9]/.test(PasswordInput) && (
              <FieldValidationMsg>
                *Password must contain a special character
              </FieldValidationMsg>
            )}

          {PasswordTouched &&
            /\s/.test(PasswordInput) && (
              <FieldValidationMsg>
                *Password should not contain spaces
              </FieldValidationMsg>
            )}
        </FieldWrapper>

        <FieldWrapper>
          <FloatingLabel>Company name</FloatingLabel>

          <RegInput type="text" />
        </FieldWrapper>

        <AgencyQuestion>
          Are you an Agency?*
        </AgencyQuestion>

        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" name="agency" />
            Yes
          </RadioLabel>

          <RadioLabel>
            <RadioInput type="radio" name="agency" />
            No
          </RadioLabel>
        </RadioGroup>
              </RegContentContainer>

      <BtnContainer>
        <PrimaryButton
          Page="HOME"
          onClick={onClickCreateAcc}
        >
          Create Account
        </PrimaryButton>
      </BtnContainer>
    </TotalRegPage>
  );
};

export default Registration;