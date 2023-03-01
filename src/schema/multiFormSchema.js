import * as yup from "yup"

export const registerSchema = yup.object().shape({
    phoneNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),

    contactAddress: yup
    .string()
    .required('A contact address is required'),

    states: yup
    .string()
    .oneOf(["Ondo", "Oyo", "Ekiti"])
    .required(),

    localGovt: yup
    .string()
    .oneOf(["Akoko", "Akure-North", "Akure-South"])
    .required(),

    zipCode: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits")
})