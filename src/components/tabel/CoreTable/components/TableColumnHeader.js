
import React from 'react';

const mapColumnToDisplayName = (columnName) => {
    switch (columnName) {
      case "imageUrl":
        return "User";
      case "email":
        return "User Email";
      case "mobile":
        return "User Mobile Number";
      case "isActive":
        return "Status";
      case "providerId":
        return "User ID";

      default:
        return columnName;
    }
  };

const TableColumnHeader = ({ column }) => (
  <th
    style={
      column.isSticky
        ? { position: "sticky", top: 0, zIndex: 1, background: "white" }
        : {}
    }
  >
    {mapColumnToDisplayName(column.columnName)}
  </th>
);

export default TableColumnHeader;
