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
    MenuItem,
    Select,
} from '@mui/material';
import { useFormik } from 'formik'
import { religionValidation } from '../../Validation/formValidation'

const ReligionAddButton = () => {
    const [open, setOpen] = useState(false);
    // const [religionName, setReligionName] = useState('');
    // const [religionDescription, setReligionDescription] = useState('');
    // const [status, setStatus] = useState(0);
    // const [date, setDate] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // initialze form value

    const initialValues = {
        relname: '',
        reldesc: '',
        status: '',
        date: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: initialValues,
        validationSchema: religionValidation,
        onSubmit: (value) => {
            console.log(value)
        }
    })

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={ handleClickOpen }>
                Add Religion
            </Button>
            <Dialog open={ open } onClose={ handleClose } onSubmit={ handleSubmit }>
                <DialogTitle>Add Religion</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Religion Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name='relname'
                        value={ values.relname }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                    />
                    { errors.relname && touched.relname ? (<p className='text-danger'>{ errors.relname }</p>) : null }
                    <TextField
                        margin="dense"
                        label="Religion Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={ 3 }
                        name='reldesc'
                        value={ values.reldesc }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                    />
                    { errors.reldesc && touched.reldesc ? (<p className='text-danger'>{ errors.reldesc }</p>) : null }
                    <FormControl fullWidth margin="dense">
                        <InputLabel>User_id</InputLabel>
                        <Select
                            name='user_id'
                        // value={values.status}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                        {/* {errors.status && touched.status ? (<p  className='text-danger' className='text-danger'>{errors.status}</p>) : null} */ }
                    </FormControl>
                    <FormControl>
                        <FormLabel id="status-radio-group">Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="status-radio-group"
                            name="status-radio-group status"
                            value={ values.status }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                        >
                            <FormControlLabel value={ 0 } name='status' control={ <Radio /> } label="0" />
                            <FormControlLabel value={ 1 } name='status' control={ <Radio /> } label="1" />
                        </RadioGroup>
                    </FormControl>
                    { errors.status && touched.status ? (<p className='text-danger'>{ errors.status }</p>) : null }
                    <TextField
                        margin="dense"
                        label="Date"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={ {
                            shrink: true,
                        } }
                        name='date'
                        value={ values.date }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                    />
                    { errors.date && touched.date ? (<p className='text-danger'>{ errors.date }</p>) : null }

                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        Cancel
                    </Button>
                    <Button onClick={ handleReset } color="primary">
                        Reset
                    </Button>
                    <Button onClick={ handleSubmit } color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ReligionAddButton;
