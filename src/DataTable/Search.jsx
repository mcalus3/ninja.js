import React from "react";
import { useLocalization } from "../useLocalization";

const Search = ({ onSearch, locale }) => {
  const { SearchUsers } = useLocalization(locale);

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder={SearchUsers}
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
