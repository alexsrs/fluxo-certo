import React from 'react';
import ContactForm, { type ContactFormData } from '../ContactForm/ContactForm';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: ContactFormData) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm onClose={onClose} onSubmit={onSubmit} />
    </Modal>
  );
};
