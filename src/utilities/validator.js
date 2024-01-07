export const emailValidator = (value, type) => {
  let mailFormat = /\S+@\S+\.\S+/;

  if (value == '' || !value) {
    return `${type} is required`;
  } else if (!value?.match(mailFormat)) {
    return 'Invalid Email';
  } else {
    return '';
  }
};

export const passwordValidator = (value, type) => {
  if (value == '') {
    return `${type} is required.`;
  } else if (value.length < 6) {
    return `${type} must be of atleast 6 characters`;
  } else {
    return '';
  }
};
