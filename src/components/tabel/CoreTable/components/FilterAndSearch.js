import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const FilterAndSearch = ({
  filterValue,
  onFilterChange,
  onFilterIconClick,
  searchValue,
  onSearchChange,
}) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Filter..."
          value={filterValue}
          onChange={onFilterChange}
        />
         {/* <InputGroup.Append>
          <InputGroup.Text onClick={onFilterIconClick} id="basic-addon2">
            Filter
          </InputGroup.Text>
        </InputGroup.Append>  */}
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </InputGroup>
    </div>
  );
};

export default FilterAndSearch;
