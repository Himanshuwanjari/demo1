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
import { PersonalInfoValidation } from '../../Validation/formValidation';

const AddPersonalInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        bloodGrp: '',
        address: '',
        userId: '',
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues,
        validationSchema: PersonalInfoValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Personal Info
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Personal Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Blood Group"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='bloodGrp'
                        value={values.bloodGrp}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.bloodGrp && touched.bloodGrp ? (<p className='text-danger'>{errors.bloodGrp}</p>) : null}
                    <TextField
                        margin="dense"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='address'
                        value={values.address}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.address && touched.address ? (<p className='text-danger'>{errors.address}</p>) : null}
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

export default AddPersonalInfo;
