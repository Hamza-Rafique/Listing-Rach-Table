import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { data } from "../../store/data";
import Header from "../Header";
import Add from "../../assets/add.png";
import Options from "../../assets/options.png";
import CustomPagination from "../Pagination";

const staff = data.staff;
const itemsPerPage = 5;
const ScrollableTable = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [showDropdown, setShowDropdown] = useState(
    new Array(staff[0].columnValue.length).fill(false)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const headers = staff.map((column) => column.columnName);

  const handleDropdownChange = (columnName, rowIndex, selectedValue) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [`${columnName}_${rowIndex}`]: selectedValue,
    }));
  };

  const toggleDropdown = (rowIndex) => {
    setShowDropdown((prevShowDropdown) => {
      const newShowDropdown = [...prevShowDropdown];
      newShowDropdown[rowIndex] = !newShowDropdown[rowIndex];
      return newShowDropdown;
    });
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

  const renderCellValue = (column, rowIndex) => {
    switch (column.status) {
      case "dropdown":
        return (
          <Dropdown
            onSelect={(selectedValue) =>
              handleDropdownChange(column.columnName, rowIndex, selectedValue)
            }
          >
            <Dropdown.Toggle className="status-dropdwon" id="dropdown-basic">
              {selectedValues[`${column.columnName}_${rowIndex}`] ||
                column.columnValue[rowIndex].values}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="True">True</Dropdown.Item>
              <hr />
              <Dropdown.Item eventKey="False">False</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      case "image":
        return (
          <img
            src={column.columnValue[rowIndex].values}
            alt={`User ${rowIndex + 1}`}
            height="40"
            width="40"
            style={{ borderRadius: "50%" }}
          />
        );
      default:
        return column.columnValue[rowIndex].values;
    }
  };
  const totalItems = staff[0].columnValue.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = staff[0].columnValue.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <div className="scrollable-table">
        <Table bordered hover responsive>
          <thead>
            <div className="top"></div>
            <tr>
              {headers.map((header, index) => (
                <th key={header} className={index === 0 ? "sticky-column" : ""}>
                  {index === 0 && (
                    <th className="sticky-column">
                      <img src={Add} />
                    </th>
                  )}
                  {mapColumnToDisplayName(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staff.length > 0 &&
              paginatedData?.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {staff.map((column, columnIndex) => (
                    <td
                      key={column.id}
                      className={columnIndex === 0 ? "sticky-column-r" : ""}
                    >
                      {columnIndex === 0 && (
                        <>
                          <td className="sticky-column-r">
                            <img
                              src={Options}
                              onClick={() => toggleDropdown(rowIndex)}
                            />
                          </td>
                        </>
                      )}
                      {renderCellValue(column, rowIndex)}
                    </td>
                  ))}
                  <Dropdown
                    show={showDropdown[rowIndex]}
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="options-dropdown"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
                      <Dropdown.Item eventKey="department">
                        Department
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="user">User</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export { ScrollableTable };
