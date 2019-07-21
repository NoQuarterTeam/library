import { css } from "../../Theme"

const overides = css`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  button {
    appearance: none;
    border: 0;
    cursor: pointer;
    background: transparent;
  }

  * {
    &:focus {
      outline-width: 0;
    }
  }

  .focus-outline {
    * {
      &:focus {
        outline-width: 5px;
      }
    }
  }
`

export default overides
