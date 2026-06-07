import {
  Page,
  Card,
  CardHeader,
  CardTitle,
  ProfileSection,
  ProfileRow,
  AvatarWrapper,
  Avatar,
  CameraIcon,
  UserMeta,
  UserName,
  UserEmail,
  Bio,
  BodySection,
  CardFooter,
  LogoutButton,
} from "./style.js";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InfoContextObject from "../../Context/InfoContext";

const Account = () => {
  const navigate = useNavigate();

  const { name, email } = useContext(InfoContextObject);

  const onClickLogOut = () => {
    navigate("/");
  };

  return (
    <Page>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>

        <ProfileSection>
          <ProfileRow>
            <AvatarWrapper>
              <Avatar>
                <img
                  src="https://i.pravatar.cc/150?img=36"
                  alt="Profile"
                />
              </Avatar>

              <CameraIcon>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5h-2.83l-1.5-2h-7.34l-1.5 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </CameraIcon>
            </AvatarWrapper>

            <UserMeta>
              <UserName>{name}</UserName>
              <UserEmail>{email}</UserEmail>
            </UserMeta>
          </ProfileRow>

          <Bio>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </Bio>
        </ProfileSection>

        <BodySection />

        <CardFooter>
          <LogoutButton onClick={onClickLogOut}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>

            Log out
          </LogoutButton>
        </CardFooter>
      </Card>
    </Page>
  );
};

export default Account;