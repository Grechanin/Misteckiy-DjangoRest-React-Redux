import React, { Component } from 'react'
// import 'whatwg-fetch'
// import cookie from 'react-cookies'
import { Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

class OrderForm extends Component {
  constructor (props) {
    super(props)
    // this.createOrder = this.createOrder.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
    this.closeOrderFormHandler = this.closeOrderFormHandler.bind(this)
    // this.clearForm = this.clearForm.bind(this)
    //   this.state = {
    //     order_name: null,
    //     client_name: null,
    //     phone_number: null,
    //     email: null,
    //     coment: null
    //   }
    // }

    // handleInputChange (event) {
    //   event.preventDefault()
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   })
    //   // console.log(event.target.name, event.target.value)
    // }

    // createOrder (data) {
    //   const endpoint = '/api/design-prices/order_create/'
    //   let csrfToken = cookie.load('csrftoken')
    //   console.log('csrfToken', csrfToken)
    //   let thisComp = this
    //   if (csrfToken !== undefined) {
    //     let lookupOptions = {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': csrfToken
    //       },
    //       body: JSON.stringify(data),
    //       credentials: 'include'
    //     }

  //     fetch(endpoint, lookupOptions)
  //       .then((responce) => {
  //         return responce.json()
  //       }).then((responceData) => {
  //         console.log(responceData)
  //         console.log(thisComp.state)
  //         if (JSON.stringify(responceData) === JSON.stringify(thisComp.state)) {
  //           console.log('Success')
  //           thisComp.props.successMessageHandler()
  //         } else { console.log('Fail') }
  //       }).catch((error) => {
  //         console.log('error qwer', error)
  //       })
  //   }
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submit')
    let data = this.props.order
    this.props.formLoaderActivate()
    this.props.createDesignOrder(data)
  }

  // clearForm (event) {
  //   if (event) {
  //     event.preventDefault()
  //   }
  //   this.setState({
  //     draft: false,
  //     title: null,
  //     slug: null,
  //     content: null,
  //     publish: moment().format('YYYY-MM-DD')
  //   })
  //   this.orderForm.reset()
  // }

  closeOrderFormHandler (event) {
    event.preventDefault()
    // console.log('closeHandler')
    const order_form = false
    const order_name = null
    this.props.orderFormCallback(order_form, order_name)
  }

  // const i= document.getElementById('' + this.props.order_name).on('hidden.bs.modal',this.closeOrderFormHandler)

  componentDidMount () {
    const { order_name } = this.props
    let d = { name: 'order_name', value: order_name }
    this.props.orderNameToState(d)
    this.orderNameInputRef.focus()
  }

  render () {
    const { order_form,
      order_name,
      client_name,
      phone_number,
      email,
      coment,
      pfone_error } = this.props

    return (
      <Modal isOpen={order_form} toggle={this.props.closeDesignOrderForm} >
        <ModalBody style={{ padding: 0 }}>

          <div className='' style={{ marginBottom: '-20px' }}>
            <div className='form-container form-group fancybox-content' >
              <button aria-label='Close' data-dismiss='modal' className='fancybox-close-small' title='Close' onClick={this.props.closeDesignOrderForm} >
                <svg viewBox='0 0 32 32'><path d='M10,10 L22,22 M22,10 L10,22' /></svg>
              </button>

              <form className='my-ajax-form' onSubmit={this.handleSubmit} ref={(el) => { this.orderForm = el }}>
                <p>
                  <label for='id_order_name'>Послуга:</label>
                  <input type='text'
                    name='order_name'
                    maxlength='32'
                    required='required'
                    id='id_order_name'
                    value={order_name}
                    onChange={this.props.interiorProjecthandleInputChange} />
                </p>
                <p>
                  <label for='id_client_name'>Ім'я:</label>
                  <input type='text'
                    name='client_name'
                    maxlength='128'
                    required='required'
                    id='id_client_name'
                    defaultValue={client_name || ''}
                    onChange={this.props.interiorProjecthandleInputChange}
                    ref={(el) => { this.orderNameInputRef = el }} />
                </p>
                <p>

                  <label for='id_phone_number'>Номер телефону:</label>

                  <IntlTelInput
                    preferredCountries={['ua']}
                    css={['intl-tel-input', 'form-control']}
                    onPhoneNumberChange={this.props.handleDesignPhoneInputChange}
                    defaultValue={phone_number || ''}
                    separateDialCode placeholder='671234567'
                    fieldId='id_phone_number'
                    telInputProps={{ required: true }}
                  />
                  {pfone_error ? <span>Введіть вірний номер</span> : ''}

                </p>
                <p>
                  <label for='id_email'>Email:</label>
                  <input type='email'
                    name='email'
                    maxlength='128'
                    id='id_email'
                    defaultValue={email || ''}
                    onChange={this.props.interiorProjecthandleInputChange} />
                </p>
                <p>
                  <label for='id_coment'>Коментар:</label>
                  <textarea name='coment'
                    cols='40'
                    rows='10'
                    id='id_coment'
                    defaultValue={coment || ''}
                    onChange={this.props.interiorProjecthandleInputChange} />
                </p>
                <span className='text-danger phone-error' /><br />
                <span className='text-danger email-error' />
                <div className='text-right'>
                  <input className='button button_white-grey' type='submit' value='Відпрвавити' />
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    // order_name: state.pricesPage.order.order_name,
    order: state.pricesPage.order,
    client_name: state.pricesPage.order.client_name,
    phone_number: state.pricesPage.order.phone_number,
    email: state.pricesPage.order.email,
    coment: state.pricesPage.order.coment,
    pfone_error: state.pricesPage.pfone_error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDesignOrder: (data) => dispatch(actionCreator.createDesignOrder(data)),
    interiorProjecthandleInputChange: (e) => dispatch(actionCreator.interiorProjecthandleInputChange(e)),
    handleDesignPhoneInputChange: (status, value, country) => dispatch(actionCreator.handleDesignPhoneInputChange(status, value, country)),
    orderNameToState: (d) => dispatch(actionCreator.orderNameToState(d)),
    closeDesignOrderForm: () => dispatch(actionCreator.closeDesignOrderForm()),
    formLoaderActivate: () => dispatch(actionCreator.formLoaderActivate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

// export default OrderForm

// <IntlTelInput
//                    preferredCountries={['ua']}
//                    css={['intl-tel-input', 'form-control']}
//                    utilsScript={'libphonenumber.js'}

//                    name='phone_number'
//                    required='required'
//                    id='id_phone_number'
//                    autocomplete='off'
//                    placeholder='+38 050 358 76 75'
//                    onChange={this.handleInputChange}
//                  />

// <ReactPhoneInput defaultCountry={'ua'}
//                  onChange={this.handleInputChange}
//                  inputExtraProps={{
//                    name: 'phone_number',
//                    required: true,
//                    id: 'id_phone_number',
//                    autocomplete: 'off'
//                  }} />
