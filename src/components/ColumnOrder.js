import React, { useMemo } from "react";
import { useColumnOrder, useTable } from "react-table";
import MOCK_DATA from "./data/MOCK_DATA.json";
import { COLUMNS } from "./data/column";
import "./table.css";

function ColumnOrder() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const changeOrder = () => {
    setColumnOrder(["id", "first_name", "country", "last_name"]);
  };
  return (
    <>
      <button onClick={changeOrder}> Change column Order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th {...header.getHeaderProps()}>{header.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((footer) => (
                <th {...footer.getFooterProps}>{footer.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}

export default ColumnOrder;
