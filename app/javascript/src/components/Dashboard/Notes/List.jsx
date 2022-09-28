import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Button, Avatar, Tooltip } from "neetoui";

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
        <div className="flex items-center justify-between">
          <Button
            className="mx-2 mt-3"
            label="Getting Started"
            style="secondary"
          />
          <div className="flex justify-between">
            <Clock className="mx-1 mt-3" />
            <Tooltip
              content={formatDateAndTime(note.createdAt)}
              followCursor="horizontal"
              position="bottom"
            >
              <Typography className="mx-1 mt-4" style="body3">
                Created {calculateCreatedAgo(note.createdAt)}
              </Typography>
            </Tooltip>
            <Avatar
              className="mx-1 mt-3"
              size="small"
              user={{
                imageUrl: "https://i.pravatar.cc/300",
              }}
            />
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  ));
};

export default List;
