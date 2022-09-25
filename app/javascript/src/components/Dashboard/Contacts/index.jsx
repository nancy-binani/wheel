import React, { useEffect, useState } from "react";

import { Button, PageLoader, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import SideMenu from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }
  const handleDelete = () => {
    Toastr.success("Contact is deleted successfully.");
    setDeleting(true);
  };

  return (
    <>
      <SideMenu />
      <Container>
        <Header
          title="Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table handleDelete={handleDelete} />
        <NewContactPane
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            deleting={deleting}
            handleDelete={handleDelete}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
