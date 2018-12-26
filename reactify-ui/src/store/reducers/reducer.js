
const initialState = {
  logoImage: null,
  homePage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    carousel_imgs: null,
    last_projects: null,
    showMore: false

  },
  aboutUsPage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    showMore: false
  },
  projectsPage: null,
  galleryPage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    images: null,
    showMore: false
  },
  pricesPage: null,
  contactsPage: null
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'LOAD_ABOUT_US':
      newState.aboutUsPage = { ...newState.aboutUsPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description
      }
      break

    case 'ABOUT_US_SHOW_MORE_BUTTON':
      newState.aboutUsPage = { ...newState.aboutUsPage,
        showMore: !newState.aboutUsPage.showMore
      }
      break

    case 'LOAD_GALLERY':
      newState.galleryPage = { ...newState.galleryPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description
      }
      break

    case 'LOAD_GALLERY_IMAGES':
      newState.galleryPage = { ...newState.galleryPage,
        images: action.data
      }
      console.log('LOAD_GALLERY_IMAGES', newState.galleryPage.images)
      break

    case 'GALLERY_SHOW_MORE_BUTTON':
      newState.galleryPage = { ...newState.galleryPage,
        showMore: !newState.galleryPage.showMore
      }
      break

    case 'LOAD_HOME_PAGE':
      newState.homePage = { ...newState.homePage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description
      }
      break

    case 'LOAD_HOME_PAGE_LAST_PROJECTS':
      newState.homePage = { ...newState.homePage,
        last_projects: action.data
      }
      break

    case 'LOAD_CAROUSEL':
      newState.homePage = { ...newState.homePage,
        carousel_imgs: action.data
      }
      // console.log(newState.homePage.carousel_imgs)
      break

    case 'HOME_SHOW_MORE_BUTTON':
      newState.homePage = { ...newState.homePage,
        showMore: !newState.homePage.showMore
      }
      break

    default:
      break
  }

  return newState
}

export default reducer
