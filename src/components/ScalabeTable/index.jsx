import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenSquare,
  faTrash,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../setup/store/data";
import Header from "../Header";
import Add from "../../assets/add.png";
import Options from "../../assets/options.png";
import CustomPagination from "../Pagination";
import ViewModal from "../Modal/View";
import DeleteModal from "../Modal/Delete";

const staffdata = data.staff;
const itemsPerPage = 5;

const ScrollableTable = () => {
  const [staff, setStaff] = useState(staffdata);
  const [selectedValues, setSelectedValues] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteRowIndex, setDeleteRowIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(staff);

  const handleSearchChange = (event) => {
    console.log(event);
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(event.target.value);
    const filteredStaff = staff[0]?.columnValue?.filter((row) => {
      const rowValues = staff?.map((column) =>
        column?.columnValue[row.values]?.values?.toLowerCase()
      );

      return rowValues.some(
        (value) => value?.includes(searchTerm) || value?.includes(searchTerm)
      );
    });

    setFilteredData(filteredStaff);
  };

  const headers = staff.map((column) => column.columnName);

  const handleDropdownChange = (columnName, rowIndex, selectedValue) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [`${columnName}_${rowIndex}`]: selectedValue,
    }));
  };

  const toggleDropdown = () => {
    setShowDropdown(true);
  };

  const toggleSticky = (columnIndex) => {
    const updatedStaff = [...staff];
    updatedStaff[columnIndex].isSticky = !updatedStaff[columnIndex].isSticky;

    updatedStaff.sort((a, b) => {
      if (a.isSticky && !b.isSticky) {
        return -1;
      } else if (!a.isSticky && b.isSticky) {
        return 1;
      } else {
        return a.position - b.position;
      }
    });

    setStaff(updatedStaff);
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
            className="true-false-dropdown"
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

  const handleDelete = (rowIndex) => {
    setDeleteRowIndex(rowIndex);
    setShowDeleteModal(true);
  };

  const handleDeleteClick = () => {
    if (deleteRowIndex !== null) {
      const updatedStaff = [...staff];
      updatedStaff[0].columnValue.splice(deleteRowIndex, 1);
      setStaff(updatedStaff);
      console.log(`Deleting record at index ${deleteRowIndex}`);
    }

    setShowDeleteModal(false);
  };

  const handleViewClick = (rowIndex) => {
    const record = paginatedData[rowIndex];
    setSelectedRecord(record);
    setShowViewModal(true);
  };

  const calculateAdjustedLeftValue = (colIndex) => {
    let leftValue = 0;

    for (let i = 0; i < colIndex; i++) {
      leftValue += staff[i].isSticky ? 260 : 200;
    }

    return `${leftValue}px`;
  };

  return (
    <>
      <Header value={searchTerm} handleSearchChange={handleSearchChange} />
      <div className="scrollable-table">
        <Table bordered hover responsive>
          <thead>
            <div className="top"></div>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={staff[index].isSticky ? "sticky-column-r" : ""}
                  style={{
                    width: "300px",
                    left: staff[index].isSticky
                      ? calculateAdjustedLeftValue(index)
                      : "",
                  }}
                >
                  {index === 0 && (
                    <img
                      src={Add}
                      alt="Add"
                      onClick={() => toggleSticky(index)}
                      style={{ marginRight: "20px" }}
                    />
                  )}

                  {mapColumnToDisplayName(header)}
                  <FontAwesomeIcon
                    icon={faThumbtack}
                    style={{
                      fontSize: 12,
                      color: staff[index].isSticky ? "#f5bf00" : "#000",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    onClick={() => toggleSticky(index)}
                  />
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.length > 0 &&
              paginatedData?.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {staff.map((column, columnIndex) => (
                    <td
                      key={column.id}
                      className={
                        staff[columnIndex].isSticky ? "sticky-column-r" : ""
                      }
                      style={{
                        width: "300px",
                        left: staff[columnIndex].isSticky
                          ? calculateAdjustedLeftValue(columnIndex)
                          : "",
                      }}
                    >
                      {columnIndex === 0 && (
                        <img
                          src={Options}
                          alt="Options"
                          onClick={() => toggleDropdown(rowIndex)}
                          style={{ marginRight: "20px" }}
                        />
                      )}

                      {renderCellValue(column, rowIndex)}
                      <Dropdown
                        show={showDropdown}
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="options-dropdown"
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="profile">
                            Profile
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="department">
                            Department
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="user">User</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  ))}
                  <td className="icon-list">
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ fontSize: 20, color: "#5bc0de" }}
                      onClick={() => handleViewClick(rowIndex)}
                    />
                    <FontAwesomeIcon
                      icon={faPenSquare}
                      style={{ fontSize: 20, color: "#5cb85c" }}
                    />

                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: 20, color: "#d9534f" }}
                      onClick={() => handleDelete(rowIndex)}
                    />
                  </td>
                </tr>
              ))}
            <ViewModal
              show={showViewModal}
              onHide={() => setShowViewModal(false)}
              record={selectedRecord}
            />
            <DeleteModal
              show={showDeleteModal}
              onHide={() => setShowDeleteModal(false)}
              handleDeleteClick={() => handleDeleteClick()}
            />
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
