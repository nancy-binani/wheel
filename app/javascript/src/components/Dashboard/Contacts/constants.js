import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const CONTACTS_FROM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_DETAILS = [
  {
    id: 1,
    firstName: "Oliver",
    lastName: "Smith",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Carter",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 3,
    firstName: "Steven",
    lastName: "Strange",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 4,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 5,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 6,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 7,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 7,
    firstName: "Steven",
    lastName: "Strange",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
];

export const ROLES = buildSelectOptions(["Admin", "Non Admin"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .required("Email address is required.")
    .email("Invalid email address."),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required."),
});
