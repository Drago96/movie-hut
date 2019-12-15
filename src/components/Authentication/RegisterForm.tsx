import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';

import { Type } from 'store/slices/authenticationRequestSlice';
import TextField from 'components/UI/TextField/TextField';
import useStyles from './useStyles';
import { AuthenticationFormProps } from './AuthenticationForm';
import { validationSchema as loginValidationSchema } from './LoginForm';

const validationSchema = loginValidationSchema.concat(
  Yup.object().shape({
    name: Yup.string()
      .required()
      .min(4)
      .max(20),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'passwords must match'
    )
  })
);

type Props = AuthenticationFormProps;

const RegisterForm: React.FC<Props> = ({ onSubmit, submitting }) => {
  const classes = useStyles();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}
      onSubmit={({ email, password, name }, { setSubmitting }) => {
        setSubmitting(false);

        onSubmit({ email, password, name, authenticationType: Type.Register });
      }}
    >
      <Form>
        <Field
          className={classes.authenticationField}
          type="text"
          label="Name"
          name="name"
          component={TextField}
          disabled={submitting}
        />
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
        <Field
          className={classes.authenticationField}
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          component={TextField}
          disabled={submitting}
        />
        <Button
          disabled={submitting}
          fullWidth
          type="submit"
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
