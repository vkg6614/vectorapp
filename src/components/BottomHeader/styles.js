import styled from "@emotion/styled";

export const BottomHeaderMainContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 15px;

  & > div:nth-child(1) {
    display: flex;
    width: 100%;
    align-items: center;
  }
  & > div:nth-child(1) > div:nth-child(1) {
    width: 14%;
    font-size: 0.9rem;
  }

  & > div:nth-child(1) > div:last-child {
    background-color: rgb(36, 36, 74);
    width: 100%;
    height: 1px;
  }

  & > div:nth-child(2) {
    margin-top: 18px;
  }

  & > div:nth-child(2) > div > div:nth-child(2) {
    margin-left: -120px;
    padding-right: 1em;
  }

  & > div:nth-child(2) > div > div:nth-child(3) {
    margin-left: -80px;
  }

  & > div:nth-child(2) > div > div:nth-child(1) div:last-child {
    width: 70%;
    justify-content: center;
  }

  & > div:nth-child(2) > div > div:nth-child(2) > div:last-child span {
    color: rgb(113, 114, 153);
    font-size: 0.9rem;
    font-weight: bold;
  }

  &
    > div:nth-child(2)
    > div
    > div:nth-child(3)
    > div:last-child
    span:nth-child(1) {
    color: rgb(113, 114, 153);
    font-size: 0.9rem;
    font-weight: bold;
  }

  & > div:nth-child(2) > div {
    display: flex;
    background-color: rgb(36, 36, 74);
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-radius: 5px;
    padding: 1.2em;
  }

  & > div:nth-child(2) > div > div {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-child(2) > div > div:nth-child(1) p {
    font-size: 0.7rem;
  }

  & > div:nth-child(2) > div > div p:nth-child(1) {
    margin-bottom: 7px;
    color: rgb(199, 199, 225);
    font-size: 0.9rem;
  }

  & > div:nth-child(2) > div > div:nth-child(3) p:nth-child(2) {
    font-weight: bold;
    font-size: 0.9rem;
  }

  &
    > div:nth-child(2)
    > div
    > div:nth-child(2)
    > div:nth-child(1)
    span:nth-child(2) {
    color: rgb(55, 55, 94);
    background-color: rgb(113, 114, 153);
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    margin-left: 8px;
    border-radius: 50%;
  }

  &
    > div:nth-child(2)
    > div
    > div:nth-child(3)
    > div:nth-child(2)
    span:nth-child(2) {
    color: rgb(55, 55, 94);
    background-color: rgb(113, 114, 153);
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    margin-left: 8px;
    border-radius: 50%;
  }

  & > div:nth-child(2) > div > div:nth-child(2) span:nth-child(1) {
    color: rgb(174, 243, 60);
    font-weight: bold;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    & > div:nth-child(2) > div > div:nth-child(1) {
      display: flex;
      width: 40%;
      justify-content: space-between;
    }

    & > div:nth-child(2) > div > div:nth-child(2) {
      width: 60%;
      display: flex;
      justify-content: flex-end;
    }

    & > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) {
      display: none;
    }

    & > div:nth-child(2) > div > div:nth-child(3) {
      display: none;
    }
  }
`;
