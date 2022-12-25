import React from "react";

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        style={{ margin: "auto 10px" }}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default ColumnFilter;
