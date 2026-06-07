import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 16px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e8e8e8;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
`;

export const ProfileSection = styled.div`
  padding: 24px;
  border-bottom: 1px dashed #e0e0e0;
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const CameraIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #6c47ff;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 10px;
    height: 10px;
    fill: #ffffff;
  }
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const UserEmail = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: #7a7a7a;
`;

export const Bio = styled.p`
  margin-top: 16px;
  font-size: 13px;
  line-height: 1.7;
  color: #666666;
`;

export const BodySection = styled.div`
  min-height: 320px;
  padding: 24px;
  border-bottom: 1px dashed #e0e0e0;
`;

export const CardFooter = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border: 1px solid #f0d0d0;
  border-radius: 6px;

  background-color: #fff5f5;
  color: #c0392b;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #ffeaea;
  }

  svg {
    width: 14px;
    height: 14px;
    stroke: #c0392b;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;