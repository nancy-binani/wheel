import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Button, Avatar } from "neetoui";

const Note = ({ notes }) => (
  <>
    {notes.map(note => (
      <>
        <div className="border-slate-300  shadow-slate-300 box-border h-40 w-full items-start rounded-sm border-2 bg-white p-4 shadow-md">
          <div className="flex justify-between text-xl font-bold">
            <Typography style="h5">{note.title}</Typography>
            <Dropdown buttonStyle="text" icon={MenuVertical}>
              <li>Edit</li>
              <li>Delete</li>
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
                {note.status} {note.createdAt}
              </Typography>
              <Avatar
                size="small"
                user={{
                  imageUrl: "https://i.pravatar.cc/300",
                  name: "Nancy",
                }}
              />
            </div>
          </div>
          {note.status === "Created" && (
            <Button className="absolute right-10" label="Wednesday, 10:30AM" />
          )}
        </div>
        <br />
      </>
    ))}
  </>
);

export default Note;
