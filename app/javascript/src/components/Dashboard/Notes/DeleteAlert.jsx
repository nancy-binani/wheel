import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ refetch, onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    Toastr.success("Note deleted");
    setDeleting(true);
    onClose();
    refetch();
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete this Note?"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
