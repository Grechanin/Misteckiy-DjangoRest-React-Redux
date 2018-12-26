import 'whatwg-fetch'

// ABOUT US PAGE
export const loadAboutUsPageDataAsnc = (dispatch) => {
  let endpoint = '/api/about_us/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_ABOUT_US',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadAboutUsPageData = () => {
  return dispatch => {
  	loadAboutUsPageDataAsnc(dispatch)
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
export const loadGalleryPageDataAsnc = (dispatch) => {
  let endpoint = '/api/gallery/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_GALLERY',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadGalleryPageData = () => {
  return dispatch => {
  	loadGalleryPageDataAsnc(dispatch)
  }
}// END GALLERY PAGE DESCRIPTION

// GALLERY PAGE IMAGES
export const loadGalleryImagesAsnc = (dispatch) => {
  let endpoint = '/api/gallery/images/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_GALLERY_IMAGES',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadGalleryImages = () => {
  return dispatch => {
  	loadGalleryImagesAsnc(dispatch)
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

// HOME PAGE PAGE DESCRIPTION
export const loadHomePageDescriptionAsnc = (dispatch) => {
  let endpoint = '/api/home/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_HOME_PAGE',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadHomePageDescription = () => {
  return dispatch => {
  	loadHomePageDescriptionAsnc(dispatch)
  }
}// END HOME PAGE DESCRIPTION

// HOME PAGE LAST PROJECTS
export const loadLastProjectsAsnc = (dispatch) => {
  let endpoint = '/api/home/last-projects/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_HOME_PAGE_LAST_PROJECTS',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadLastProjects = () => {
  return dispatch => {
  	loadLastProjectsAsnc(dispatch)
  }
}// END HOME PAGE LAST PROJECTS

// HOME PAGE LAST PROJECTS
export const loadCarouselAsnc = (dispatch) => {
  let endpoint = '/api/home/carousel/'

  let lookupOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch(endpoint, lookupOptions)
    .then((responce) => {
      return responce.json()
    }).then((responceData) => {
    	dispatch({ 	type: 'LOAD_CAROUSEL',
      			data: responceData
      })
    }).catch((error) => {
      console.log('error', error)
    })
}

export const loadCarousel = () => {
  return dispatch => {
  	loadCarouselAsnc(dispatch)
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
