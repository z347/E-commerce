import { FC } from 'react'
import { useStyles } from './style.module'

type PropTypes = {
  title: string
}

const Title: FC<PropTypes> = ({ title }: PropTypes) => {
  const { titleStyle } = useStyles()

  return <h4 className={titleStyle}>{title}</h4>
}

export { Title }
