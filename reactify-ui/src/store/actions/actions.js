// import 'whatwg-fetch'
import cookie from 'react-cookies'
import {
  loadDataAsnc,
  createDataAsnc,
  updatetDataAsnc,
  destroyDataAsnc } from './FetchFuncions'

// export const loadDataAsnc = (dispatch, endpoint, type) => {
//   let lookupOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//   fetch(endpoint, lookupOptions)
//     .then((responce) => {
//       return responce.json()
//     }).then((responceData) => {
//       // console.log(responceData)
//       dispatch({ type: type,
//         data: responceData
//       })
//     }).catch((error) => {
//       console.log('error', error)
//     })
// }

// ABOUT US PAGE
export const loadAboutUsPageData = () => {
  const endpoint = '/api/about_us/'
  const type = 'LOAD_ABOUT_US'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}

export const showMoreButton = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'ABOUT_US_SHOW_MORE_BUTTON'
    })
  }
}// END ABOUT US PAGE

// GALLERY PAGE DESCRIPTION
export const loadGalleryPageData = () => {
  const endpoint = '/api/gallery/'
  const type = 'LOAD_GALLERY'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END GALLERY PAGE DESCRIPTION

// GALLERY PAGE IMAGES
export const loadGalleryImages = (next) => {
  // let endpoint = '/api/gallery/images/'
  if (next) {
    let endpoint = next
    const type = 'LOAD_GALLERY_IMAGES'
    return dispatch => {
      loadDataAsnc(dispatch, endpoint, type)
    }
  }
}// END GALLERY PAGE IMAGES

// GALLERY SHOW MORE BUTTON
export const showMoreGallery = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'GALLERY_SHOW_MORE_BUTTON'
    })
  }
} // END SHOW MORE BUTTON

// GALLERY PAGE LOADED
export const galleryPageLoaded = () => {
  return dispatch => {
    dispatch({
      type: 'GALLERY_PAGE_LOADED'
    })
  }
} // END GALLERY PAGE LOADED

// HOME PAGE PAGE DESCRIPTION
export const loadHomePageDescription = () => {
  const endpoint = '/api/home/'
  const type = 'LOAD_HOME_PAGE'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END HOME PAGE DESCRIPTION

// HOME PAGE LAST PROJECTS
export const loadLastProjects = () => {
  const endpoint = '/api/home/last-projects/'
  const type = 'LOAD_HOME_PAGE_LAST_PROJECTS'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END HOME PAGE LAST PROJECTS

// HOME PAGE LAST PROJECTS
export const loadCarousel = () => {
  const endpoint = '/api/home/carousel/'
  const type = 'LOAD_CAROUSEL'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END HOME PAGE LAST PROJECTS

// HOME SHOW MORE BUTTON
export const showMoreHome = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'HOME_SHOW_MORE_BUTTON'
    })
  }
} // END HOME SHOW MORE BUTTON

// HOME PAGE LOADED
export const homePageLoaded = () => {
  return dispatch => {
    dispatch({
      type: 'HOME_PAGE_LOADED'
    })
  }
} // END HOME PAGE LOADED

// PROJECTS PAGE PAGE DESCRIPTION
export const loadProjectsPageDescription = () => {
  const endpoint = '/api/projects/'
  const type = 'LOAD_PROJECTS_PAGE'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END PROJECTS PAGE DESCRIPTION

// PROJECTS PAGE LOADED
export const projectsPageLoaded = () => {
  return dispatch => {
    dispatch({
      type: 'PROJECTS_PAGE_LOADED'
    })
  }
} // END PROJECTS PAGE LOADED

// LOAD PROJECTS
export const loadProjects = () => {
  const endpoint = '/api/projects/projects-list/'
  const type = 'LOAD_PROJECTS'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PROJECTS

// LOAD CATEGORIES
export const loadCategories = () => {
  const endpoint = '/api/projects/categories/'
  const type = 'LOAD_CATEGORIES'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PROJECTS

// PROJECTS SHOW MORE BUTTON
export const showMoreProjects = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'PROJECTS_SHOW_MORE_BUTTON'
    })
  }
} // END PROJECTS SHOW MORE BUTTON

