import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  max-width: 136.8rem;
  margin-inline: auto;
  padding-inline: 4rem;
  flex-direction: column;

  > div {
    width: 100%;
    padding-top: 3.4rem;

    h3 {
      margin-bottom: 3rem;
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    }

    .section-order {
      height: 40rem;
      overflow-y: auto;
      width: max-content;
      padding-right: 4rem;
    }

    .result {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding-inline: 12.3rem;
    justify-content: space-between;
  }
`;

export const Payment = styled.div`
  max-width: 35rem;

  > div {
    border: 1px solid rgba(255, 255, 255, 0.1);

    div:nth-child(1) {
      display: flex;

      button {
        width: 100%;
        gap: 1.4rem;
        color: white;
        display: flex;
        height: 8.1rem;
        font-size: 1.6rem;
        align-items: center;
        justify-content: center;
        background: transparent;
        text-transform: uppercase;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .add-background {
        background: rgba(255, 255, 255, 0.05);
      }

      .button-pix {
        background: ${({ ButtonBackgroundIsActive }) =>
          ButtonBackgroundIsActive ? "rgba(255, 255, 255, 0.05)" : "none"};
      }
      .button-credit {
        background: ${({ ButtonBackgroundIsActive }) =>
          ButtonBackgroundIsActive ? "none" : "rgba(255, 255, 255, 0.05)"};
      }
    }

    .option-payment {
      display: flex;
      padding: 4rem 4rem;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      > img {
        max-width: 100%;
        margin-inline: auto;
        padding-bottom: 2rem;
      }

      @media (min-width: 768px) {
        padding: 4rem 9rem;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 53rem;
  }
`;

export const SectionCredit = styled.section`
  width: 100%;
  gap: 3.7rem;
  display: flex;
  flex-direction: column;

  .data-card {
    gap: 1.4rem;
    display: flex;
    margin-bottom: 3.7rem;

    input {
      width: 100%;
    }
  }
`;

export const Accept = styled.div`
  gap: 5rem;
  display: flex;
  align-items: center;
  padding-block: 2.2rem;
  flex-direction: column;
  justify-content: center;

  > svg {
    font-size: 10.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > p {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;