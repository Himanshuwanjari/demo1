import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import { FamilyInfoValidation } from '../../Validation/formValidation';

const AddFamilyInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        familyMember: '',
        familyStatus: '',
        fatherOccupation: '',
        motherOccupation: '',
        noOfBrothers: '',
        noOfSisters: '',
        userId: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues,
        validationSchema: FamilyInfoValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Family Info
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Add Family Info</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Family Member"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='familyMember'
                        value={values.familyMember}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.familyMember && touched.familyMember ? (<p className='text-danger'>{errors.familyMember}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Family Status"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='familyStatus'
                        value={values.familyStatus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.familyStatus && touched.familyStatus ? (<p className='text-danger'>{errors.familyStatus}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Father's Occupation"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='fatherOccupation'
                        value={values.fatherOccupation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.fatherOccupation && touched.fatherOccupation ? (<p className='text-danger'>{errors.fatherOccupation}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Mother's Occupation"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='motherOccupation'
                        value={values.motherOccupation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.motherOccupation && touched.motherOccupation ? (<p className='text-danger'>{errors.motherOccupation}</p>) : null}
                    <TextField
                        margin="dense"
                        label="No. of Brothers"
                        type="number"
                        fullWidth
                        variant="outlined"
                        name='noOfBrothers'
                        value={values.noOfBrothers}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.noOfBrothers && touched.noOfBrothers ? (<p className='text-danger'>{errors.noOfBrothers}</p>) : null}
                    <TextField
                        margin="dense"
                        label="No. of Sisters"
                        type="number"
                        fullWidth
                        variant="outlined"
                        name='noOfSisters'
                        value={values.noOfSisters}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.noOfSisters && touched.noOfSisters ? (<p className='text-danger'>{errors.noOfSisters}</p>) : null}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>User ID</InputLabel>
                        <Select
                            name='userId'
                            value={values.userId}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                        {errors.userId && touched.userId ? (<p className='text-danger'>{errors.userId}</p>) : null}
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleReset} color="primary">Reset</Button>
                    <Button onClick={handleSubmit} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddFamilyInfo;
