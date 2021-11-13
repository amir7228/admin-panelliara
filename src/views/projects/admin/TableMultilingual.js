import { Fragment, useState, useEffect } from "react";

// ** Table Columns
import { multiLingColumns } from "./data";
import AddNewModal from "./AddNewModal";
import { useDispatch, useSelector } from "react-redux";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Plus } from "react-feather";
import { FormattedMessage } from "react-intl";
import DataTable from "react-data-table-component";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardText,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

const DataTableWithButtons = () => {
  // ** State
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ** Function to handle pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  const data = [
    {
      responsive_id: "",
      id: 1,
      avatar: "10.jpg",
      title: "دوره تاریخ",
      description: "دوره ساختگی",
      chapters: "23",
      lessons: "78",
      duration: "35",
      price: "450,000",
      age: "61",
      experience: "1 Year",
      status: 2,
    },
  ];

  const handleModal = () => setModal(!modal);

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    const status = {
      1: { title: "Current", color: "light-primary" },
      2: { title: "Professional", color: "light-success" },
      3: { title: "Rejected", color: "light-danger" },
      4: { title: "Resigned", color: "light-warning" },
      5: { title: "Applied", color: "light-info" },
    };

    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith =
          item.title.toLowerCase().startsWith(value.toLowerCase()) ||
          item.description.toLowerCase().startsWith(value.toLowerCase()) ||
          item.chapters.toLowerCase().startsWith(value.toLowerCase()) ||
          item.lessons.toLowerCase().startsWith(value.toLowerCase()) ||
          item.price.toLowerCase().startsWith(value.toLowerCase()) ||
          item.duration.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title
            .toLowerCase()
            .startsWith(value.toLowerCase());

        const includes =
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase()) ||
          item.chapters.toLowerCase().includes(value.toLowerCase()) ||
          item.lessons.toLowerCase().includes(value.toLowerCase()) ||
          item.price.toLowerCase().includes(value.toLowerCase()) ||
          item.duration.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          <FormattedMessage id="Prev" />
        </span>
      </Fragment>
    );
  };

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          <FormattedMessage id="Next" />
        </span>
      </Fragment>
    );
  };

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={
        searchValue.length ? filteredData.length / 7 : data.length / 7 || 1
      }
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={"active"}
      pageClassName={"page-item"}
      nextLinkClassName={"page-link"}
      nextClassName={"page-item next"}
      previousClassName={"page-item prev"}
      previousLinkClassName={"page-link"}
      pageLinkClassName={"page-link"}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={
        "pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"
      }
    />
  );

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <Row className="w-100">
            <Col md="6" sm="12">
              <CardTitle className="text-left" tag="h4">
                دوره های حضوری
              </CardTitle>
            </Col>
            <Col md="6" sm="12">
              <div className="d-flex mt-md-0 mt-1 justify-content-end">
                <Button className="ml-2" color="primary" onClick={handleModal}>
                  <Plus size={15} />
                  <span className="align-middle ml-50">اضافه کردن دوره</span>
                </Button>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <Row className="justify-content-start mx-0">
          <Col
            className="d-flex align-items-center justify-content-start mt-1"
            md="3"
            sm="12"
          >
            <Label className="mr-1" for="search-input-1">
              <FormattedMessage id="Search" />
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input-1"
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRowsNoSelectAll
          columns={multiLingColumns}
          className="react-dataTable"
          paginationPerPage={7}
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
        />
        <CardFooter>
          <CardText className="mb-0">
            {/* <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span> */}
          </CardText>
        </CardFooter>
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
    </Fragment>
  );
};

export default DataTableWithButtons;
