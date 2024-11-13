import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import Sidebar from '../../includes/Sidebar/Sidebar';
import AddPersonalInfo from './PersonalBtn'; // Assuming this component exists
import personalInfoServices from '../../Services/Services';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const PersonalInfoTable = () => {
    // Initial Personal Info Data
    const [personalInfo, setPersonalInfo] = useState([
        {
            blood_grp: '',
            user_id: '',
            address: ''
        }
    ]);
    const [openDel, setOpenDel] = useState(false);
    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/personalInfos'
                const res = await personalInfoServices.getAllFieldsDetails(endpoint)
                console.log(res)
                setPersonalInfo(res)
            } catch (err) {
                console.log('Personal data not found')
            }
        }
        fetchuserdata()
    }, [])

    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = personalInfo.slice(indexOfFirstData, indexOfLastData);
    const totalPages = Math.ceil(personalInfo.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((personal) => personal.id);
            setSelectedRows(allRowIds);
        } else {
            setSelectedRows([]);
        }
    };

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
                    <AddPersonalInfo />
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={ { width: '50px', textAlign: 'center' } }>
                                <Form.Check
                                    type="checkbox"
                                    checked={ selectAll }
                                    onChange={ handleSelectAll }
                                />
                            </th>
                            <th>Sr no.</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>User Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentData.map((personal, index) => (
                            <tr key={ personal.id } style={ { textAlign: 'center' } }>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={ selectedRows.includes(personal.id) }
                                        onChange={ () => handleSelectRow(personal.id) }
                                    />
                                </td>
                                <td>{ index + 1 + (currentPage - 1) * dataPerPage }</td>
                                <td>{ personal.blood_grp }</td>
                                <td>{ personal.address }</td>
                                <td>{ personal.first_name } { personal.last_name } </td>
                                <td>{ personal.date }</td>
                                <td>{
                                    <div className='d-flex'>
                                        <IconButton color="primary" onClick={ () => handleView() }>
                                            <Visibility />
                                        </IconButton>
                                        <IconButton color="success" onClick={ () => handleEdit() }>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error" onClick={ () => handleDelete() }>
                                            <Delete />
                                        </IconButton>
                                        <Dialog
                                            open={ openDel }
                                            onClose={ handleClose }
                                        >
                                            <DialogTitle>Confirm Delete</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Are you sure you want to delete this item? This action cannot be undone.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={ handleClose } color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={ handleClose } color="error">
                                                    Delete
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                }</td>
                            </tr>
                        )) }
                    </tbody>
                </Table>

                <Pagination style={ { float: 'right' } }>
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
        </>
    );
};

export default PersonalInfoTable;
