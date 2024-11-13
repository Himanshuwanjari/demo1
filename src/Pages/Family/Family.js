import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import AddFamilyInfo from './Familybtn';
import Sidebar from '../../includes/Sidebar/Sidebar';
import familyInfoServices from '../../Services/Services';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const FamilyInfoTable = () => {
    // Initial Family Info Data
    const [family, setFamily] = useState([
        {
            family_member: '',
            family_status: '',
            father_occupation: '',
            mother_occupation: '',
            user_id: '',
            no_of_brothers: '',
            no_of_sisters: ''
        }
    ]);
    const [openDel, setOpenDel] = useState(false);

    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/familyInfos'
                const res = await familyInfoServices.getAllFieldsDetails(endpoint)
                console.log(res)
                setFamily(res)
            } catch (err) {
                console.log('Family data not found')
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
    const currentData = family.slice(indexOfFirstData, indexOfLastData);

    const totalPages = Math.ceil(family.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle select all checkbox
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((family) => family.id);
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
                    <AddFamilyInfo />
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
                            <th>Family Member</th>
                            <th>Family Status</th>
                            <th>Father's Occupation</th>
                            <th>Mother's Occupation</th>
                            <th>No. of Brothers</th>
                            <th>No. of Sisters</th>
                            <th>User ID</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentData.map((family, index) => (
                            <tr key={ family.id } style={ { textAlign: 'center' } }>
                                {/* Individual row checkbox */ }
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={ selectedRows.includes(family.id) }
                                        onChange={ () => handleSelectRow(family.id) }
                                    />
                                </td>
                                <td>{ index + 1 + (currentPage - 1) * dataPerPage }</td>
                                <td>{ family.family_member }</td>
                                <td>{ family.family_status }</td>
                                <td>{ family.father_occupation }</td>
                                <td>{ family.mother_occupation }</td>
                                <td>{ family.no_of_brothers }</td>
                                <td>{ family.no_of_sisters }</td>
                                <td>{ family.first_name } { family.last_name } </td>
                                <td>{ family.date }</td>
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
        </>
    );
};

export default FamilyInfoTable;
