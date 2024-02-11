import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 136.8rem;
  padding-inline: 4rem;

  > h3 {
    margin-block: 3.4rem;
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
  }
  > main {
    max-width: 100%;
    margin-inline: auto;
  }
  @media (min-width: 768px) {
    main {
      width: 136.8rem;
    }
    padding-inline: 12.3rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding-inline: 1rem;
    border: 2px solid #192227;
  }

  @media (min-width: 768px) {
    th, td {
      padding-inline: 2.4rem;
    }
  }
`;

export const Thead = styled.thead`
  height: 4.5rem;
  text-align: left;
`;

export const Tbody = styled.tbody`

  > tr {
    height: 8rem;
    td {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  > span {
    left: 1.6rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    position: absolute;
  }

  .pendente {
    background: red;
  }

  .preparando {
    background: yellow;
  }

  .entregue {
    background: #04d361;
  }

  select {
    width: 100%;
    color: white;
    appearance: none;
    border-radius: 0.5rem;
    -webkit-appearance: none;
    padding: 1.3rem 1.6rem 1.3rem 3.2rem;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    @media (min-width: 768px) {
      width: 17.5rem;
      background-repeat: no-repeat;
      background-position: right 1rem top 50%;
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    }
  }
`;