import { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

import { SvgCart } from '@assets/svg/Cart'
import { useStyles } from './style.module'

const ShoppingCart: FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <IconButton
      aria-label="show 4 new mails"
      color="inherit"
      className={classes.root}
      classes={{ root: classes.buttonPadding }}
    >
      <Badge classes={{ anchorOriginTopRightRectangle: classes.badge }} color="secondary" badgeContent={8}>
        <SvgCart className={classes.svg} />
      </Badge>
    </IconButton>
  )
}

export { ShoppingCart }
