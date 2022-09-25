import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, handleDelete, deleting }) => (
  <Alert
    isOpen
    isSubmitting={deleting}
    message={`Are you sure you want to continue deleting the contact? This cannot be undone.`}
    title="Delete the Contact?"
    onClose={onClose}
    onSubmit={handleDelete}
  />
);

export default DeleteAlert;
