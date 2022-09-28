import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setShowDeleteAlert }) => {
  const handleDelete = () => {
    setShowDeleteAlert(false);
    Toastr.success("Contact is deleted successfully.");
  };
  return (
    <Alert
      isOpen
      message="Are you sure you want to continue deleting this contact? This cannot be undone."
      title="Delete the Contact?"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
