import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';

import { Type } from 'store/slices/authenticationRequestSlice';
import TextField from 'components/UI/TextField/TextField';
import useStyles from './useStyles';
import { AuthenticationFormProps } from './AuthenticationForm';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(6)
});

type Props = AuthenticationFormProps;

const LoginForm: React.FC<Props> = ({ onSubmit, submitting }) => {
  const classes = useStyles();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }, { setSubmitting }) => {
        setSubmitting(false);

        onSubmit({ email, password, authenticationType: Type.Login });
      }}
    >
      <Form>
        <Field
          className={classes.authenticationField}
          type="text"
          label="Email"
          name="email"
          component={TextField}
          disabled={submitting}
        />
        <Field
          className={classes.authenticationField}
          type="password"
          label="Password"
          name="password"
          component={TextField}
          disabled={submitting}
        />
        <Button
          disabled={submitting}
          fullWidth
          type="submit"
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
