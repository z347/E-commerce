import { FC } from 'react'
import Link from 'next/link'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { productsCategoryInfo as menuData } from '@data/client/products-category-info'

/* eslint-disable react/no-array-index-key */

const Items: FC = () => {
  const catalogElementsJSX = menuData.map((element, index) => {
    const subCategoryJSX = element.sub_category.map((item, i) => (
      <li key={i}>
        <Link href={item.path}>
          <a>{item.subCategory}</a>
        </Link>
      </li>
    ))

    return (
      <li className="navigation-element" key={index}>
        <Link href={element.mainPath}>
          <a>
            {element.mainCategory}
            <ChevronRightIcon />
          </a>
        </Link>
        <ul className="sub-menu duration" id={`sub-menu-${index}`}>
          {subCategoryJSX}
        </ul>
      </li>
    )
  })

  return <>{catalogElementsJSX}</>
}

export { Items }
