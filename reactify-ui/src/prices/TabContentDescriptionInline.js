import React, { Component } from 'react'
import OrderForm from './OrderForm'
import SuccessMessage from './SuccessMessage'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'
import Loader from 'react-loader'



class TabContentDescriptionInline extends Component {
  constructor (props) {
    super(props)
    this.orderButtonHandler = this.orderButtonHandler.bind(this)
    this.orderFormCallback = this.orderFormCallback.bind(this)
    this.closeOrderForm = this.closeOrderForm.bind(this)
    this.successMessageHandler = this.successMessageHandler.bind(this)
    this.closeSuccessMessage = this.closeSuccessMessage.bind(this)
  }

  state = {
      order_form: false,
      order_name: null,
      success_form: false
    }

  orderFormCallback(order_form, order_name){
      this.setState({
        order_form: order_form,
        order_name:order_name
      })
    }

  orderButtonHandler (event) {
    event.preventDefault()
    const order_name = this.props.instance.title
    // const order_form = true
    this.props.designOrderButtonHandler(order_name)
  }

  closeOrderForm(){
    const order_name = null
    const order_form = null
    this.orderFormCallback(order_form, order_name)
  }

  successMessageHandler(){
      this.setState({
        order_form: false,
        order_name:null,
        success_form: true
      })
      setTimeout(()=>{
              this.setState({success_form: false})
            }
            ,6000
      );
    }

  closeSuccessMessage(order_form, order_name){
      this.setState({
        success_form: false
      })
    }


  // componentDidMount () {
  //   const order_form = true
  //   this.props.orderFormCallback(order_form)
  // }

  render () {
    const { order_form, success_form, instance } = this.props
    const order_name = this.props.instance.title
    
    return (
      <div className='col-md-6'>
        <h3>{ instance.title }</h3>
        <p dangerouslySetInnerHTML={{ __html: instance.description }} />
        

        <button type="button" 
                className="btn btn-primary btn-order" 
                data-toggle="modal" 
                data-target={'#'+order_name}
                onClick={this.orderButtonHandler}
                >
              Замовити
        </button>

        {order_form === order_name ?          
              <Loader loaded={this.props.form_loader} color="#e7e0e0" >
                <OrderForm  order_name={order_name}
                            order_form={order_form} 
                            orderFormCallback={this.orderFormCallback}
                            successMessageHandler={this.successMessageHandler} />                   
              </Loader>       
            : ''}

        {success_form === order_name ?          
              
                <SuccessMessage success_form={success_form}
                                closeSuccessMessage={this.props.closeSuccessMessage} />                   
              
            : ''}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // order_name: state.pricesPage.order.order_name,
    success_form: state.pricesPage.success_form,
    form_loader: state.pricesPage.form_loader,
    order_form: state.pricesPage.order_form,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDesignOrder: (data) => dispatch(actionCreator.createDesignOrder(data)),
    interiorProjecthandleInputChange: (e) => dispatch(actionCreator.interiorProjecthandleInputChange(e)),
    handleDesignPhoneInputChange: (status, value, country) => dispatch(actionCreator.handleDesignPhoneInputChange(status, value, country)),
    orderNameToState: (d) => dispatch(actionCreator.orderNameToState(d)),
    designOrderButtonHandler: (order_name) => dispatch(actionCreator.designOrderButtonHandler(order_name)),
    closeSuccessMessage: () => dispatch(actionCreator.closeSuccessMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentDescriptionInline)
