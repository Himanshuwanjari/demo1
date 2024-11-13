import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import Sidebar from '../../includes/Sidebar/Sidebar';
import ReligionAddButton from './ReligionAddBtn';
import religionServices from '../../Services/Services'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';


const ReligionTable = () => {
    // Initial Religion Data
    const [religion, setReligion] = useState([
        {
            religion_name: '',
            religion_status: '',
            religion_created: ''
        }
    ]);
    const [openDel, setOpenDel] = useState(false);

    //fatch data from API 
    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/religions'
                const res = await religionServices.getAllFieldsDetails(endpoint)
                console.log(res)
                setReligion(res)
            } catch (err) {
                console.log('religions data not found')
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
    const currentData = religion.slice(indexOfFirstData, indexOfLastData);

    const totalPages = Math.ceil(religion.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle select all checkbox
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((religion) => religion.id);
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
    };

    const handleView = (id) => {
        // Logic for viewing a row
        console.log('View row:', id);
    };

    const handleDelete = (id) => {
        // Implement delete action
        console.log('Delete record', id);
        setOpenDel(true);
    };

    const handleClose = () => {
        setOpenDel(false); // Close the modal without deleting
    };

    return (
        <>
            <Sidebar />
            <div className="container mx-auto my-5 pt-2">
                <div className='my-2'>
                    <ReligionAddButton />
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ width: '50px', textAlign: 'center' }}>
                                {/* Checkbox to select/deselect all rows */}
                                <Form.Check
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th>Sr no.</th>
                            <th>Religion Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((religion, index) => (
                            <tr key={religion.id} style={{ textAlign: 'center' }}>
                                {/* Individual row checkbox */}
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedRows.includes(religion.id)}
                                        onChange={() => handleSelectRow(religion.id)}
                                    />
                                </td>
                                <td>{index + 1 + (currentPage - 1) * dataPerPage}</td>
                                <td>{religion.religion_name}</td>
                                <td>{religion.religion_status}</td>
                                <td>{religion.religion_created}</td>
                                <td>{
                                    <div className='d-flex'>
                                        <IconButton color="primary" onClick={() => handleView()}>
                                            <Visibility />
                                        </IconButton>
                                        <IconButton color="success" onClick={() => handleEdit()}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error" onClick={() => handleDelete()}>
                                            <Delete />
                                        </IconButton>
                                        <Dialog
                                            open={openDel}
                                            onClose={handleClose}
                                        >
                                            <DialogTitle>Confirm Delete</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Are you sure you want to delete this item? This action cannot be undone.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleClose} color="error">
                                                    Delete
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                }</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Pagination */}
                <Pagination style={{ float: 'right' }} >
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </>

    );
};

export default ReligionTable;
