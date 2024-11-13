import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    // Formik setup with initial values, validation, and submit handler
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            // Here, you can add logic to handle form submission, e.g., API call
            console.log('Form values:', values);
        },
    });

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" height="20vh">
                <h1>Matrimonial Login </h1>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" height="40vh">
                
                <form onSubmit={formik.handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: '1rem' }}>
                        Login
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default Login;
