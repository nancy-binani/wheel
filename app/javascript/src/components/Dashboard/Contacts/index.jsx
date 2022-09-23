import React, { useEffect, useState } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import SideMenu from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
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
          actionBlock={<Button icon="ri-add-line" label="Add Contact" />}
          menuBarToggle={() => {}}
          title="All Contacts"
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
