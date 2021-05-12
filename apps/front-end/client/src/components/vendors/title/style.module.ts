import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    fontSize: '1.75rem',
    fontFamily: 'Helvetica',
    color: theme.palette.grey[800],
    marginLeft: theme.spacing(1.5),
    marginBlockStart: 0,
    marginBlockEnd: 0
  }
}))

export { useStyles }
