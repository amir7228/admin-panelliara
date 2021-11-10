// ** React Imports
import {Fragment, useState, useEffect} from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import {getAllData, getData} from '../store/action'
import {useDispatch, useSelector} from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import {ChevronDown} from 'react-feather'
import DataTable from 'react-data-table-component'
import {selectThemeColors} from '@utils'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Input,
    Row,
    Col,
    Label,
    CustomInput,
    Button
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm}) => {
    return (
        <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
            <Row>
                <Col xl='6' className='d-flex align-items-center p-0'>
                    <div className='d-flex align-items-center w-100'>
                        <Label for='rows-per-page'>نشان بده</Label>
                        <CustomInput
                            className='form-control mx-50'
                            type='select'
                            id='rows-per-page'
                            value={rowsPerPage}
                            onChange={handlePerPage}
                            style={{
                                width: '5rem',
                                padding: '0 0.8rem',
                                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
                            }}
                        >
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                        </CustomInput>
                        <Label for='rows-per-page'>ورودی ها</Label>
                    </div>
                </Col>
                <Col
                    xl='6'
                    className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
                >
                    <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                        <Label className='mb-0' for='search-invoice'>
                            جستجو:
                        </Label>
                        <Input
                            id='search-invoice'
                            className='ml-50 w-100'
                            type='text'
                            value={searchTerm}
                            onChange={e => handleFilter(e.target.value)}
                        />
                    </div>
                    <Button.Ripple color='primary' onClick={toggleSidebar}>
                        اضافه کردن کاربر جدید
                    </Button.Ripple>
                </Col>
            </Row>
        </div>
    )
}

