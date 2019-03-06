import React from 'react';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div>
    <button onClick={closeModalFn} children='zamknij modal' />
    <Form />
  </div>
);

export default Modal;