import { FC } from 'react'
import Button from '@material-ui/core/Button'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'

import { useStyles } from './style.module'

export const Catalog: FC = () => {
  const { root } = useStyles()

  return (
    <Button className={root} variant="outlined" startIcon={<AppsOutlinedIcon />}>
      Каталог
    </Button>
  )
}
