import Pagination from './Pagination';

type PaginatedList<T> = Pagination & {
  results: T[];
  totalResults: number;
};

export default PaginatedList;
