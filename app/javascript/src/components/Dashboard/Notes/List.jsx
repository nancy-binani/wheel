import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Button, Avatar } from "neetoui";

import DeleteAlert from "./DeleteAlert";
import { calculateCreatedAgo, formatDateAndTime } from "./utils";

const { Menu, MenuItem } = Dropdown;

const List = ({ notes, fetchNotes }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };
  return notes.map(note => (
    <React.Fragment key={note.id}>
      <div className="border-slate-300  shadow-slate-300 box-border h-40 w-full items-start rounded-sm border-2 bg-white p-4 shadow-md">
        <div className="flex justify-between text-xl font-bold">
          <Typography style="h5">{note.title}</Typography>
          <Dropdown buttonStyle="text" icon={MenuVertical}>
            <Menu>
              <MenuItem.Button>Edit</MenuItem.Button>
              <MenuItem.Button style="danger" onClick={handleDelete}>
                Delete
              </MenuItem.Button>
            </Menu>
          </Dropdown>
          {showDeleteAlert && (
            <DeleteAlert
              refetch={fetchNotes}
              title={note.title}
              onClose={() => setShowDeleteAlert(false)}
            />
          )}
        </div>
        <Typography className="mb-3 text-gray-500" style="body2">
          {note.description}
        </Typography>
        <hr />
        <div className="mt-4 flex flex-row justify-between text-gray-500">
          <Button
            className="text-gray-500"
            label={note.executionStatus}
            style="secondary"
          />
          <div className="flex flex-row gap-2">
            <Clock />
            <Typography style="body2">
              {`${note.status} ${calculateCreatedAgo(note.createdAt)}`}
            </Typography>
            <Avatar
              size="small"
              user={{
                imageUrl: "https://i.pravatar.cc/300",
                name: "Sam",
              }}
            />
          </div>
        </div>
        {note.status === "Created" && (
          <Button
            className="absolute right-10"
            label={formatDateAndTime(note.createdAt)}
          />
        )}
      </div>
      <br />
    </React.Fragment>
  ));
};

export default List;