// LOAD PAGE AND PROJECTS BY CATEGORY
export const loadPageAndProjectsByCategory = (id) => {
  const endpoint = `/api/projects/categories-detail/${id}/`
  const type = 'LOAD_PAGE_AND_PROJECTS_BY_CATEGORY'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PAGE AND PROJECTS BY CATEGORY

// CATEGORY DETAIL SHOW MORE BUTTON
export const showMoreCategoryDetail = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'CATEGORY_DETAIL_SHOW_MORE_BUTTON'
    })
  }
} // END CATEGORY DETAIL SHOW MORE BUTTON

// LOAD PROJECT DETAIL
export const loadProjectDetail = (id) => {
  const endpoint = `/api/projects/project/${id}/`
  const type = 'LOAD_PROJECT_DETAIL'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PAGE AND PROJECTS BY CATEGORY

// PROJECT DETAIL SHOW MORE BUTTON
export const showMoreProjectDetail = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'PROJECT_DETAIL_SHOW_MORE_BUTTON'
    })
  }
} // END PROJECT DETAIL SHOW MORE BUTTON

// LOAD DESIGN PRICES PAGE DESCRIPTION
export const loadDesignPricesPageDescription = () => {
  const endpoint = '/api/design-prices/'
  const type = 'LOAD_PRICES_PAGE_DESCRIPTION'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD DESIGN PRICES PAGE DESCRIPTION

// LOAD DESIGN PRICES CATEGORIES
export const loadDesignPricesCategories = () => {
  const endpoint = '/api/design-prices/categories/'
  const type = 'LOAD_DESIGN_PRICES_CATEGORIES'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD DESIGN PRICES CATEGORIES

// LOAD DESIGN PRICES CATEGORIES_DESCRIPTION
export const loadDesignCategoriesDescription = () => {
  const endpoint = '/api/design-prices/categories_description/'
  const type = 'LOAD_DESIGN_PRICES_CATEGORIES_DESCRIPTION'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD DESIGN PRICES CATEGORIES_DESCRIPTION

// DESIGN PRICES SHOW MORE BUTTON
export const showMoreDesignPricesDetail = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'DESIGN_PRICES_SHOW_MORE_BUTTON'
    })
  }
} // END DESIGN PRICES SHOW MORE BUTTON

// LOAD DESIGN PRICES CATEGORIES_DESCRIPTION
export const loadContacts = () => {
  const endpoint = '/api/contacts/'
  const type = 'LOAD_CONTACTS'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD DESIGN PRICES CATEGORIES_DESCRIPTION

// CREATE DESIGN ORDER
export const createOrderAsnc = (dispatch, endpoint, data) => {
  let csrfToken = cookie.load('csrftoken')
  if (csrfToken !== undefined) {
    let lookupOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }

    fetch(endpoint, lookupOptions)
      .then((responce) => {
        return responce.json()
      }).then((responceData) => {
        console.log(responceData)
        if (JSON.stringify(responceData) === JSON.stringify(data)) {
          console.log('Success')
          dispatch({ type: 'DESIGN_ORDER_SUCCESS'
            // data: responceData
          })
        } else { console.log('Fail') }
      }).catch((error) => {
        console.log('error qwer', error)
        dispatch({ type: 'DESIGN_ORDER_ERROR'
          // data: responceData
        })
      })
  }
}

export const createOrder = (data) => {
  const endpoint = '/api/design-prices/order_create/'
  return dispatch => {
    createOrderAsnc(dispatch, endpoint, data)
  }
}// END CREATE DESIGN ORDER

