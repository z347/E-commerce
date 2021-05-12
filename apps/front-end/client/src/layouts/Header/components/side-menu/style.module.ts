import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    height: 40,
    width: 40,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(0),
    borderRadius: 4,

    '&:hover': {
      backgroundColor: theme.palette.grey[700]
    },

    [theme.breakpoints.down('sm')]: {
      marginRight: 10
    }
  },
  list: {
    width: 320
  },
  iconButtonSize: {
    fontSize: '2rem'
  }
}))

export { useStyles }
