import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    display: 'flex',
    alignItems: 'center',
    height: 36,
    flexGrow: 1
  },
  searchIcon: {
    color: theme.palette.grey[500]
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  submitButton: {
    borderRadius: '0 4px 4px 0',
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,

    '&:hover': {
      backgroundColor: theme.palette.success.light
    }
  },
  divider: {
    height: 28,
    margin: 6
  }
}))

export { useStyles }
