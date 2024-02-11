import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    gap: 2rem;
    display: flex;
    max-width: 47.6rem;
    padding-block: 5rem;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    width: 120rem;
    align-items: center;
    margin-inline: auto;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  flex: 1;
  gap: 3.2rem;
  display: flex;
  max-width: 47.6rem;
  margin-inline: auto;
  height: fit-content;
  padding-block: 6.4rem;
  border-radius: 1.6rem;
  padding-inline: 2.4rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  > legend {
    font-size: 3.2rem;
    text-align: center;
  }

  > a {
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  @media (min-width: 768px) {
    margin-inline: 0;
    padding: 6.4rem;
  }
`;