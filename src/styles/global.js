import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  body, body * {
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      border-radius: 8px;
    }
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }


  legend, button, a, h3, legend{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;