import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      marginRight: 15
    }
  },
  link: {
    fontWeight: 500,
    fontSize: '1.25rem',
    textDecoration: 'none',
    letterSpacing: '0.0075em',
    lineHeight: 1.6,
    color: theme.palette.common.white
  }
}))

export { useStyles }
