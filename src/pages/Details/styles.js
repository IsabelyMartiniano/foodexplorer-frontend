import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const ButtonBack = styled.div`
  width: 100%;
  display: flex;
  margin: 2.4rem auto 4rem;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: clamp(1.8rem, 0.4rem + 3vw, 2.4rem);
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  margin-inline: auto;
  max-width: 136.8rem;
  align-items: center;
  padding-inline: 4rem;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 4rem;
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding-inline: 12.3rem;
    justify-content: flex-start;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div:nth-child(1) {
    max-width: 25rem;
    border-radius: 50%;

    img {
      max-width: 100%;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: "Poppins", sans-serif;

    h1 {
      margin-top: 2rem;
      font-weight: 700;
      margin-bottom: 1.8rem;
      font-size: clamp(2.4rem, 1rem + 3vw, 4rem);
    }

    p {
      text-align: center;
      font-size: clamp(1.8rem, 0.4rem + 3vw, 2.4rem);
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    div:nth-child(5) {
      width: 5rem;

      img {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    gap: 4rem;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    > div:nth-child(1) {
      max-width: 39rem;
      border-radius: 50%;
    }

    > div:nth-child(2) {
      max-width: 60rem;
      align-items: flex-start;

      h1 {
        margin-top: 0;
      }

      p {
        text-align: left;
      }

      div:nth-child(5) {
        width: 10rem;

        img {
          display: block;
        }
      }
    }
  }
`;

export const Ingredients = styled.div`
  gap: 2rem;
  display: flex;
  margin-block: 3rem;
  align-items: center;
`;

export const Info = styled.div`
  gap: 1.7rem;
  width: 100%;
  display: flex;
  margin-top: 2rem;
  padding-inline: 2rem;
  align-items: center;

  strong {
    min-width: 10rem;
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  .btn {
    z-index: 6;
    border: none;
    display: flex;
    background: none;
    position: relative;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  @media (min-width: 768px) {
    padding-inline: 0;
    
    > strong {
      min-width: 14rem;
    }
  }
`;