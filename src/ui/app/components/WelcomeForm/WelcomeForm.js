/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import formFields from './formFields';
import validate from './validate';

import { RFTextField } from 'components/ReduxFormFields/RFTextField';

class WelcomeForm extends React.PureComponent {
  // Helper function
  renderFields() {
      return formFields.map(({ label, name, error }) => {
          return (
            <Field
              key={name}
              name={name}
              component={RFTextField}
              label={label}
            />
          )
      })
  }

  render() {
    const { handleSubmit, reset, pristine, submitting } = this.props;

    return (
      <form className="flex flex-column" onSubmit={handleSubmit}>
        <legend className="f4 fw6 ph0 mh0">Enter your information</legend>
        {this.renderFields()}
        <div className="center mt3">
          <Button variant="contained" color="default" type="clear" disabled={pristine || submitting} onClick={reset} style={{margin: '10px'}}>
            Clear
          </Button>

          <Button variant="contained" color="primary" type="submit" disabled={pristine || submitting} style={{margin: '10px'}}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
let formConfig = {
  enableReinitialize: false
}
export default reduxForm({
  form: 'welcome',
  validate
}, formConfig)(WelcomeForm);
