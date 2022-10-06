import { Component } from 'react';
import { ModalWindow } from './Modal/Modal';
export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <h1>This is modal</h1>
            {/* <img src="" alt="" /> */}
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </ModalWindow>
        )}
      </>
    );
  }
}
