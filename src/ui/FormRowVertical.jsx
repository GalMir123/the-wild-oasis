import styled from "styled-components";

// Styled component for FormRowVertical
const FormRowVertical = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem; // Add space between form rows

  label {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey-700);
    margin-bottom: 0.6rem; // Space between label and input
  }

  input {
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 0.4rem;
    outline: none;
    transition: border-color 0.3s ease;

    // Add focus effect
    &:focus {
      border-color: var(--color-blue-500);
    }

    &::placeholder {
      color: var(--color-grey-500);
    }

    // Optional: Add a small shadow on focus to enhance the UX
    &:focus {
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

export default FormRowVertical;
