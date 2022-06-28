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

  @media screen and (max-width: 500px) {
    & > div:nth-child(1) > div:nth-child(2) {
      display: none;
    }

    & > div > div > div img {
      margin-right: 5px;
      width: 18px;
    }

    & > div:nth-child(1) {
      margin-right: 0;
    }
  }
`;

export const LogoDiv = styled.div`
  color: white;
  display: flex;
  margin-right: 1.6em;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;

export const LogoText = styled.p`
  letter-spacing: 0.3em;
  margin-left: 0.7em;
  font-size: 1.3rem;

  @media screen and (max-width: 500px) {
  }
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
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  & img {
    margin-right: 10px;
    width: 25px;
  }
  & p {
    font-size: 0.9rem;
    font-weight: bold;
  }
  @media screen and (max-width: 900px) {
  }
`;

export const WalletDiv = styled.div`
  background: rgb(36, 36, 74);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0.65em 0.9em 0.65em 0.9em;
  border-radius: 5px;
  margin-left: 1.8em;
  & p {
    font-size: 0.9rem;
    margin-left: 0.6em;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    & p {
      font-size: 0.8rem;
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
    & p {
      display: none;
    }
  }
`;
