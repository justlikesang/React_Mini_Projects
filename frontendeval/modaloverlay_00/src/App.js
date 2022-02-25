import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptOffer = () => {
    setIsOfferAccepted(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal} acceptOffer={acceptOffer} />
      )}
      {isOfferAccepted ? (
        <div className="section-offer">Offer Accepted</div>
      ) : (
        <section className="section">
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Show Offer
          </button>
        </section>
      )}
    </>
  );
}

export default App;
