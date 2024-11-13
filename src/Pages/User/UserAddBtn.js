import React, { useEffect, useState } from 'react';
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
    Box
} from '@mui/material';
import { useFormik } from 'formik';
import { userValidation } from '../../Validation/formValidation'
import metadata from '../../Services/metadata';

const UserAddButton = () => {
    const [open, setOpen] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [religions, setreligions] = useState([]);
    const [casts, setCasts] = useState([]);
    const [subCasts, SetsubCasts] = useState([]);

    useEffect(() => {
        const fetchCountriesdata = async () => {
            try {
                const res = await metadata.getAllContries()
                // console.log("country: ", res)
                setCountries(res)
            } catch (err) {
                console.log('country data not found')
            }
        }
        const fetchStatedata = async () => {
            try {
                const res = await metadata.getAllStates()
                // console.log("state: ", res)
                setStates(res)
            } catch (err) {
                console.log('state data not found')
            }
        }
        const fetchCitiesdata = async () => {
            try {
                const res = await metadata.getAllCities()
                // console.log("cities: ", res)
                setCities(res)
            } catch (err) {
                console.log('city data not found')
            }
        }
        const fetchReligionsdata = async () => {
            try {
                const res = await metadata.getAllReligion()
                // console.log("religions: ", res)
                setreligions(res)
            } catch (err) {
                console.log('Religions data not found')
            }
        }
        const fetchCastsdata = async () => {
            try {
                const res = await metadata.getAllCast()
                // console.log("Casts: ", res)
                setCasts(res)
            } catch (err) {
                console.log('Casts data not found')
            }
        }
        const fetchsubCastsdata = async () => {
            try {
                const res = await metadata.getAllsubCast()
                // console.log("subCasts: ", res)
                SetsubCasts(res)
            } catch (err) {
                console.log('subCasts data not found')
            }
        }
        fetchCountriesdata()
        fetchStatedata()
        fetchCitiesdata()
        fetchReligionsdata()
        fetchCastsdata()
        fetchsubCastsdata()

    }, [])

    const initialValues = {
        fname: '',
        lname: '',
        gender: '',
        email: '',
        mobile_no: '',
        mother_tounge: '',
        password: '',
        confim_pass: '',
        country_id: '',
        state_id: '',
        city_id: '',
        rel_id: '',
        cast_id: '',
        subcast_id: '',
        status: '',
        created: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: initialValues,
        validationSchema: userValidation,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm()
        }
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={ handleClickOpen }>
                Add User
            </Button>
            <Dialog open={ open } onClose={ handleClose } onClick={ handleSubmit } maxWidth="md" fullWidth>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <Box container spacing={ 2 }>
                        <Box item xs={ 6 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                name='fname'
                                value={ values.fname }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.fname && touched.fname ? (<p className='text-danger'>{ errors.fname }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                name='lname'
                                value={ values.lname }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.lname && touched.lname ? (<p className='text-danger'>{ errors.lname }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth margin="dense">
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    name='gender'
                                    value={ values.gender }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                                { errors.gender && touched.gender ? (<p className='text-danger'>{ errors.gender }</p>) : null }
                            </FormControl>
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                                name='email'
                                value={ values.email }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.email && touched.email ? (<p className='text-danger'>{ errors.email }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Mobile no."
                                type="tel"
                                fullWidth
                                variant="outlined"
                                name='mobile_no'
                                value={ values.mobile_no }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.mobile_no && touched.mobile_no ? (<p className='text-danger'>{ errors.mobile_no }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Mother Tongue"
                                type="text"
                                fullWidth
                                variant="outlined"
                                name='mother_tounge'
                                value={ values.mother_tounge }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.mother_tounge && touched.mother_tounge ? (<p className='text-danger'>{ errors.mother_tounge }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="outlined"
                                name='password'
                                value={ values.password }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.password && touched.password ? (<p className='text-danger'>{ errors.password }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                variant="outlined"
                                name='confim_pass'
                                value={ values.confim_pass }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.confim_pass && touched.confim_pass ? (<p className='text-danger'>{ errors.confim_pass }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>Country</InputLabel>
                                <Select
                                    label="Country"
                                    name='country_id'
                                    value={ values.country_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { countries.map((country) => (
                                        <MenuItem key={ country.id } value={ country.id }>
                                            { country.country_name }
                                        </MenuItem>
                                    )) }
                                </Select>
                            </FormControl>
                            { errors.country_id && touched.country_id ? (<p className='text-danger'>{ errors.country_id }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>State ID</InputLabel>
                                <Select
                                    label="State ID"
                                    name='state_id'
                                    value={ values.state_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { states
                                        .filter((state) => state.cuntry_id === values.country_id) // Filter states based on selected country
                                        .map((state) => (
                                            <MenuItem key={ state.id } value={ state.id }>
                                                { state.state_name }
                                            </MenuItem>
                                        )) }
                                </Select>
                            </FormControl>
                            { errors.state_id && touched.state_id ? (<p className='text-danger'>{ errors.state_id }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>City ID</InputLabel>
                                <Select
                                    label="City ID"
                                    name='city_id'
                                    value={ values.city_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { cities
                                        .filter((city) => city.state_id === values.state_id)
                                        .map((city) => (
                                            <MenuItem key={ city.id } value={ city.id }>
                                                { city.city_name }
                                            </MenuItem>
                                        )) }
                                </Select>
                            </FormControl>
                            { errors.city_id && touched.city_id ? (<p className='text-danger'>{ errors.city_id }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>Religion ID</InputLabel>
                                <Select
                                    label="Religion ID"
                                    name='rel_id'
                                    value={ values.rel_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { religions.map((religion) => (
                                        <MenuItem key={ religion.id } value={ religion.id }>
                                            { religion.religion_name }
                                        </MenuItem>
                                    )) }
                                </Select>
                            </FormControl>
                            { errors.rel_id && touched.rel_id ? (<p className='text-danger'>{ errors.rel_id }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>Cast ID</InputLabel>
                                <Select
                                    label="Cast ID"
                                    name='cast_id'
                                    value={ values.cast_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { casts
                                        .filter((cast) => cast.rel_id === values.rel_id)
                                        .map((cast) => (
                                            <MenuItem key={ cast.id } value={ cast.id }>
                                                { cast.caste_name }
                                            </MenuItem>
                                        )) }
                                </Select>
                            </FormControl>
                            { errors.cast_id && touched.cast_id ? (<p className='text-danger'>{ errors.cast_id }</p>) : null }
                        </Box>
                        <Box item xs={ 12 } sm={ 6 }>
                            <FormControl fullWidth variant="outlined" margin="dense">
                                <InputLabel>SubCast ID</InputLabel>
                                <Select
                                    label="SubCast ID"
                                    name='subcast_id'
                                    value={ values.subcast_id }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    { subCasts
                                        .filter((subCast) => subCast.caste_id === values.cast_id)
                                        .map((subCast) => (
                                            <MenuItem key={ subCast.id } value={ subCast.id }>
                                                { subCast.subcaste_name }
                                            </MenuItem>
                                        )) }
                                </Select>
                            </FormControl>
                            { errors.subcast_id && touched.subcast_id ? (<p className='text-danger'>{ errors.subcast_id }</p>) : null }
                        </Box>
                        <Box item xs={ 6 } sm={ 6 }>
                            <FormControl fullWidth margin="dense">
                                <InputLabel>Status</InputLabel>
                                <Select
                                    name='status'
                                    value={ values.status }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="0">0</MenuItem>
                                </Select>
                                { errors.status && touched.status ? (<p className='text-danger'>{ errors.status }</p>) : null }
                            </FormControl>
                        </Box>
                        <Box item xs={ 6 } sm={ 6 }>
                            <TextField
                                margin="dense"
                                label="Created Date"
                                type="date"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={ {
                                    shrink: true,
                                } }
                                name='created'
                                value={ values.created }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                            { errors.created && touched.created ? (<p className='text-danger'>{ errors.created }</p>) : null }
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        Cancel
                    </Button>
                    <Button onClick={ handleReset } color="primary">
                        Reset
                    </Button>
                    <Button onClick={ handleSubmit } color="primary" >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UserAddButton
