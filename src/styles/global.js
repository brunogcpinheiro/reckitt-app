import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ouline: none;
    font-family: "Montserrat", sans-serif;
  }

  label.Mui-focused {
    color: #db338f;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #db338f;
    }
    &.Mui-focused fieldset {
      border-color: #db338f;
    }
  }

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #db338f;
  }
}
`;

export default GlobalStyle;
