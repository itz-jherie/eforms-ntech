import * as yup from "yup";

const options = ["Ondo", "Oyo", "Ekiti"];
const localGov = ["Akoko", "Akure north", "Akure South"];

export const registerSchema = yup.object().shape({

    firstName: yup
    .string("First Name should be a string")
    .trim()
    .required("First Name is required")
    .min(3)
    .max(30),

    middleName: yup
    .string("Middle should be a string")
    .trim()
    .required("Middle Name is required")
    .min(3)
    .max(30),

    lastName: yup
    .string("lastName should be a string")
    .trim()
    .required("Last Name is required")
    .min(3)
    .max(30),

    email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),

    password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),

    confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),

    remember: yup
    .boolean().oneOf([true], "Please tick checkbox"),

    /** MultiStep Form 

    
    */
});