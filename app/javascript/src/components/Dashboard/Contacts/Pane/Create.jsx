import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FROM_INITIAL_VALUES } from "../constants";

const NewContactPane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Contact
        </Typography>
      </Pane.Header>
      <Form
        contact={CONTACTS_FROM_INITIAL_VALUES}
        isEdit={false}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewContactPane;
