import React from 'react';

const Modal = ({ closeModal, showOffer }) => {
  return (
    <article className="modal-background" onClick={closeModal}>
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>x</button>
        <div className="modal">
          <p>click the button below to accept our amazing offer!</p>
          <button onClick={showOffer}>Accept Offer</button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
