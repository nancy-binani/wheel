import React, { useEffect, useState } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import List from "./List";
import NewNotePane from "./Pane/Create";
import SideMenu from "./SideMenu";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [notes, setNotes] = useState(NOTES);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    setNotes(notes);
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu />
      <Container>
        <Header
          menuBarToggle={() => {}}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <List fetchNotes={fetchNotes} notes={notes} />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
      </Container>
    </>
  );
};

export default Notes;
