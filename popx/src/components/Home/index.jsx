import "./index.css";
import {
  PrimaryButton,
  SecondaryButton,
  TotalPageContainer,
  SectionContainer,
  TitleHeading,
  DescriptionPara,
  ButtonContainer,
} from "./style";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const OnClickLogin = () => {
    navigate("/login");
  };

  const OnClickRegister = () => {
    navigate("/registration");
  };

  return (
    <TotalPageContainer>
      <SectionContainer>
        <TitleHeading>Welcome to PopX</TitleHeading>

        <DescriptionPara>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </DescriptionPara>

        <ButtonContainer>
          <PrimaryButton onClick={OnClickRegister} Page="HOME">
            Create Account
          </PrimaryButton>

          <SecondaryButton onClick={OnClickLogin}>
            Already Registered? Login
          </SecondaryButton>
        </ButtonContainer>
      </SectionContainer>
    </TotalPageContainer>
  );
};

export default Home;