import React from 'react';
import './Modal.scss';
import CloseIcon from '@mui/icons-material/Close';


interface ModalProps {
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  cancelButtonLabel?: string,
  submitButtonLabel?: string,
  onSubmitAction?: (e: React.FormEvent) => void;
  onCancelAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalTitle ,isOpen, onClose, children, cancelButtonLabel = "Cancel", submitButtonLabel, onSubmitAction, onCancelAction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-content__header" >
          <div className="modal-content__header__title" >{modalTitle}</div>
          <div className="modal-content__header__close-icon" onClick={onClose} ><CloseIcon /></div>
        </div>

        <div className="modal-content__body" >
          {children}
        </div>

        <div className="modal-content__footer" >
          <button className="modal-content__footer__cancel" onClick={onCancelAction} >
            {cancelButtonLabel}
          </button>

          <button type="submit" className="modal-content__footer__create" onClick={onSubmitAction} >
            {submitButtonLabel}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;