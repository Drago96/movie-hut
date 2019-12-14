import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core';
import { FieldProps, getIn } from 'formik';

type Props = FieldProps &
  Omit<TextFieldProps, 'error' | 'name' | 'onChange' | 'value'>;

const TextField: React.FC<Props> = ({
  children,
  field,
  form,
  disabled,
  helperText,
  variant,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, submitCount, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError =
    Boolean(fieldError) && (getIn(touched, name) || submitCount > 0);

  return (
    <MuiTextField
      {...props}
      {...field}
      error={showError}
      helperText={showError ? fieldError : helperText || '\u00a0'}
      disabled={disabled || isSubmitting}
      variant="standard"
    >
      {children}
    </MuiTextField>
  );
};

export default TextField;
