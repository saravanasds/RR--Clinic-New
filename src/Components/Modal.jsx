import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);

  // Function to close modal if clicked outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.history.pushState(null, null, window.location.href);
      window.addEventListener('popstate', closeModal);
    }

    // Cleanup event listeners when modal closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', closeModal);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;  // Early return if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[5000]">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        {children}
      </div>
    </div>
  );
};

export default Modal;
