import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./data/MOCK_DATA.json";
import { COLUMNS } from "./data/column";
import "./table.css";
import GlobalFilter from "./filters/GlobalFilter";
import ColumnFilter from "./filters/ColumnFilter";

function FilteringTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    //for row
    rows,
    prepareRow,
    //for Filter
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th {...header.getHeaderProps()}>
                  {header.render("Header")}
                  <span>
                    {header.canFilter ? header.render("Filter") : null}
                  </span>
                </th>
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

export default FilteringTable;
