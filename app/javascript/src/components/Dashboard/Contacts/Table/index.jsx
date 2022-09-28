import React from "react";

import { Table as NeetoUITable, Pagination } from "neetoui";

import { buildContactsColumnData } from "./utils";

import { CONTACT_DETAILS } from "../constants";

const Table = ({ handleDelete }) => (
  <>
    <NeetoUITable
      allowRowClick
      rowSelection
      columnData={buildContactsColumnData(handleDelete)}
      rowData={CONTACT_DETAILS}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
    <div className="flex w-full flex-row justify-end">
      <Pagination count={50} navigate={() => {}} pageNo={3} pageSize={10} />
    </div>
  </>
);

export default Table;
