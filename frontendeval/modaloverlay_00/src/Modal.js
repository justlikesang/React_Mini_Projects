import React from 'react';

const Modal = ({ closeModal, acceptOffer }) => {
  return (
    <div className="modal-background" onClick={closeModal}>
      <article className="modal-container">
        <button className="close-btn" onClick={closeModal}>
          x
        </button>
        <p>click the button below to accept our amazing offer!</p>
        <button className="btn" onClick={acceptOffer}>Accept Offer</button>
      </article>
    </div>
  );
};

export default Modal;
