import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactsColumnData } from "./utils";

import { CONTACT_DETAILS } from "../constants";

const Table = () => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      rowSelection
      columnData={buildContactsColumnData()}
      rowData={CONTACT_DETAILS}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
  </div>
);

export default Table;
