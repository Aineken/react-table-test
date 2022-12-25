import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const newChange = useAsyncDebounce((val) => setFilter(val || undefined), 300);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          newChange(e.target.value);
        }}
      />
    </span>
  );
}

export default GlobalFilter;
