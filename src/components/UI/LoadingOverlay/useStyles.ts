import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return createStyles({
    paper: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      overflow: 'hidden'
    }
  });
});

export default useStyles;
