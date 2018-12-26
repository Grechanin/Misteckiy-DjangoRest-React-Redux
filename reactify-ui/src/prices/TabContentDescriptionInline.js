import React, { Component } from 'react'
import OrderForm from './OrderForm'
import SuccessMessage from './SuccessMessage'



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
    // event.preventDefault()
    const order_name = this.props.instance.title
    const order_form = true
    this.orderFormCallback(order_form, order_name)
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
    const { instance } = this.props
    const { order_form, order_name, success_form } = this.state
    
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

        {order_form ?          
            
                <OrderForm  order_name={order_name} 
                            order_form={order_form} 
                            orderFormCallback={this.orderFormCallback}
                            successMessageHandler={this.successMessageHandler} />                   
                  
            : ''}

        {success_form ?          
            
                <SuccessMessage success_form={success_form}
                                closeSuccessMessage={this.closeSuccessMessage} />                   
                  
            : ''}
      </div>
    )
  }
}

export default TabContentDescriptionInline
