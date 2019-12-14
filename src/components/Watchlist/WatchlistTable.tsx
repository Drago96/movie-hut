import React, { useState } from 'react';
import { Table, TableBody } from '@material-ui/core';

import useRequestSlice from 'hooks/useRequestSlice';
import WatchlistItem from 'types/WatchlistItem';
import watchlistToggleRequestSlice from 'store/slices/watchlistToggleRequestSlice';
import ConfirmationDialog from 'components/UI/ConfirmationDialog/ConfirmationDialog';
import WatchlistTableRow from './WatchlistTableRow';

type Props = {
  movies: WatchlistItem[];
};

const WatchlistTable: React.FC<Props> = ({ movies }) => {
  const [removeFromWatchlist] = useRequestSlice(watchlistToggleRequestSlice, {
    showLoadingOverlay: true
  });

  const [actionableMovieId, setActionableMovieId] = useState<number | null>(
    null
  );
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const handleDeleteClick = (movieId: number) => {
    setActionableMovieId(movieId);

    setConfirmationDialogOpen(true);
  };

  const handleCancelClick = () => {
    setActionableMovieId(null);

    setConfirmationDialogOpen(false);
  };

  const handleOkClick = () => {
    handleCancelClick();

    removeFromWatchlist({
      movieId: actionableMovieId as number,
      watchlisted: false
    });
  };

  return (
    <>
      <ConfirmationDialog
        message="Are you sure you want to remove this movie from your watchlist?"
        open={confirmationDialogOpen}
        onCancelClick={handleCancelClick}
        onOkClick={handleOkClick}
      />
      <Table>
        <TableBody>
          {movies.map(movie => (
            <WatchlistTableRow
              key={movie.id}
              movie={movie}
              onRemove={handleDeleteClick}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default WatchlistTable;
