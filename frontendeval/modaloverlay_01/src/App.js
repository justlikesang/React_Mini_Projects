import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showOffer = () => {
    setIsOfferAccepted(true);
  };

  return (
    <section className="section">
      {isModalOpen && <Modal closeModal={closeModal} showOffer={showOffer} />}
      {isOfferAccepted ? (
        <div>
          <h1>Offer accepted</h1>
        </div>
      ) : (
        <>
          <article className="home-container">
            <button onClick={() => setIsModalOpen(true)}>Show offer</button>
          </article>
        </>
      )}
    </section>
  );
}

export default App;
