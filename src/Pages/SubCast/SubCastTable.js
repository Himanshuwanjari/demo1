import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import Sidebar from '../../includes/Sidebar/Sidebar';
import SubCastAddButton from './SubCastAddBtn';
import subCastServices from '../../Services/Services'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const SubCastTable = () => {
    // Initial SubCast Data
    const [subcast, setsubcast] = useState([
        {
            subcaste_name: '',
            sbcaste_status: '',
            sbcaste_created: '',
            caste_id: ''
        }
    ]);
    const [openDel, setOpenDel] = useState(false);
    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/subCasts'
                const res = await subCastServices.getAllFieldsDetails(endpoint)
                console.log(res)
                setsubcast(res)
            } catch (err) {
                console.log('subCast data not found')
            }
        }
        fetchuserdata()
    }, [])

    // State to track the selected rows
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // State for Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);

    // Pagination logic
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = subcast.slice(indexOfFirstData, indexOfLastData);
    const totalPages = Math.ceil(subcast.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((subCast) => subCast.id);
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

    // Action field control
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
                    <SubCastAddButton />
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
                            <th>SubCast Name</th>
                            <th>Cast id</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentData.map((subCast, index) => (
                            <tr key={ subCast.id } style={ { textAlign: 'center' } }>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={ selectedRows.includes(subCast.id) }
                                        onChange={ () => handleSelectRow(subCast.id) }
                                    />
                                </td>
                                <td>{ index + 1 + (currentPage - 1) * dataPerPage }</td>
                                <td>{ subCast.subcaste_name }</td>
                                <td>{ subCast.caste_name }</td>
                                <td>{ subCast.sbcaste_status === 1 ? '1' : '0' }</td>
                                <td>{ subCast.sbcaste_created }</td>
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

export default SubCastTable;
