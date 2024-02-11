import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
`;
export const Content = styled.div`
  max-width: 136.8rem;
  flex: 1;

  @media (min-width: 768px) {
    margin-inline: auto;
    padding-inline: 12.3rem;
  }
`;

export const Slogan = styled.div`
  margin-top: 3rem;
  margin-inline: auto;
  padding-inline: 4rem;
  margin-bottom: 4.8rem;

  > img {
    width: 100%;
  }

  > div {
    margin-top: 2rem;

    h1 {
      font-weight: 500;
      margin-bottom: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-size: clamp(2.6rem, 1rem + 3vw, 4rem);
    }

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }
  @media (min-width: 1224px) {
    height: 26rem;
    display: flex;
    position: relative;
    margin-top: 16.4rem;
    align-items: center;
    border-radius: 0.8rem;
    justify-content: flex-end;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

    > img {
      bottom: 0;
      left: -5rem;
      position: absolute;
      width: max(63.2rem);
    }
    > div {
      margin-top: 0;
    }
  }
`;