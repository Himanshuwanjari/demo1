import React, { useEffect, useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import Sidebar from '../../includes/Sidebar/Sidebar';
import AddEducationDetails from './Educationbtn'; // Assuming this component exists
import eduInfoServices from '../../Services/Services';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';


const EducationDetailsTable = () => {
    // Initial Education Details Data
    const [education, setEducation] = useState([
        {
            highest_education: '',
            degree: '',
            employed_in: '',
            occupation: '',
            income: '',
            user_id: ''
        }
    ]);
    const [openDel, setOpenDel] = useState(false);

    useEffect(() => {
        const fetchuserdata = async () => {
            try {
                const endpoint = '/educationInfos'
                const res = await eduInfoServices.getAllFieldsDetails(endpoint)
                console.log(res)
                setEducation(res)
            } catch (err) {
                console.log('Education data not found')
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
    const currentData = education.slice(indexOfFirstData, indexOfLastData);
    const totalPages = Math.ceil(education.length / dataPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allRowIds = currentData.map((education) => education.id);
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
                    <AddEducationDetails />
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
                            <th>Highest Education</th>
                            <th>Degree</th>
                            <th>Employed In</th>
                            <th>Occupation</th>
                            <th>Income</th>
                            <th>User ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentData.map((education, index) => (
                            <tr key={ education.id } style={ { textAlign: 'center' } }>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={ selectedRows.includes(education.id) }
                                        onChange={ () => handleSelectRow(education.id) }
                                    />
                                </td>
                                <td>{ index + 1 + (currentPage - 1) * dataPerPage }</td>
                                <td>{ education.highest_education }</td>
                                <td>{ education.degree }</td>
                                <td>{ education.employed_in }</td>
                                <td>{ education.occupation }</td>
                                <td>{ education.income }</td>
                                <td>{ education.first_name } { education.last_name } </td>
                                <td>{
                                    <>
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
                                    </>
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

export default EducationDetailsTable;
