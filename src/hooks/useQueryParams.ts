import { useLocation, useHistory } from 'react-router';
import queryString, { ParsedQuery } from 'query-string';
import { useCallback, useMemo } from 'react';

type UseQueryParams = () => {
  params: ParsedQuery<string>;
  updateQueryParams: (queryParamsToUpdate: ParsedQuery<string>) => void;
};

const useQueryParams: UseQueryParams = () => {
  const location = useLocation();
  const history = useHistory();

  const queryParams = useMemo(() => queryString.parse(location.search), [
    location.search
  ]);

  const updateQueryParams = useCallback(
    (queryParamsToUpdate: ParsedQuery<string>) => {
      history.push(
        `${location.pathname}?${queryString.stringify({
          ...queryParams,
          ...queryParamsToUpdate
        })}`
      );
    },
    [location.pathname, history, queryParams]
  );

  return {
    params: queryParams,
    updateQueryParams
  };
};

export default useQueryParams;