// LOAD GYPSUM PAGE DESCRIPTION
export const loadGypsumPageDescription = () => {
  const endpoint = '/api/gypsum/'
  const type = 'LOAD_GYPSUM_PAGE'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD GYPSUM PAGE DESCRIPTION

// LOAD GYPSUM PRODUCTS
export const loadGypsumProducts = (next) => {
  if (next) {
    console.log('action agter if', next)
    let endpoint = next
    const type = 'LOAD_GYPSUM_PRODUCTS'
    return dispatch => {
      loadDataAsnc(dispatch, endpoint, type)
    }
  }
}// END LOAD GYPSUM PRODUCTS

// ACTIVATE GYPSUM LOAD MORE LOADER
export const gypsumLoaderActivate = () => {
  return dispatch => {
    dispatch({
      type: 'ACTIVATE_GYPSUM_LOAD_MORE'
    })
  }
}// END ACTIVATE GYPSUM LOAD MORE LOADER

// LOAD GYPSUM CATEGORIES
export const loadGypsumCategories = () => {
  const endpoint = '/api/gypsum/categories/'
  const type = 'LOAD_GYPSUM_CATEGORIES'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD GYPSUM CATEGORIES

// GYPSUM PAGE SHOW MORE BUTTON
export const showMoreGypsum = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'GYPSUM_PAGE_SHOW_MORE_BUTTON'
    })
  }
} // END GYPSUM PAGE SHOW MORE BUTTON

