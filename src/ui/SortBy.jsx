import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/* eslint-disable */
export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      value={sortBy}
      onChange={handleChange}
      type="white"
      options={options}
    />
  );
}
