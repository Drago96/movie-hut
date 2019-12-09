import { useLocation } from 'react-router';
import queryString from 'query-string';

const useQueryParams = () => {
  const location = useLocation();

  const queryParams = queryString.parse(location.search);

  return queryParams;
};

export default useQueryParams;
