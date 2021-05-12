import React, { FC } from 'react'
import Link from 'next/link'
import Hidden from '@material-ui/core/Hidden'
import clsx from 'clsx'

import { publicClientUrlInfo as url } from '@data/client/main-url-info'
import { useStyles } from './style.module'

export const Logo: FC = () => {
  const { root, link } = useStyles()

  return (
    <>
      <Hidden lgUp>
        <Link href={url.domain}>
          <a title='Інтернет магазин "Захисник"' className={clsx(root, link)}>
            Material
          </a>
        </Link>
      </Hidden>
      <Hidden mdDown>
        <Link href={url.domain}>
          <a title='Інтернет магазин "Захисник"' className={clsx(root, link)}>
            Material-UI.com
          </a>
        </Link>
      </Hidden>
    </>
  )
}
