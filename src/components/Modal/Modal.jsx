// import { render } from "@testing-library/react";
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    console.log('Modal mount');
  }
  componentWillUnmount() {
    console.log('Modal anmount');
  }
  render() {
    return createPortal(
      <Overlay>
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot
    );
  }
}
