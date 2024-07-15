import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);

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
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', closeModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', closeModal);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        {children}
      </div>
    </div>
  );
};

export default Modal;
