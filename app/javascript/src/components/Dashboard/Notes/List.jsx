import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Button, Avatar } from "neetoui";

import { LIST_ITEMS as listItems } from "./constants";
import { calculateCreatedAgo, formatDateAndTime } from "./utils";

const { Menu, MenuItem } = Dropdown;
const List = ({ notes }) => (
  <>
    {notes.map(note => (
      <React.Fragment key={note.id}>
        <div className="border-slate-300  shadow-slate-300 box-border h-40 w-full items-start rounded-sm border-2 bg-white p-4 shadow-md">
          <div className="flex justify-between text-xl font-bold">
            <Typography style="h5">{note.title}</Typography>
            <Dropdown buttonStyle="text" icon={MenuVertical}>
              <Menu>
                {listItems.map((item, idx) => (
                  <MenuItem.Button key={idx}>{item}</MenuItem.Button>
                ))}
              </Menu>
            </Dropdown>
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
    ))}
  </>
);

export default List;
