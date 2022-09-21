import React, { useEffect, useState } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
<<<<<<< HEAD
import List from "./List";
import NewNotePane from "./Pane/Create";
import SideMenu from "./SideMenu";
=======
import Note from "./Note";
import NewNotePane from "./Pane/Create";
>>>>>>> f728f71 (Fixed changes according to PR reviews)

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
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
        <List notes={notes} />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
