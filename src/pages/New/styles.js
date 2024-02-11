import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-inline: auto;
  max-width: 136.8rem;
  padding-inline: 4rem;

  @media (min-width: 768px) {
    width: 100%;
    padding-inline: 12.3rem;
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  display: flex;
  margin: 2.4rem auto 4rem;

  > a {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, 0.4rem + 3vw, 2.4rem);
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > header {
    legend {
      font-size: 3.2rem;
      margin-bottom: 3.2rem;
    }
  }

  .smallBox {
    max-width: 23rem;
    #file {
      gap: 0.8rem;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      div {
        gap: 1rem;
        display: flex;
        height: 4.8rem;
        width: 22.9rem;
        align-items: center;
        border-radius: 0.5rem;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    input[type="file"] {
      display: none;
    }
  }

  > button {
    width: 100%;
    height: 4.8rem;
    margin-top: 2.4rem;
    background: #1a2327;
    align-self: flex-end;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (min-width: 768px) {
      width: 35.7rem;
    }
  }
`;

export const InputWrapper = styled.div`
  gap: 4rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    column-gap: 3.2rem;
  }
`;

export const SectionIngredients = styled.div`
  width: 100%;
  gap: 0.8rem;
  display: flex;
  height: 4.8rem;
  margin-bottom: 4rem;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > div {
    gap: 2rem;
    display: flex;
    padding: 0.8rem;
    flex-wrap: wrap;
    max-height: max-content;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;

    > div {
      gap: 2rem;
      max-height: 4.8rem;
    }
  }
`;