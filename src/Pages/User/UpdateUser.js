import React, { useEffect, useState } from 'react';
import {
       Button,
       Dialog,
       DialogActions,
       DialogContent,
       DialogTitle,
       TextField,
       Grid,
       FormControl,
       InputLabel,
       Select,
       MenuItem,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { userValidation } from '../../Validation/formValidation';
import metadata from '../../Services/metadata';
import { getUserById } from '../../Services/user-service';

const UpdateUser = (props) => {

       const [updateOpen, setUpdateOpen] = useState(false);
       const [countries, setCountries] = useState([]);
       const [states, setStates] = useState([]);
       const [cities, setCities] = useState([]);
       const [religions, setReligions] = useState([]);
       const [casts, setCasts] = useState([]);
       const [subCasts, setSubCasts] = useState([]);
       const [userDetails, setUserDetails] = useState({});
       const [userId, setUserId] = useState(false);
       const [loading, setLoading] = useState(false); // Add loading state

       useEffect(() => {
              setUserId(props.userId);
              setUpdateOpen(true);
              const fetchData = async () => {
                     try {
                            const [countryRes, stateRes, cityRes, religionRes, castRes, subCastRes] = await Promise.all([
                                   metadata.getAllContries(),
                                   metadata.getAllStates(),
                                   metadata.getAllCities(),
                                   metadata.getAllReligion(),
                                   metadata.getAllCast(),
                                   metadata.getAllsubCast(),
                            ]);
                            setCountries(countryRes);
                            setStates(stateRes);
                            setCities(cityRes);
                            setReligions(religionRes);
                            setCasts(castRes);
                            setSubCasts(subCastRes);
                     } catch (err) {
                            console.error('Data fetching error:', err);
                     }
              };
              fetchData();
       }, [props.userId]);

       useEffect(() => {
              if (userId) {
                     const fetchUserData = async () => {
                            let userData = await getUserById(userId);
                            // console.log('***********************************')
                            // console.log(userData)
                            // console.log(userData[0])
                            setUserDetails(userData[0]);
                            // console.log('***********************************')
                            setLoading(true)
                     };
                     fetchUserData();
              }
       }, [userId]);

       const initialValues = {
              first_name: userDetails.first_name || "",
              last_name: userDetails.last_name || "",
              gender: userDetails.gender || "",
              email_id: userDetails.email_id,
              mobile_no: userDetails.mobile_no,
              mother_tounge: userDetails.mother_tounge,
              country_id: userDetails.country_id || '',
              state_id: userDetails.state_id || '',
              city_id: userDetails.city_id || '',
              rel_id: userDetails.rel_id || '',
              caste_id: userDetails.caste_id || '',
              subcaste_id: userDetails.subcaste_id || '',
              status: userDetails.status || '',
       };
       // console.log(userDetails)
       const handleSubmit = async (values) => {
              console.log(values);
              setUpdateOpen(false);
       }

       const handleUpdateClose = () => {
              setUpdateOpen(false);
              props.onClose();
       }

       return (
              <div>
                     <Dialog open={ updateOpen } onClose={ handleUpdateClose } maxWidth="md" fullWidth>
                            <DialogTitle>Update User</DialogTitle>
                            { loading ? (
                                   <Formik
                                          initialValues={ initialValues }
                                          validationSchema={ userValidation }
                                          onSubmit={ handleSubmit }
                                   >
                                          { ({ errors, touched, handleBlur, handleChange, handleReset, values }) => (

                                                 <Form >
                                                        <DialogContent>
                                                               <Grid container spacing={ 2 }>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <TextField
                                                                                    margin="dense"
                                                                                    label="First Name"
                                                                                    type="text"
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    name='first_name'
                                                                                    value={ values.first_name }
                                                                                    onChange={ handleChange }
                                                                                    onBlur={ handleBlur }
                                                                             />
                                                                             { errors.first_name && touched.first_name ? (<p className='text-danger'>{ errors.first_name }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <TextField
                                                                                    margin="dense"
                                                                                    label="Last Name"
                                                                                    type="text"
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    name='last_name'
                                                                                    value={ values.last_name }
                                                                                    onChange={ handleChange }
                                                                                    onBlur={ handleBlur }
                                                                             />
                                                                             { errors.last_name && touched.last_name ? (<p className='text-danger'>{ errors.last_name }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <TextField
                                                                                    margin="dense"
                                                                                    label="Email"
                                                                                    type="email"
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    name='email_id'
                                                                                    value={ values.email_id }
                                                                                    onChange={ handleChange }
                                                                                    onBlur={ handleBlur }
                                                                             />
                                                                             { errors.email_id && touched.email_id ? (<p className='text-danger'>{ errors.email_id }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <TextField
                                                                                    margin="dense"
                                                                                    label="Mobile No."
                                                                                    type="tel"
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    name='mobile_no'
                                                                                    value={ values.mobile_no }
                                                                                    onChange={ handleChange }
                                                                                    onBlur={ handleBlur }
                                                                             />
                                                                             { errors.mobile_no && touched.mobile_no ? (<p className='text-danger'>{ errors.mobile_no }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <FormControl fullWidth variant="outlined" margin="dense">
                                                                                    <InputLabel>State </InputLabel>
                                                                                    <Select
                                                                                           label="State"
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <FormControl fullWidth variant="outlined" margin="dense">
                                                                                    <InputLabel>City </InputLabel>
                                                                                    <Select
                                                                                           label="City"
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <FormControl fullWidth variant="outlined" margin="dense">
                                                                                    <InputLabel>Religion </InputLabel>
                                                                                    <Select
                                                                                           label="Religion"
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
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <FormControl fullWidth variant="outlined" margin="dense">
                                                                                    <InputLabel>Cast </InputLabel>
                                                                                    <Select
                                                                                           label="Cast"
                                                                                           name='caste_id'
                                                                                           value={ values.caste_id }
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
                                                                             { errors.caste_id && touched.caste_id ? (<p className='text-danger'>{ errors.caste_id }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
                                                                             <FormControl fullWidth variant="outlined" margin="dense">
                                                                                    <InputLabel>SubCast </InputLabel>
                                                                                    <Select
                                                                                           label="SubCast"
                                                                                           name='subcaste_id'
                                                                                           value={ values.subcaste_id }
                                                                                           onChange={ handleChange }
                                                                                           onBlur={ handleBlur }
                                                                                    >
                                                                                           { subCasts
                                                                                                  .filter((subCast) => subCast.caste_id === values.caste_id)
                                                                                                  .map((subCast) => (
                                                                                                         <MenuItem key={ subCast.id } value={ subCast.id }>
                                                                                                                { subCast.subcaste_name }
                                                                                                         </MenuItem>
                                                                                                  )) }
                                                                                    </Select>
                                                                             </FormControl>
                                                                             { errors.subcaste_id && touched.subcaste_id ? (<p className='text-danger'>{ errors.subcaste_id }</p>) : null }
                                                                      </Grid>
                                                                      <Grid item xs={ 12 } sm={ 6 }>
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
                                                                      </Grid>

                                                               </Grid>
                                                        </DialogContent>
                                                        <DialogActions>
                                                               <Button onClick={ handleUpdateClose } color="primary">
                                                                      Cancel
                                                               </Button>
                                                               <Button type="reset" onClick={ () => handleReset() } color="primary">
                                                                      Reset
                                                               </Button>
                                                               <Button type="submit" color="primary" autoFocus>
                                                                      Update
                                                               </Button>
                                                        </DialogActions>
                                                 </Form>
                                          ) }
                                   </Formik>
                            ) : '' }
                     </Dialog>
              </div>
       );
};

export default UpdateUser;
