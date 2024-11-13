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
import { EduInfoValidation } from '../../Validation/formValidation';

const AddEducationDetails = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        highestEdu: '',
        degree: '',
        employedIn: '',
        occupation: '',
        income: '',
        userId: '',
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues,
        validationSchema: EduInfoValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Education Details
            </Button>
            <Dialog open={open} onClose={handleClose} onClick={handleSubmit}>
                <DialogTitle>Add Education Details</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Highest Education"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='highestEdu'
                        value={values.highestEdu}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.highestEdu && touched.highestEdu ? (<p className='text-danger'>{errors.highestEdu}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Degree"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='degree'
                        value={values.degree}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.degree && touched.degree ? (<p className='text-danger'>{errors.degree}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Employed In"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='employedIn'
                        value={values.employedIn}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.employedIn && touched.employedIn ? (<p className='text-danger'>{errors.employedIn}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Occupation"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='occupation'
                        value={values.occupation}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.occupation && touched.occupation ? (<p className='text-danger'>{errors.occupation}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Income"
                        type="number"
                        fullWidth
                        variant="outlined"
                        name='income'
                        value={values.income}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.income && touched.income ? (<p className='text-danger'>{errors.income}</p>) : null}
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

export default AddEducationDetails;
