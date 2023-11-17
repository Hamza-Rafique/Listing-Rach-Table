import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { data } from "../../../store/data";
import "./style.css";
import Header from "../../Header";

const ResultTable = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const staff = data.staff;
  console.log(staff);
  const handleDropdownChange = (columnName, rowIndex, selectedValue) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [`${columnName}_${rowIndex}`]: selectedValue,
    }));
  };

 

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

  const TableColumnHeader = ({ column, index }) => (
    <th className={index === 0 ? "sticky-column" : ""}>
      {mapColumnToDisplayName(column.columnName)}
    </th>
  );
  const renderCellValue = (column, rowIndex) => {
    switch (column.status) {
      case "dropdown":
        return (
          <Dropdown
            onSelect={(selectedValue) =>
              handleDropdownChange(column.columnName, rowIndex, selectedValue)
            }
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedValues[`${column.columnName}_${rowIndex}`] ||
                column.columnValue[rowIndex].values}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="True">True</Dropdown.Item>
              <Dropdown.Item eventKey="False">False</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      case "image":
        return (
          <img
            src={column.columnValue[rowIndex].values}
            alt=""
            height="50"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        );
      default:
        return column.columnValue[rowIndex].values;
    }
  };
  const TableBodyCell = ({ column, rowIndex }) => (
    <td className={rowIndex === 0 ? "sticky-column" : ""}>
      {renderCellValue(column, rowIndex)}
    </td>
  );

  return (
    <>
      <Header />
      <div className="scrollable-table">
        <Table bordered hover>
          <thead>
            <tr>
              {staff
                .filter((column) => column.isShown)
                .map((column) => (
                  <TableColumnHeader key={column.id} column={column} />
                ))}
            </tr>
          </thead>
          <tbody>
            {staff.length > 0 &&
              staff[0].columnValue.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {staff.map((column, colIndex) => (
                    <TableBodyCell
                      key={colIndex}
                      column={column}
                      rowIndex={rowIndex}
                    />
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ResultTable;
