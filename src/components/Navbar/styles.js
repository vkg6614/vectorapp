import styled from "@emotion/styled";

export const NavbarMainContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 1.5em;
  background-color: rgb(26, 26, 54);
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & > div > div {
    display: flex;
    align-items: center;
  }
  & > div > div > div {
    display: flex;
    align-items: center;
  }
`;

export const LogoDiv = styled.div`
  color: white;
  display: flex;
  margin-right: -275px;
  align-items: center;
`;

export const LogoText = styled.p`
  letter-spacing: 0.3em;
  margin-left: 0.8em;
  font-size: 1.3rem;
`;

export const IconsBtn = styled.p`
  padding: 2.2em 1em;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const MoreSelected = styled.div`
  color: rgb(199, 199, 225);
  margin-left: 1.2em;
`;

export const PriceIconBtn = styled.div`
  & > div {
    margin-right: 1.2em;
  }
  & img {
    margin-right: 10px;
    width: 25px;
  }
  & p {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const WalletDiv = styled.div`
  background: rgb(36, 36, 74);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0.65em 0.9em 0.65em 0.9em;
  border-radius: 5px;
  margin-left: -270px;
  & p {
    font-size: 0.9rem;
    margin-left: 0.6em;
  }
`;
