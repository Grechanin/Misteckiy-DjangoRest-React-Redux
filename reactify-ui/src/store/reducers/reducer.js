import { createGypsumProductsInOrder } from '../actions/actions'

const initialState = {
  logoImage: null,
  homePage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    carousel_imgs: null,
    last_projects: null,
    showMore: false,
    loaded: false
  },
  aboutUsPage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    showMore: false,
    loaded: false
  },
  projects: {
    projectsPage: {
      tab_title: null,
      title: null,
      short_description: null,
      description: null,
      projects: null,
      showMore: false,
      loaded: false
    },
    categoryDetail: {
      tab_title: null,
      title: null,
      short_description: null,
      description: null,
      projects: null,
      showMore: false
    },
    projectDetail: {
      tab_title: null,
      name: null,
      short_description: null,
      description: null,
      categories: null,
      project_images: null,
      project_thumbnail_images: null,
      main_image_url: null,
      category_id: null,
      category_name: null,
      showMore: false
    },
    categories: {
      categories: null
    },
    projects_detail: []
  },
  galleryPage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    images: [],
    next: '/api/gallery/images/',
    previous_results: null,
    previous: null,
    showMore: false,
    loaded: false
  },
  gypsum: {
    gypsumPage: {
      tab_title: null,
      title: null,
      short_description: null,
      description: null,
      products: [],
      previous_results: null,
      next: '/api/gypsum/products-list/',
      form_loader: true,
      showMore: false
    },
    categoryDetail: {
      tab_title: null,
      title: null,
      short_description: null,
      description: null,
      products: null,
      showMore: false
    },
    gypsumDetail: {
      id: null,
      tab_title: null,
      name: null,
      price: null,
      short_description: null,
      domentions: null,
      categories: null,
      category_id: null,
      category_name: null,
      product_images: null,
      product_thumbnail_images: null,
      main_image_url: null,
      gypsum_3d_model: null,
      gypsum_products_by_catogory: null
    },
    categories: {
      categories: null
    },
    basket: {
      products_in_basket: [],
      total_order_price: null
    },
    checkoutContacts: {
      name: null,
      phone: null,
      email: null,
      comments: null,
      status: 1
    },
    order: {
      id: null
    },
    form_loader: true,
    pfone_error: false,
    products_detail: []
  },
  pricesPage: {
    tab_title: null,
    title: null,
    short_description: null,
    description: null,
    categories: null,
    categoriesDescription: null,
    showMore: false,
    pricesPageLoaded: false,
    success_form: false,
    order_form: false,
    form_loader: true,
    pfone_error: false,
    order: {
      order_name: null,
      client_name: null,
      phone_number: null,
      email: null,
      coment: null
    }
  },
  contactsPage: {
    tab_title: null,
    address_title: null,
    address: null,
    email_title: null,
    email: null,
    title_phone_for_customers: null,
    phone_for_customers: null,
    title_phone_for_partners: null,
    phone_for_partners: null
  }
}

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
        console.log('previous_results', newState.galleryPage.previous_results)
        console.log('action.data.results', action.data.results)
        newState.galleryPage = { ...newState.galleryPage,
          next: action.data.next,
          images: newState.galleryPage.images.concat(action.data.results),
          previous_results: action.data.results
        }
      }
      console.log(newState.galleryPage.images)
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
      // console.log(newState.homePage.carousel_imgs)
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
      // newState.projects.projectDetail = { ...newState.projects.projectDetail,
      //   tab_title: action.data.tab_title,
      //   name: action.data.name,
      //   short_description: action.data.short_description,
      //   description: action.data.description,
      //   project_images: action.data.project_images,
      //   project_thumbnail_images: action.data.project_thumbnail_images,
      //   main_image_url: action.data.main_image_url,
      //   category_id: action.data.category,
      //   category_name: action.data.category_name
      // }

      newState.projects.projects_detail = [ ...newState.projects.projects_detail, action.data ]
      console.log('newState.projects.projects_detail', newState.projects.projects_detail)
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
      console.log('order', newState.pricesPage.order)
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
        console.log('Order Error!')
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
        console.log('previous_results', newState.gypsum.gypsumPage.previous_results)
        console.log('action.data.results', action.data.results)
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

    case 'LOAD_PAGE_AND_PRODUCTS_BY_CATEGORY':
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        tab_title: action.data.tab_title,
        title: action.data.title,
        short_description: action.data.short_description,
        description: action.data.description,
        products: action.data.products,
        gypsum_page_title: action.data.gypsum_page_title
      }
      break

    case 'GYPSUM_CATEGORY_DETAIL_SHOW_MORE_BUTTON':
      newState.gypsum.categoryDetail = { ...newState.gypsum.categoryDetail,
        showMore: !newState.gypsum.categoryDetail.showMore
      }
      break

    case 'LOAD_PRODUCT_DETAIL':
      // newState.gypsum.gypsumDetail = { ...newState.gypsum.gypsumDetail,
      //   id: action.data.id,
      //   tab_title: action.data.tab_title,
      //   gypsum_page_title: action.data.gypsum_page_title,
      //   name: action.data.name,
      //   price: action.data.price,
      //   short_description: action.data.short_description,
      //   domentions: action.data.domentions,
      //   categories: action.data.categories,
      //   category_id: action.data.category_id,
      //   category_name: action.data.category_name,
      //   product_images: action.data.product_images,
      //   product_thumbnail_images: action.data.product_thumbnail_images,
      //   main_image_url: action.data.main_image_url,
      //   gypsum_3d_model: action.data.gypsum_3d_model,
      //   gypsum_products_by_catogory: action.data.gypsum_products_by_catogory
      // }
      newState.gypsum.products_detail = [ ...newState.gypsum.products_detail, action.data ]
      // console.log('newState.gypsum.products_detail', newState.gypsum.products_detail)
      break

    case 'LOAD_PRODUCTS_IN_BASKET':
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: action.data
      }
      updateTotalPriceInBasket(newState, newState.gypsum.basket.products_in_basket)
      break

    case 'ADD_PRODUCT_TO_BASKET':
      // console.log('action.data', action.data)
      // console.log('newState.gypsum.basket', newState.gypsum.basket)
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
      // console.log('total_order_price', total_order_price)
      break

    case 'GYPSUM_CONTACTS_ORDER_FORM':
      newState.gypsum.checkoutContacts = { ...newState.gypsum.checkoutContacts,
        [action.key]: action.value
      }
      // console.log('checkoutContacts', newState.gypsum.checkoutContacts)
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
        newState.gypsum.pfone_error = { ...newState.gypsum.pfone_error,
          pfone_error: false
        }
      } else {
        newState.gypsum.pfone_error = { ...newState.gypsum.pfone_error,
          pfone_error: true
        }
        newState.gypsum = { ...newState.gypsum,
          form_loader: true
        }
      }
      // newState.gypsum = { ...newState.gypsum,
      //   form_loader: false
      // }
      // console.log('action.id', action.data.id)
      // console.log(newState.gypsum.order.id)
      // if (newState.gypsum.order.id) {
      //   const order_id = newState.gypsum.order.id
      //   const products_in_basket = newState.gypsum.basket.products_in_basket
      //   const data = products_in_basket.map((i) => {
      // console.log('product.total_price', total_price)
      //   return {
      //     order: order_id,
      //     product: i.product,
      //     nmb: i.nmb,
      //     price_pre_item: i.price_pre_item,
      //     total_price: i.total_price
      //   }
      // })
      // console.log('createGypsumProductsInOrder', data)
      // createGypsumProductsInOrder(data)
      // }
      break

    case 'CREATE_GYPSUM_PRODUCTS_IN_ORDER':
      newState.gypsum.order = { ...newState.gypsum.order,
        id: null
      }
      newState.gypsum.basket = { ...newState.gypsum.basket,
        products_in_basket: []
      }
      newState.gypsum = { ...newState.gypsum,
        form_loader: true
      }
      // console.log('CREATE_GYPSUM_PRODUCTS_IN_ORDER products', newState.gypsum.basket.products_in_basket)
      break

    default:
      break
  }

  return newState
}

export default reducer
