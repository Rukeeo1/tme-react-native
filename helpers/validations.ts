interface IFormValues {
  name?: string;
  email: string;
  password: string;
  isValid?:boolean
}

function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validateForm = (values: IFormValues) => {
  //if email... check if email string is valid
  //if password check if character is up to 8xters or less than 13
    // let isValid = true;
  const errors: IFormValues = {
    email: '',
    password: '',
    name: '',
    isValid: true
  };
  const { email, password, name } = values;
  if (!validateEmail(email)) {
    errors.email = 'Invalid Email Format';
    errors.isValid = false
  }
  if (password.trim().length < 8 || password.trim().length > 13) {
    errors.password = 'Password must be between 8 and 13 characters';
    errors.isValid = false
  }

  if (name && (name.trim().length < 3 || name.trim().length > 13)) {
    errors.password = 'Name must be between 3 and 13 characters';
    errors.isValid = false
  }
  return errors;
};
