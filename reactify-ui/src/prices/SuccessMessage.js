import React, { Component } from 'react'
import { Alert, Button, Modal, ModalBody } from 'reactstrap'

class SuccessMessage extends Component {
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
