// ** React Imports
import {Link} from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import {getUser} from '../store/action'
import {store} from '@store/storeConfig/store'

// ** Third Party Components
import {Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
// import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'
import {User, Edit, Settings, HardDrive, MoreVertical, FileText, Trash2, Archive} from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
    const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]

    if (row.avatar.length) {
        return <Avatar className='mr-1' img={row.avatar} width='32' height='32'/>
    } else {
        return <Avatar color={color || 'primary'} className='mr-1'
                       content={row.fullName || 'John Doe'} initials/>
    }
}

// ** Renders Role Columns
const renderRole = row => {
    // const roleObj = {
    //   subscriber: {
    //     class: 'text-primary',
    //     icon: User
    //   },
    //   maintainer: {
    //     class: 'text-success',
    //     icon: Database
    //   },
    //   editor: {
    //     class: 'text-info',
    //     icon: Edit
    //   },
    //   author: {
    //     class: 'text-warning',
    //     icon: Settings
    //   },
    //   admin: {
    //     class: 'text-danger',
    //     icon: Slack
    //   }
    // }
    const roleObj = {
        driver: {
            class: 'text-primary',
            icon: HardDrive
        },
        customer: {
            class: 'text-success',
            icon: User
        },
        expert: {
            class: 'text-warning',
            icon: Settings
        }
    }

    const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit

    return (
      <span className='text-truncate text-capitalize align-middle'>
        <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
        {row.role}
      </span>
    )
}

const statusObj = {
    pending: 'light-warning',
    active: 'light-success',
    inactive: 'light-secondary'
}

export const columns = [
    {
        name: 'کاربر',
        minWidth: '297px',
        selector: 'fullName',
        sortable: true,
        cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
                {renderClient(row)}
                <div className='d-flex flex-column'>
                    <Link
                        to={`/apps/user/view/${row.id}`}
                        className='user-name text-truncate mb-0'
                        onClick={() => store.dispatch(getUser(row.id))}
                    >
                        <span className='font-weight-bold'>{row.fullName}</span>
                    </Link>
                    <small className='text-truncate text-muted mb-0'>@{row.username}</small>
                </div>
            </div>
        )
    },
    {
        name: 'ایمیل',
        minWidth: '320px',
        selector: 'email',
        sortable: true,
        cell: row => row.email
    },
    {
        name: 'نقش',
        minWidth: '172px',
        selector: 'role',
        sortable: true,
        cell: row => renderRole(row)
    },
    {
        name: 'نوع',
        minWidth: '138px',
        selector: 'driverType',
        sortable: true,
        cell: row => <span className='text-capitalize'>{row.driverType}</span>
    },
    {
        name: 'وضعیت',
        minWidth: '138px',
        selector: 'status',
        sortable: true,
        cell: row => (
            <Badge className='text-capitalize' color={statusObj[row.status]} pill>
                {row.status}
            </Badge>
        )
    },
    {
        name: 'عمل ها',
        minWidth: '100px',
        selector: 'fullName',
        sortable: true,
        cell: row => (
            <UncontrolledDropdown>
                <DropdownToggle tag='div' className='btn btn-sm'>
                    <MoreVertical size={14} className='cursor-pointer'/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem
                        tag={Link}
                        to={`/apps/user/view/${row.id}`}
                        className='w-100'
                        onClick={() => store.dispatch(getUser(row.id))}
                    >
                        <FileText size={14} className='mr-50'/>
                        <span className='align-middle'>جزئیات</span>
                    </DropdownItem>
                    <DropdownItem
                        tag={Link}
                        to={`/apps/user/edit/${row.id}`}
                        className='w-100'
                        onClick={() => store.dispatch(getUser(row.id))}
                    >
                        <Archive size={14} className='mr-50'/>
                        <span className='align-middle'>ویرایش</span>
                    </DropdownItem>
                    <DropdownItem className='w-100'>
                        <Trash2 size={14} className='mr-50'/>
                        <span className='align-middle'>حذف</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
]
