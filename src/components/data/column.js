import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    disableFilters: true,
    // Cell: ({ index }) => {
    //   return <div>{index + 1}</div>;
    // },
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => value && format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone Number",
    Footer: "Phone Number",
    accessor: "phone",
  },
];

// export const COLUMNS_GROUP = [
//   {
//     Header: "ID",
//     Footer: "ID",

//     accessor: "id",
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//   },
//   {
//     Header: "Email",
//     Footer: "Email",
//     accessor: "email",
//   },
//   {
//     Header: "Group Header",
//     Footer: "Group Footer",
//     columns: [
//       {
//         Header: "Date of Birth",
//         Footer: "Date of Birth",
//         accessor: "date_of_birth",
//       },
//     ],
//   },
//   {
//     Header: "Country",
//     Footer: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone Number",
//     Footer: "Phone Number",
//     accessor: "phone",
//   },
// ];