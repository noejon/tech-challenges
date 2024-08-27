import { ChangeEvent, FormEvent, useState } from 'react';
import { postRecord } from './api/post-record';

function checkName(name: string) {
  if (!name) {
    return 'Name is required';
  }

  const regexCheck = /^[a-zA-Z0-9\s#()&]+$/;
  if (!regexCheck.test(name)) {
    return 'Name can only contain alphanumeric characters, whitespace, "#", "(", ")" and "&"';
  }
}

function checkQuantity(quantity: string) {
  if (!quantity) {
    return 'Quantity is required';
  }

  const quantityAsFloat = parseFloat(quantity);

  if (Number.isNaN(quantityAsFloat)) {
    return 'Quantity must be a decimal number';
  }

  const regexCheck = /^[0-9]*[\.,]?(\d{1,3})?$/;

  if (!regexCheck.test(quantity)) {
    return 'Quantity is not a valid number. Maximum decimal numbers of 3';
  }
}

interface InputState<T> {
  value: T;
  validationError?: string;
}

interface FormState {
  name: InputState<string>;
  quantity: InputState<string>;
}

function App() {
  const [formState, setFormState] = useState<FormState>({
    name: {
      value: '',
      validationError: '',
    },
    quantity: {
      value: '',
      validationError: '',
    },
  });

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const nameValidationError = checkName(formState.name.value);
    const quantityValidationError = checkQuantity(formState.quantity.value);

    if (nameValidationError || quantityValidationError) {
      setFormState((state) => ({
        name: {
          ...state.name,
          validationError: nameValidationError,
        },
        quantity: {
          ...state.quantity,
          validationError: quantityValidationError,
        },
      }));
      return;
    }

    await postRecord({
      name: formState.name.value,
      quantity: formState.quantity.value as unknown as number,
    });
  }

  function handleNameInput(event: ChangeEvent<HTMLInputElement>) {
    const nameFromInput = event.target.value;
    setFormState((state) => ({
      ...state,
      name: {
        ...state.name,
        value: nameFromInput,
      },
    }));
  }

  function handleQuantityInput(event: ChangeEvent<HTMLInputElement>) {
    const quantityFromInput = event.target.value;

    setFormState((state) => ({
      ...state,
      quantity: {
        ...state.quantity,
        value: quantityFromInput,
      },
    }));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={handleNameInput}
        placeholder="name"
        required
        value={formState.name.value}
      />
      <p>{formState.name.validationError}</p>
      <input
        type="text"
        onChange={handleQuantityInput}
        placeholder="quantity"
        required
        value={formState.quantity.value}
      />
      <p>{formState.quantity.validationError}</p>
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
