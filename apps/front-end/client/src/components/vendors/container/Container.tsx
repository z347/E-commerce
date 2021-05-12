import { FC } from 'react'
import ContainerDefault from '@material-ui/core/Container'

/* eslint-disable react/require-default-props */

type PropTypes = {
  children: any
  component?: any
  className?: string
}

export const Container: FC<PropTypes> = (props: PropTypes) => {
  const { children, component, className } = props

  return (
    <ContainerDefault component={component} maxWidth="xl" className={className}>
      {children}
    </ContainerDefault>
  )
}
