import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    marginLeft: 12,
    borderRadius: 4,

    '&:hover': {
      backgroundColor: theme.palette.grey[700]
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: 10
    }
  },
  badge: {
    right: '-1px',
    top: 3,
    backgroundColor: theme.palette.success.light
  },
  buttonPadding: {
    paddingTop: 0,
    paddingBottom: 0
  },
  svg: {
    fill: theme.palette.grey[100]
  }
}))

export { useStyles }
