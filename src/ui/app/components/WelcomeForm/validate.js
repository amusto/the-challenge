/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
const validate = (values) => {
  const errors = {};

  // TODO: Validate that the user has entered a username, first name, and last name
  if (!values.get('first_name')) {
    errors.first_name = 'Required';
  } else if (values.get('first_name').length > 40) {
    errors.first_name = 'Must be 50 characters or less';
  }

  if (!values.get('last_name')) {
    errors.last_name = 'Required';
  } else if (values.get('last_name').length > 40) {
    errors.last_name = 'Must be 50 characters or less';
  }

  if (!values.get('user_name')) {
    errors.user_name = 'Required';
  } else if (values.get('user_name').length > 15) {
    errors.user_name = 'Must be 15 characters or less';
  }

  return errors;
};

export default validate;
