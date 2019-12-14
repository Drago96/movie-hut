import Pagination from './Pagination';

type DataList<T> = Pagination & {
  results: T[];
  totalResults: number;
};

export default DataList;
