import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import Sidebar from '../../includes/Sidebar/Sidebar';
import userServices from '../../Services/Services'
import { IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import AddUser from './AddUser';
import Swal from 'sweetalert2';
import { deleteUserById } from '../../Services/user-service';
import UpdateUser from './UpdateUser';

const UserTable = () => {
    // Initial User Data
    const [user, setUser] = useState([]);
    const [UserEditId, setUserEditId] = useState(null)

    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/users'
                const res = await userServices.getAllFieldsDetails(endpoint)
                // console.log(res)
                setUser(res)
            } catch (err) {
                console.log('user data not found')
            }
        }
        fetchuserdata()
    }, [])

    // State to track the selected rows
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // State for Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5); // Number of rows per page

    // Pagination logic
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = user.slice(indexOfFirstData, indexOfLastData)

    const totalPages = Math.ceil(user.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle select all checkbox
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((user) => user.id);
            setSelectedRows(allRowIds);
        } else {
            setSelectedRows([]);
        }
    };

    // Handle individual row checkbox
    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handleEdit = (id) => {
        // Logic for editing a row
        console.log('Edit row:', id);
        setUserEditId(id) //set id of user which we want to edit
    };

    const handleView = (id) => {
        // Logic for viewing a row
        console.log('View row:', id);
    };

    const handleDelete = async (id) => {
        // Implement delete action
        console.log('Delete record', id);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this! ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })

            if (result.isConfirmed) {
                let response = await deleteUserById(id)
                console.log(response)
                Swal.fire('Deleted!', 'Your item has been deleted', 'success')
            }
        } catch (error) {
            Swal.fire('Error', 'There was an error deleting item.', 'error')
            console.error("Error deleting item :", error)
        }

    };

    // const handleClose = () => {
    // };
    return (
        <>
            <Sidebar />
            <div className="container mx-auto my-5 pt-2">
                <div className='my-2'>
                    <AddUser />
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={ { width: '50px', textAlign: 'center' } }>
                                {/* Checkbox to select/deselect all rows */ }
                                <Form.Check
                                    type="checkbox"
                                    checked={ selectAll }
                                    onChange={ handleSelectAll }
                                />
                            </th>
                            <th>Sr no.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Mother Tounge</th>
                            <th>Country </th>
                            <th>State </th>
                            <th>City</th>
                            <th>Religion</th>
                            <th>Caste</th>
                            <th>Sub Cast</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentData.map((user, index) => (
                            <tr key={ user.id } style={ { textAlign: 'center' } }>
                                {/* Individual row checkbox */ }
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={ selectedRows.includes(user.id) }
                                        onChange={ () => handleSelectRow(user.id) }
                                    />
                                </td>
                                <td>{ index + 1 + (currentPage - 1) * dataPerPage }</td>
                                <td>{ user.first_name }</td>
                                <td>{ user.last_name }</td>
                                <td>{ user.email_id }</td>
                                <td>{ user.mobile_no }</td>
                                <td>{ user.gender }</td>
                                <td>{ user.mother_tounge }</td>
                                <td>{ user.country_name }</td>
                                <td>{ user.state_name }</td>
                                <td>{ user.city_name }</td>
                                <td>{ user.religion_name }</td>
                                <td>{ user.caste_name }</td>
                                <td>{ user.subcaste_name }</td>
                                <td>{ (user.status) ? 'Active' : 'Deactive' }</td>
                                <td>{ user.created }</td>
                                <td>{
                                    <div className='d-flex'>
                                        <IconButton color="primary" onClick={ () => handleView() }>
                                            <Visibility />
                                        </IconButton>
                                        <IconButton color="success" onClick={ () => handleEdit(user.id) }>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error" onClick={ () => handleDelete(user.id) }>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                }</td>
                            </tr>
                        )) }
                    </tbody>
                </Table>

                {/* Pagination */ }
                <Pagination style={ { float: 'right' } } >
                    { [...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={ index + 1 }
                            active={ index + 1 === currentPage }
                            onClick={ () => paginate(index + 1) }
                        >
                            { index + 1 }
                        </Pagination.Item>
                    )) }
                </Pagination>
            </div>
            { UserEditId && <UpdateUser userId={ UserEditId } onClose={ () => setUserEditId(null) } /> }
        </>
    );
};

export default UserTable;