// LOAD PAGE AND PRODUCTS BY CATEGORY
export const loadPageAndProductsByCategory = (id) => {
  const endpoint = `/api/gypsum/categories-detail/${id}/`
  const type = 'LOAD_PAGE_AND_PRODUCTS_BY_CATEGORY'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PAGE AND PRODUCTS BY CATEGORY

// GYPSUM CATEGORY DETAIL SHOW MORE BUTTON
export const showMoreGypsumCategoryDetail = (e) => {
  e.preventDefault()
  return dispatch => {
    dispatch({
      type: 'GYPSUM_CATEGORY_DETAIL_SHOW_MORE_BUTTON'
    })
  }
} // END GYPSUM CATEGORY DETAIL SHOW MORE BUTTON

// LOAD PRODUCT DETAIL
export const loadProductDetail = (id) => {
  const endpoint = `/api/gypsum/product/${id}/`
  const type = 'LOAD_PRODUCT_DETAIL'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PRODUCT

// CREATE GYPSUM PRODUCT TO BASKET
export const createGypsumProductToBasket = (data) => {
  const endpoint = '/api/orders/basket_list_create/'
  const type = 'ADD_PRODUCT_TO_BASKET'
  return dispatch => {
    createDataAsnc(dispatch, endpoint, type, data)
  }
}// END CREATE GYPSUM PRODUCT TO BASKET

// UPATE GYPSUM PRODUCT IN BASKET
export const updateGypsumProductToBasket = (id, data) => {
  const endpoint = `/api/orders/basket_update/${id}/`
  const type = 'UPDATE_PRODUCT_IN_BASKET'
  return dispatch => {
    updatetDataAsnc(dispatch, endpoint, type, data)
  }
}// END UPDATE GYPSUM PRODUCT IN BASKET

// LOAD PRODUCTS IN BASKET
export const loadProductsInBasket = () => {
  const endpoint = '/api/orders/basket_list_create/'
  const type = 'LOAD_PRODUCTS_IN_BASKET'
  return dispatch => {
    loadDataAsnc(dispatch, endpoint, type)
  }
}// END LOAD PRODUCTS IN BASKET

// DELETE PRODUCT IN BASKET
export const deleteProductFromBasket = (id) => {
  const endpoint = `/api/orders/basket_destroy/${id}/`
  const type = 'DELETE_PRODUCTS_IN_BASKET'
  return dispatch => {
    destroyDataAsnc(dispatch, endpoint, type, id)
  }
}// END DELETE PRODUCT IN BASKET

// ACTIVATE CHECKOUT FORM LOADER
export const checkoutFormLoaderActivate = (data) => {
  console.log('ACTIVATE_CHECKOUT_FORM_LOADER')
  return dispatch => {
    dispatch({
      type: 'ACTIVATE_CHECKOUT_FORM_LOADER'
    })
  }
}// END ACTIVATE CHECKOUT FORM LOADER

// CREATE GYPSUM ORDER
export const createGypsumOrder = (data) => {
  console.log('createGypsumOrder checkoutContacts', data)
  const endpoint = '/api/orders/order_create/'
  const type = 'CREATE_GYPSUM_ORDER'
  return dispatch => {
    createDataAsnc(dispatch, endpoint, type, data)
  }
}// END CREATE GYPSUM ORDER

// CREATE GYPSUM PRODUCTS IN ORDER
export const createGypsumProductsInOrder = (data) => {
  console.log('action createGypsumProductsInOrder')
  const endpoint = '/api/orders/products_in_order_create/'
  const type = 'CREATE_GYPSUM_PRODUCTS_IN_ORDER'
  return dispatch => {
    createDataAsnc(dispatch, endpoint, type, data)
  }
}// END CREATE GYPSUM PRODUCTS IN ORDER

// HANDLE GYPSUM CHECKUT FORM INPUT CHANGE
export const handleInputChange = (event) => {
  event.preventDefault()
  console.log(event.target.name, event.target.value)
  return dispatch => {
    dispatch({
      type: 'GYPSUM_CONTACTS_ORDER_FORM',
      key: event.target.name,
      value: event.target.value
    })
  }
}

export const handlePhoneInputChange = (status, value, country) => {
  let phone = `+${country.dialCode}${value}`.replace(/\s/g, '')
  // console.log(phone)
  return dispatch => {
    dispatch({
      type: 'GYPSUM_CONTACTS_ORDER_FORM',
      key: 'phone',
      value: phone
    })
  }
}
// END HANDLE GYPSUM CHECKUT FORM INPUT CHANGE

// HANDLE DESIGN PROJECT FORM INPUT CHANGE
export const interiorProjecthandleInputChange = (event) => {
  event.preventDefault()
  // console.log(event.target.name, event.target.value)
  return dispatch => {
    dispatch({
      type: 'INTERIOR_PROJECT_ORDER_FORM',
      key: event.target.name,
      value: event.target.value
    })
  }
}
// END HANDLE DESIGN PROJECT FORM INPUT CHANGE

// HANDLE DESIGN PROJECT FORM INPUT CHANGE
export const orderNameToState = (d) => {
  // console.log(d.name, d.value)
  return dispatch => {
    dispatch({
      type: 'INTERIOR_PROJECT_ORDER_FORM',
      key: d.name,
      value: d.value
    })
  }
}
// END HANDLE DESIGN PROJECT FORM INPUT CHANGE

export const handleDesignPhoneInputChange = (status, value, country) => {
  let phone = `+${country.dialCode}${value}`.replace(/\s/g, '')
  // console.log(phone)
  return dispatch => {
    dispatch({
      type: 'INTERIOR_PROJECT_ORDER_FORM',
      key: 'phone_number',
      value: phone
    })
  }
}
// END HANDLE GYPSUM CHECKUT FORM INPUT CHANGE

// CREATE DESIGN ORDER
export const createDesignOrder = (data) => {
  const endpoint = '/api/design-prices/order_create/'
  const type = 'CREATE_DESIGN_ORDER'
  return dispatch => {
    createDataAsnc(dispatch, endpoint, type, data)
  }
}// END DESIGN ORDER

// ACTIVATE FORM LOADER
export const formLoaderActivate = () => {
  return dispatch => {
    dispatch({
      type: 'ACTIVATE_FORM_LOADER'
    })
  }
}// END ACTIVATE FORM LOADER

// HANDLE design Order Button
export const designOrderButtonHandler = (order_name) => {
  // console.log(order_name)
  return dispatch => {
    dispatch({
      type: 'DESIGN_ORDER_BUTTON_HANDLER',
      value: order_name
    })
  }
}
// END HANDLE design Order Button

// CLOSE DESIGN ORDER FORM
export const closeDesignOrderForm = () => {
  return dispatch => {
    dispatch({
      type: 'CLOSE_DESIGN_ORDER_FORM'
    })
  }
}
// END CLOSE DESIGN ORDER FORM

// CLOSE DESIGN ORDER FORM SECCESS MESSAGE
export const closeSuccessMessage = () => {
  return dispatch => {
    dispatch({
      type: 'CLOSE_DESIGN_ORDER_FORM_SECCESS_MESSAGE'
    })
  }
}
// END CLOSE DESIGN ORDER FORM SECCESS MESSAGE
