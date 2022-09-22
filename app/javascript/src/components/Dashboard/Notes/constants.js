import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: [],
};

export const CONTACTS = [
  {
    label: "Oliver Smith",
    value: "Oliver",
  },
  {
    label: "Sam Smith",
    value: "Sam",
  },
  {
    label: "Nancy Binani",
    value: "Nancy",
  },
];

export const TAGS = [
  {
    label: "Getting started",
    value: "value1",
  },
  {
    label: "Onboarding",
    value: "value2",
  },
  {
    label: "UX",
    value: "value3",
  },
  {
    label: "Bugs",
    value: "value4",
  },
  {
    label: "User flow",
    value: "value5",
  },
  {
    label: "V2",
    value: "value6",
  },
];

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
    .min(1, "Please select a tag")
    .required("Please select a tag"),
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
