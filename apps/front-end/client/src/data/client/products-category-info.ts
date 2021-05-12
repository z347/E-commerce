type ProductsCategoryType = {
  mainCategory: string
  mainPath: string
  sub_category: SubCategoryType[]
}

type SubCategoryType = {
  subCategory: string
  path: string
}

export const productsCategoryInfo: ProductsCategoryType[] = [
  {
    mainCategory: 'Вишивка',
    mainPath: '/embroidery',
    sub_category: [
      {
        subCategory: 'Національна символіка',
        path: '/national-symbols'
      },
      {
        subCategory: 'Навчальні заклади',
        path: 'educational-institutions'
      },
      {
        subCategory: 'Збройні сили України',
        path: '/zsu'
      },
      {
        subCategory: 'Служба безпеки України',
        path: '/security-service-of-Ukraine'
      },
      {
        subCategory: 'Національна гвардія України',
        path: '/ngu'
      },
      {
        subCategory: 'Поліція',
        path: '/police'
      },
      {
        subCategory: 'Державна служба надзвичайних ситуацій',
        path: '/state-emergency-service'
      },
      {
        subCategory: 'ДМБ',
        path: '/dmb'
      },
      {
        subCategory: 'Державна митна служба',
        path: '/state-custom-service'
      },
      {
        subCategory: 'Державна прикордонна служба',
        path: '/state-border-service'
      },
      {
        subCategory: 'Охорона',
        path: '/security'
      },
      {
        subCategory: 'Українська залізниця',
        path: '/Ukrainian-railways'
      },
      {
        subCategory: "Державна служба спеціального зв'язку та захисту інформації України",
        path: '/dsszii'
      }
    ]
  },
  {
    mainCategory: 'Погони',
    mainPath: '/shoots',
    sub_category: [
      {
        subCategory: 'Збройні сили України',
        path: '/zsu'
      },
      {
        subCategory: 'Державна прикордонна служба',
        path: '/state-border-service'
      },
      {
        subCategory: 'Державна служба надзвичайних ситуацій',
        path: '/state-emergency-service'
      },
      {
        subCategory: 'Поліція',
        path: '/police'
      },
      {
        subCategory: 'Національна гвардія',
        path: '/ngu'
      },
      {
        subCategory: 'Митна служба',
        path: '/custom-service'
      },
      {
        subCategory: 'Лісове господарство',
        path: '/lisgosp'
      },
      {
        subCategory: 'Українська залізниця',
        path: '/Ukrainian-railways'
      },
      {
        subCategory: 'ДМБ',
        path: '/dmb'
      },
      {
        subCategory: 'Охорона',
        path: '/security'
      }
    ]
  },
  {
    mainCategory: 'Одяг',
    mainPath: '/clothes',
    sub_category: [
      {
        subCategory: 'Костюми',
        path: '/suites'
      },
      {
        subCategory: 'Фліси',
        path: '/flis'
      },
      {
        subCategory: 'Куртки',
        path: '/jackets'
      },
      {
        subCategory: 'Кітеля',
        path: '/coats'
      },
      {
        subCategory: 'Штани',
        path: '/pants'
      },
      {
        subCategory: 'Футболки, майки',
        path: '/t-shirts'
      },
      {
        subCategory: 'Светри',
        path: '/sweaters'
      },
      {
        subCategory: 'Тільняшки',
        path: '/vests'
      },
      {
        subCategory: 'Термо-білизна',
        path: '/thermal-underwear'
      }
    ]
  },
  {
    mainCategory: 'Взуття',
    mainPath: '/shoes',
    sub_category: [
      {
        subCategory: 'Берци',
        path: '/bertsi'
      },
      {
        subCategory: 'Туфлі',
        path: '/tyfli'
      },
      {
        subCategory: 'Устілки',
        path: '/insoles'
      }
    ]
  },
  {
    mainCategory: 'Головні убори',
    mainPath: '/head-wear',
    sub_category: [
      {
        subCategory: 'Берети',
        path: '/berets'
      },
      {
        subCategory: 'Мазепинка',
        path: '/mazepynka'
      },
      {
        subCategory: 'Кепки',
        path: '/cap'
      },
      {
        subCategory: 'Фуражки, позументи',
        path: '/forage-cap'
      },
      {
        subCategory: 'Балаклави, бафи',
        path: '/balaclava'
      },
      {
        subCategory: 'Шапки',
        path: '/hats'
      },
      {
        subCategory: 'Панами, капелюхи',
        path: '/lords'
      },
      {
        subCategory: 'Шоломи, підшоломники, нашоломники',
        path: '/helmets'
      },
      {
        subCategory: 'Шемаги, бандани, хустки, шарфи',
        path: '/shemahy'
      }
    ]
  }
]
