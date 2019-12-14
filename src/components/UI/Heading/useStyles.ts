import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    tableHeading: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
});

export default useStyles;
