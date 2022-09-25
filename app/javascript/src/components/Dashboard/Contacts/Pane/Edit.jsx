import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const EditContactPane = ({ showPane, setShowPane, contact }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form isEdit contact={contact} onClose={onClose} />
    </Pane>
  );
};

export default EditContactPane;
