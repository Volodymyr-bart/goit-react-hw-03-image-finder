import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    // console.log('Modal mount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    // console.log('Modal anmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay
        onClick={() => {
          this.props.onClose();
        }}
      >
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot
    );
  }
}
