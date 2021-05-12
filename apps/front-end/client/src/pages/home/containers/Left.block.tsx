import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { Catalog } from '@components/custom/catalog'

const useStyles = makeStyles(() => ({
  aside: {
    marginRight: '30px'
  }
}))

const LeftBlock: FC = () => {
  const { aside } = useStyles()

  return (
    <Hidden mdDown>
      <aside className={aside}>
        <Catalog />
      </aside>
    </Hidden>
  )
}

export { LeftBlock }
