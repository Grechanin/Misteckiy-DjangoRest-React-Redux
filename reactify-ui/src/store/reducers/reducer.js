import { initialState } from './initalState.js'

const updateTotalPriceInBasket = (newState, updatedProductsList) => {
  let total_order_price = 0
  updatedProductsList.forEach((i) => {
    total_order_price += parseInt(i.total_price)
  })
  newState.gypsum.basket = { ...newState.gypsum.basket,
    total_order_price: total_order_price
  }
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'LOAD_BRAND_IMAGE':
      newState.header = { ...newState.header,
        brandImageUrl: action.data.favicon_url
      }
      break

    case 'LOAD_ABOUT_US':
      newState.aboutUsPage = { ...newState.aboutUsPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description,
        loaded: true
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
      if (newState.galleryPage.next && newState.galleryPage.previous_results !== action.data.results) {
        newState.galleryPage = { ...newState.galleryPage,
          next: action.data.next,
          images: newState.galleryPage.images.concat(action.data.results),
          previous_results: action.data.results
        }
      }
      break

    case 'GALLERY_SHOW_MORE_BUTTON':
      newState.galleryPage = { ...newState.galleryPage,
        showMore: !newState.galleryPage.showMore
      }
      break

    case 'GALLERY_PAGE_LOADED':
      newState.galleryPage = { ...newState.galleryPage,
        loaded: true
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
      break

    case 'HOME_SHOW_MORE_BUTTON':
      newState.homePage = { ...newState.homePage,
        showMore: !newState.homePage.showMore
      }
      break

    case 'HOME_PAGE_LOADED':
      newState.homePage = { ...newState.homePage,
        loaded: true
      }
      break

    case 'LOAD_PROJECTS_PAGE':
      newState.projects.projectsPage = { ...newState.projects.projectsPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description
      }
      break

    case 'LOAD_PROJECTS':
      newState.projects.projectsPage = { ...newState.projects.projectsPage,
        projects: action.data
      }
      break

    case 'LOAD_CATEGORIES':
      newState.projects.categories = { ...newState.projects.categories,
        categories: action.data
      }
      break

    case 'PROJECTS_SHOW_MORE_BUTTON':
      newState.projects.projectsPage = { ...newState.projects.projectsPage,
        showMore: !newState.projects.projectsPage.showMore
      }
      break

    case 'PROJECTS_PAGE_LOADED':
      newState.projects.projectsPage = { ...newState.projects.projectsPage,
        loaded: true
      }
      break

    case 'LOAD_PAGE_AND_PROJECTS_BY_CATEGORY':
      newState.projects.categoryDetail = { ...newState.projects.categoryDetail,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description,
        projects: action.data.projects
      }
      break

    case 'CATEGORY_DETAIL_SHOW_MORE_BUTTON':
      newState.projects.categoryDetail = { ...newState.projects.categoryDetail,
        showMore: !newState.projects.categoryDetail.showMore
      }
      break

    case 'LOAD_PROJECT_DETAIL':
      newState.projects.projects_detail = [ ...newState.projects.projects_detail, action.data ]
      break

    case 'PROJECT_DETAIL_SHOW_MORE_BUTTON':
      newState.projects.projectDetail = { ...newState.projects.projectDetail,
        showMore: !newState.projects.projectDetail.showMore
      }
      break

    case 'LOAD_PRICES_PAGE_DESCRIPTION':
      newState.pricesPage = { ...newState.pricesPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description,
        loaded: true
      }
      break

    case 'LOAD_DESIGN_PRICES_CATEGORIES':
      newState.pricesPage = { ...newState.pricesPage,
        categories: action.data
      }
      break

    case 'LOAD_DESIGN_PRICES_CATEGORIES_DESCRIPTION':
      newState.pricesPage = { ...newState.pricesPage,
        categoriesDescription: action.data
      }
      break

    case 'DESIGN_PRICES_SHOW_MORE_BUTTON':
      newState.pricesPage = { ...newState.pricesPage,
        showMore: !newState.pricesPage.showMore
      }
      break

    case 'INTERIOR_PROJECT_ORDER_FORM':
      newState.pricesPage.order = { ...newState.pricesPage.order,
        [action.key]: action.value
      }
      break

    case 'CREATE_DESIGN_ORDER':
      if (JSON.stringify(action.data) === JSON.stringify(newState.pricesPage.order)) {
        newState.pricesPage = { ...newState.pricesPage,
          success_form: newState.pricesPage.order.order_name,
          order_form: false,
          pfone_error: false,
          form_loader: true
        }
      } else {
        newState.pricesPage = { ...newState.pricesPage,
          form_loader: true,
          pfone_error: true
        }
      }
      break

    case 'ACTIVATE_FORM_LOADER':
      newState.pricesPage = { ...newState.pricesPage,
        form_loader: false
      }
      break

    case 'CLOSE_DESIGN_ORDER_FORM_SECCESS_MESSAGE':
      newState.pricesPage = { ...newState.pricesPage,
        success_form: false
      }
      break

    case 'DESIGN_ORDER_BUTTON_HANDLER':
      newState.pricesPage = { ...newState.pricesPage,
        order_form: action.value
      }
      break

    case 'CLOSE_DESIGN_ORDER_FORM':
      newState.pricesPage = { ...newState.pricesPage,
        order_form: false
      }
      break

    case 'DESIGN_ORDER_ERROR':
      newState.pricesPage = { ...newState.pricesPage,
        success_form: false
      }
      break

    case 'LOAD_CONTACTS':
      newState.contactsPage = { ...newState.contactsPage,
        tab_title: action.data.tab_title,
        address_title: action.data.address_title,
        address: action.data.address,
        email_title: action.data.email_title,
        email: action.data.email,
        title_phone_for_customers: action.data.title_phone_for_customers,
        phone_for_customers: action.data.phone_for_customers,
        title_phone_for_partners: action.data.title_phone_for_partners,
        phone_for_partners: action.data.phone_for_partners
      }
      break

    case 'LOAD_GYPSUM_PAGE':
      newState.gypsum.gypsumPage = { ...newState.gypsum.gypsumPage,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description
      }
      break

    case 'LOAD_GYPSUM_PRODUCTS':
      if (newState.gypsum.gypsumPage.next && newState.gypsum.gypsumPage.previous_results !== action.data.results) {
        newState.gypsum.gypsumPage = { ...newState.gypsum.gypsumPage,
          next: action.data.next,
          products: newState.gypsum.gypsumPage.products.concat(action.data.results),
          previous_results: action.data.results,
          form_loader: true

        }
      }
      break

    case 'ACTIVATE_GYPSUM_LOAD_MORE':
      newState.gypsum.gypsumPage = { ...newState.gypsum.gypsumPage,
        form_loader: false
      }
      break

    case 'LOAD_GYPSUM_CATEGORIES':
      newState.gypsum.categories = { ...newState.gypsum.categories,
        categories: action.data
      }
      break

    case 'GYPSUM_PAGE_SHOW_MORE_BUTTON':
      newState.gypsum.gypsumPage = { ...newState.gypsum.gypsumPage,
        showMore: !newState.gypsum.gypsumPage.showMore
      }
      break

    case 'LOAD_GYPSUM_PAGE_BY_CATEGORY':
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        [action.data.id]: {
          tab_title: action.data.tab_title,
          title: action.data.title,
          short_description: action.data.short_description,
          description: action.data.description,
          gypsum_page_title: action.data.gypsum_page_title
        }
      }
      break

    case 'LOAD_PRODUCTS_BY_CATEGORY':
      let category_id = action.data.results[0].category
      if (!newState.gypsum.categoryDetail[category_id].products) {
        newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
          loaded_more: true,
          [category_id]: { ...newState.gypsum.categoryDetail[category_id],
            products: action.data.results,
            next: action.data.next
          }
        }
      }
      break

    case 'NEXT_LOAD_PRODUCTS_BY_CATEGORY':
      let cat_id = action.data.results[0].category
      newState.gypsum.categoryDetail[cat_id].products = [ ...newState.gypsum.categoryDetail[cat_id].products,
        ...action.data.results
      ]
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        loaded_more: true,
        [cat_id]: { ...newState.gypsum.categoryDetail[cat_id],
          next: action.data.next
        }
      }
      break

    case 'CATEGORY_ACTIVATE_GYPSUM_LOAD_MORE':
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        loaded_more: false
      }
      console.log('newState.gypsum.categoryDetail', newState.gypsum.categoryDetail)
      break

    case 'GYPSUM_CATEGORY_DETAIL_SHOW_MORE_BUTTON':
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        showMore: !newState.gypsum.categoryDetail.showMore
      }
      break

    case 'LOAD_PRODUCT_DETAIL':
      newState.gypsum.products_detail = [ ...newState.gypsum.products_detail, action.data ]
      break

    case 'LOAD_PRODUCTS_IN_BASKET':
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: action.data
      }
      updateTotalPriceInBasket(newState, newState.gypsum.basket.products_in_basket)
      break

    case 'ADD_PRODUCT_TO_BASKET':
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: [...newState.gypsum.basket.products_in_basket, action.data]
      }
      updateTotalPriceInBasket(newState, newState.gypsum.basket.products_in_basket)

      break

    case 'UPDATE_PRODUCT_IN_BASKET':
      const updatedProducts = newState.gypsum.basket.products_in_basket.map((el, i) => {
        if (el.id === action.data.id) {
          const updatedProduct = { ...el,
            id: action.data.id,
            nmb: action.data.nmb,
            total_price: action.data.total_price
          }
          return updatedProduct
        } else return el
      })
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: updatedProducts
      }

      updateTotalPriceInBasket(newState, updatedProducts)
      break

    case 'DELETE_PRODUCTS_IN_BASKET':
      const updatedProductsList = newState.gypsum.basket.products_in_basket.filter(el => el.id !== action.data)
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: updatedProductsList
      }

      updateTotalPriceInBasket(newState, updatedProductsList)
      break

    case 'GYPSUM_CONTACTS_ORDER_FORM':
      newState.gypsum.checkoutContacts = { ...newState.gypsum.checkoutContacts,
        [action.key]: action.value
      }
      break

    case 'ACTIVATE_CHECKOUT_FORM_LOADER':
      newState.gypsum = { ...newState.gypsum,
        form_loader: false
      }
      break

    case 'CREATE_GYPSUM_ORDER':
      if (action.data.id) {
        newState.gypsum.order = { ...newState.gypsum.order,
          id: action.data.id
        }
        newState.gypsum = { ...newState.gypsum,
          pfone_error: false
        }
      } else {
        console.log('newState.gypsum.pfone_error', action.data.id)
        newState.gypsum.pfone_error = { ...newState.gypsum.pfone_error,
          pfone_error: true
        }
        newState.gypsum = { ...newState.gypsum,
          form_loader: true
        }
      }
      break

    case 'CREATE_GYPSUM_PRODUCTS_IN_ORDER':
      newState.gypsum.order = { ...newState.gypsum.order,
        id: null
      }
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: []
      }
      newState.gypsum = { ...newState.gypsum,
        order_success: true,
        form_loader: true
      }
      break

    case 'DEACTIVATE_GYPSUM_SUCCESS_MASSEGE':
      newState.gypsum = { ...newState.gypsum,
        order_success: false
      }
      break

    default:
      break
  }

  return newState
}

export default reducer
