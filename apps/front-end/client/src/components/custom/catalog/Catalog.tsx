import { FC, useRef } from 'react'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'

import { Items } from './Items'

/* eslint-disable @typescript-eslint/no-use-before-define */

const Catalog: FC = () => {
  const menu = useRef<HTMLUListElement>(null)
  const overlay = useRef<HTMLDivElement>(null)
  const headline = useRef<HTMLDivElement>(null)

  let timeout: ReturnType<typeof setTimeout>

  function onMouseEnter() {
    timeout = setTimeout(() => {
      menu.current?.classList.add('hover')
      overlay.current?.classList.add('active')
      headline.current?.classList.add('active')
    }, 750)
  }

  function onMouseLeave() {
    menu.current?.classList.remove('hover')
    overlay.current?.classList.remove('active')
    headline.current?.classList.remove('active')
    clearingTimeout()
  }

  function clearingTimeout() {
    clearTimeout(timeout)
  }

  return (
    <div className="container">
      <div className="headline" ref={headline}>
        <AppsOutlinedIcon />
        <span>Каталог товарів</span>
      </div>

      <nav className="catalog-navigation" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ul className="root-menu" ref={menu}>
          <Items />
        </ul>
      </nav>
      <div id="overlay" ref={overlay} />
    </div>
  )
}

export { Catalog }
