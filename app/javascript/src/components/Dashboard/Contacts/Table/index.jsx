import React from "react";

import { Table as NeetoUITable, Pagination } from "neetoui";

import { buildContactsColumnData } from "./utils";

import { CONTACT_DETAILS } from "../constants";

const Table = () => (
  <>
    <NeetoUITable
      allowRowClick
      rowSelection
      columnData={buildContactsColumnData()}
      rowData={CONTACT_DETAILS}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
    <Pagination count={50} navigate={() => {}} pageNo={3} pageSize={10} />
  </>
);

export default Table;
