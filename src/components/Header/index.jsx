import React from "react";
import {
  Container,
  InputGroup,
  Form,
  Button,
  //   Prepend,
} from "react-bootstrap";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import filter from "../../assets/filter.png";

const Header = ({ onFilter, onSearch }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
    console.log(searchTerm)
  };
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    onFilter(filterValue);
  };
  return (
    <div className="header">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <img src={logo} alt="Logo" width="33" height="33" />
            <span
              style={{ marginLeft: "10px", fontSize: "18px", width: "300px" }}
              className=""
            >
              <b>Manage Business</b>
            </span>
            <InputGroup>
              <InputGroup.Text id="basic-addon1" className="search-icon">
                <img src={search} alt="search" />
              </InputGroup.Text>

              <Form.Control
                placeholder="Search"
                aria-describedby="basic-addon1"
                className="search-input"
                onChange={handleSearch}
              />
              <InputGroup.Text id="basic-addon1" className="search-filter">
                <img src={filter} alt="filter" />
                {/* <select onChange={handleFilter} className="filter-select">
                  <option value="">Select Filter</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select> */}
              </InputGroup.Text>
            </InputGroup>
          </div>

          <div>
            <Button style={{ background: "#FFD705", color: "#000" }}>
              <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>+
              Add Business
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
