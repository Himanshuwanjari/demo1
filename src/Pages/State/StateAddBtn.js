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
import { stateValidation } from '../../Validation/formValidation';

const StateAddButton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        stateName: '',
        stateDesc: '',
        userId: '',
        status: '',
        date: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues,
        validationSchema: stateValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add State
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add State</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="State Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='stateName'
                        value={values.stateName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.stateName && touched.stateName ? (<p className='text-danger'>{errors.stateName}</p>) : null}
                    <TextField
                        margin="dense"
                        label="State Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={3}
                        name='stateDesc'
                        value={values.stateDesc}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.stateDesc && touched.stateDesc ? (<p className='text-danger'>{errors.stateDesc}</p>) : null}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
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

export default StateAddButton;
