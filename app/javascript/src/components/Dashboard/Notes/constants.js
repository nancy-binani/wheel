import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: [],
};
export const CONTACTS = buildSelectOptions(["Admin", "Non Admin"]);

export const TAGS = buildSelectOptions([
  "Getting Started",
  "UX",
  "Learning",
  "Bugs",
  "User Flow",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(CONTACTS.map(contact => contact.label)),
      value: yup.string().oneOf(CONTACTS.map(contact => contact.value)),
    })
    .required("Please select a contact"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS.map(tag => tag.value)),
      })
    )
    .min(1, "Please select atleast one tag")
    .required("Please select atleast one tag"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    executionStatus: "Getting Started",
    status: "Created",
    createdAt: "2022-09-22",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2022-09-22",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2022-09-22",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2022-09-22",
  },
];

export const MENU_OPTIONS = ["Edit", "Delete"];