const UsersList = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.users)

    // ** States
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentRole, setCurrentRole] = useState({value: '', label: 'انتخاب نقش'})
    const [currentPlan, setCurrentPlan] = useState({value: '', label: 'انتخاب سرویس'})
    const [currentStatus, setCurrentStatus] = useState({
        value: '',
        label: 'انتخاب وضعیت',
        number: 0
    })

    // ** Function to toggle sidebar
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    // ** Get data on mount
    useEffect(() => {
        dispatch(getAllData())
        dispatch(
            getData({
                page: currentPage,
                perPage: rowsPerPage,
                role: currentRole.value,
                currentPlan: currentPlan.value,
                status: currentStatus.value,
                q: searchTerm
            })
        )
    }, [dispatch])

    // ** User filter options
    const roleOptions = [
        {value: '', label: 'انتخاب نقش'},
        // {value: 'admin', label: 'ادمین'},
        // {value: 'author', label: 'مولف'},
        // {value: 'editor', label: 'ویرایشگر'},
        // {value: 'maintainer', label: 'نگهداری کننده'},
        // {value: 'subscriber', label: 'مشترک'}
        {value:'driver', label:'راننده'},
        {value:'customer', label: 'مشتری'},
        {value: 'expert', label: 'کارشناس'}
    ]

    const planOptions = [
        {value: '', label: 'انتخاب سرویس'},
        {value: 'basic', label: 'ساده'},
        {value: 'company', label: 'کمپانی'},
        {value: 'enterprise', label: 'اینترپرایز'},
        {value: 'team', label: 'تیم'}
    ]

    const statusOptions = [
        {value: '', label: 'انتخاب وضعیت', number: 0},
        {value: 'pending', label: 'در انتظار', number: 1},
        {value: 'active', label: 'فعال', number: 2},
        {value: 'inactive', label: 'غیر فعال', number: 3}
    ]

    // ** Function in get data on page change
    const handlePagination = page => {
        dispatch(
            getData({
                page: page.selected + 1,
                perPage: rowsPerPage,
                role: currentRole.value,
                currentPlan: currentPlan.value,
                status: currentStatus.value,
                q: searchTerm
            })
        )
        setCurrentPage(page.selected + 1)
    }

    // ** Function in get data on rows per page
    const handlePerPage = e => {
        const value = parseInt(e.currentTarget.value)
        dispatch(
            getData({
                page: currentPage,
                perPage: value,
                role: currentRole.value,
                currentPlan: currentPlan.value,
                status: currentStatus.value,
                q: searchTerm
            })
        )
        setRowsPerPage(value)
    }

    // ** Function in get data on search query change
    const handleFilter = val => {
        setSearchTerm(val)
        dispatch(
            getData({
                page: currentPage,
                perPage: rowsPerPage,
                role: currentRole.value,
                currentPlan: currentPlan.value,
                status: currentStatus.value,
                q: val
            })
        )
    }

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = Number((store.total / rowsPerPage).toFixed(0))

        return (
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                pageCount={count || 1}
                activeClassName='active'
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={page => handlePagination(page)}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
            />
        )
    }

    // ** Table data to render
    const dataToRender = () => {
        const filters = {
            role: currentRole.value,
            currentPlan: currentPlan.value,
            status: currentStatus.value,
            q: searchTerm
        }

        const isFiltered = Object.keys(filters).some(function (k) {
            return filters[k].length > 0
        })

        if (store.data.length > 0) {
            return store.data
        } else if (store.data.length === 0 && isFiltered) {
            return []
        } else {
            return store.allData.slice(0, rowsPerPage)
        }
    }

    const fakeData = [
        {
            id: 49,
            fullName: 'Paulie Durber',
            role: 'customer',
            username: 'pdurber1c',
            contact: '(694) 676-1275',
            email: 'pdurber1c@gov.uk',
            driverType: 'باربر',
            status: 'inactive',
            avatar: ''
        },
        {
            id: 50,
            fullName: 'Beverlie Krabbe',
            role: 'expert',
            username: 'bkrabbe1d',
            contact: '(397) 294-5153',
            email: 'bkrabbe1d@home.pl',
            driverType: 'مسافربر',
            status: 'active',
            avatar: require('@src/assets/images/avatars/9.png').default
        },
            {
            id: 40,
            fullName: 'ممد کاظمی',
            role: 'driver',
            username: 'mmdboldozer',
            contact: '2342343',
            email: 'mmdd@home.com',
            driverType: 'مسافربر',
            status: 'active',
            avatar: require('@src/assets/images/avatars/5.png').default
        }
    ]

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>فیلتر سرچ</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md='4'>
                            <Select
                                isClearable={false}
                                theme={selectThemeColors}
                                className='react-select'
                                classNamePrefix='select'
                                options={roleOptions}
                                value={currentRole}
                                onChange={data => {
                                    setCurrentRole(data)
                                    dispatch(
                                        getData({
                                            page: currentPage,
                                            perPage: rowsPerPage,
                                            role: data.value,
                                            currentPlan: currentPlan.value,
                                            status: currentStatus.value,
                                            q: searchTerm
                                        })
                                    )
                                }}
                            />
                        </Col>
                        <Col className='my-md-0 my-1' md='4'>
                            <Select
                                theme={selectThemeColors}
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={planOptions}
                                value={currentPlan}
                                onChange={data => {
                                    setCurrentPlan(data)
                                    dispatch(
                                        getData({
                                            page: currentPage,
                                            perPage: rowsPerPage,
                                            role: currentRole.value,
                                            currentPlan: data.value,
                                            status: currentStatus.value,
                                            q: searchTerm
                                        })
                                    )
                                }}
                            />
                        </Col>
                        <Col md='4'>
                            <Select
                                theme={selectThemeColors}
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={statusOptions}
                                W
                                value={currentStatus}
                                onChange={data => {
                                    setCurrentStatus(data)
                                    dispatch(
                                        getData({
                                            page: currentPage,
                                            perPage: rowsPerPage,
                                            role: currentRole.value,
                                            currentPlan: currentPlan.value,
                                            status: data.value,
                                            q: searchTerm
                                        })
                                    )
                                }}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <Card>
                <DataTable
                    noHeader
                    pagination
                    subHeader
                    responsive
                    paginationServer
                    columns={columns}
                    sortIcon={<ChevronDown/>}
                    className='react-dataTable'
                    paginationComponent={CustomPagination}
                    // data={dataToRender()}
                      data={fakeData}
                    subHeaderComponent={
                        <CustomHeader
                            toggleSidebar={toggleSidebar}
                            handlePerPage={handlePerPage}
                            rowsPerPage={rowsPerPage}
                            searchTerm={searchTerm}
                            handleFilter={handleFilter}
                        />
                    }
                />
            </Card>

            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar}/>
        </Fragment>
    )
}

export default UsersList
