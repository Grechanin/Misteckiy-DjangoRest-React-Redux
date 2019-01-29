import React, { Component } from 'react'
import { Alert, Button, Modal, ModalBody } from 'reactstrap'

class SuccessMessage extends Component {
  componentDidMount () {
    setTimeout(() => {
      console.log('before timeout')
      this.props.closeSuccessMessage()
      console.log('after timeout')
    }, 6000)
  }
  render () {
    const { success_form, closeSuccessMessage } = this.props

    return (
      <Modal isOpen={success_form} toggle={closeSuccessMessage} centered >
        <ModalBody style={{ padding: 0 }}>
          <Alert color='success'>
            Успіх! Ваша заявка прийнята. Вам невдовзі зателефонують.
          </Alert>
          <Button color='success' size='lg' className='float-right' onClick={closeSuccessMessage} >Ок</Button>
        </ModalBody>
      </Modal>

    )
  }
}

export default SuccessMessage
