import React from "react";

import { Pane as NeetoUIPane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const Pane = ({ fetchNotes, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <NeetoUIPane isOpen={showPane} onClose={onClose}>
      <NeetoUIPane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </NeetoUIPane.Header>
      <Form
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </NeetoUIPane>
  );
};

export default Pane;
