import * as Yup from 'yup'

export const userValidation = Yup.object({
    first_name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    last_name: Yup.string().min(2).max(25).required("Please Enter Your Last Name"),
    gender: Yup.string().required(),
    email: Yup.string().email().required(),
    mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),
    mother_tounge: Yup.string().min(2).max(25).required("Please Enter Your Mother Tounge"),
    password: Yup.string().min(6).max(6),
    confim_pass: Yup.string().min(6).max(6)

})

export const religionValidation = Yup.object({
    relname: Yup.string().min(2).max(25).required("Please Enter Your Religion Name"),
    reldesc: Yup.string().min(2).max(255).required("Please Enter Your Religion Description"),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const castValidation = Yup.object({
    castname: Yup.string().min(2).max(25).required("Please Enter Your Cast Name"),
    castdesc: Yup.string().min(2).max(255).required("Please Enter Your Cast Description"),
    userId: Yup.string().required(),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const subCastValidation = Yup.object({
    subcastname: Yup.string().min(2).max(25).required("Please Enter Your subCast Name"),
    userId: Yup.string().required(),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const countryValidation = Yup.object({
    countryName: Yup.string().min(2).max(25).required("Please Enter Your Country Name"),
    countrydesc: Yup.string().min(2).max(255).required("Please Enter Your Country Description"),
    userId: Yup.string().required(),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const stateValidation = Yup.object({
    stateName: Yup.string().min(2).max(25).required("Please Enter Your State Name"),
    stateDesc: Yup.string().min(2).max(255).required("Please Enter Your State Description"),
    userId: Yup.string().required(),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const cityValidation = Yup.object({
    cityName: Yup.string().min(2).max(25).required("Please Enter Your State Name"),
    cityDesc: Yup.string().min(2).max(255).required("Please Enter Your State Description"),
    userId: Yup.string().required(),
    status: Yup.string().required(),
    date: Yup.date().required(),
})

export const EduInfoValidation = Yup.object({
    highestEdu: Yup.string().min(2).max(60).required("Please Enter Your Education"),
    degree: Yup.string().min(2).max(60).required("Please Enter Your passing degree"),
    employedIn: Yup.string().min(2).max(60),
    occupation: Yup.string().min(2).max(50),
    income: Yup.string().min(2).max(20),
    userId: Yup.string().required()
})

export const FamilyInfoValidation = Yup.object({
    familyMember: Yup.string().min(1).max(60).required(),
    familyStatus: Yup.string().min(1).max(60),
    fatherOccupation: Yup.string().min(2).max(60),
    motherOccupation: Yup.string().min(2).max(60),
    noOfBrothers: Yup.string().min(1).max(60).required(),
    noOfSisters: Yup.string().min(1).max(50).required(),
    userId: Yup.string().required()
})

export const PersonalInfoValidation = Yup.object({
    bloodGrp: Yup.string().min(1).max(4).required(),
    address: Yup.string().min(2).max(60).required(),
    userId: Yup.string().required(),
})