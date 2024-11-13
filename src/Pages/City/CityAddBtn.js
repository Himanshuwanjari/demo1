import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import { cityValidation } from '../../Validation/formValidation';

const CityAddButton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        cityName: '',
        cityDesc: '',
        userId: '',
        status: '',
        date: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues,
        validationSchema: cityValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add City
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add City</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="City Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='cityName'
                        value={values.cityName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.cityName && touched.cityName ? (<p className='text-danger'>{errors.cityName}</p>) : null}
                    <TextField
                        margin="dense"
                        label="City Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={3}
                        name='cityDesc'
                        value={values.cityDesc}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.cityDesc && touched.cityDesc ? (<p className='text-danger'>{errors.cityDesc}</p>) : null}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>User_id</InputLabel>
                        <Select
                            name='userId'
                            value={values.userId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                        {errors.userId && touched.userId ? (<p className='text-danger'>{errors.userId}</p>) : null}
                    </FormControl>
                    <FormControl>
                        <FormLabel id="status-radio-group">Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="status-radio-group"
                            name='status'
                            value={values.status}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        >
                            <FormControlLabel value={0} name='status' control={<Radio />} label="0" />
                            <FormControlLabel value={1} name='status' control={<Radio />} label="1" />
                        </RadioGroup>
                        {errors.status && touched.status ? (<p className='text-danger'>{errors.status}</p>) : null}
                    </FormControl>
                    <TextField
                        margin="dense"
                        label="Date"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name='date'
                        value={values.date}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.date && touched.date ? (<p className='text-danger'>{errors.date}</p>) : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleReset} color="primary">
                        Reset
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CityAddButton;
