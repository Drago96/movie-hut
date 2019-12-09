import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router';
import { trim } from 'lodash';

import useQueryParams from 'hooks/useQueryParams';
import SearchField from './SearchField';

const SearchForm: React.FC = () => {
  const { query } = useQueryParams();
  const history = useHistory();

  const handleSubmit = ({ searchQuery }: any) => {
    if (trim(searchQuery) === '') {
      return;
    }

    history.push(`/search?query=${searchQuery}`);
  };

  return (
    <Formik
      initialValues={{ searchQuery: query || '' }}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form>
        <Field type="text" name="searchQuery" component={SearchField} />
      </Form>
    </Formik>
  );
};

export default SearchForm;
