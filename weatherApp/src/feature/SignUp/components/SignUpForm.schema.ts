import * as Yup from "yup";

import { SignUpFields } from "./SignUpForm.model";

export const signUpFormSchema = Yup.object().shape({
    [SignUpFields.email]: Yup.string().email().required().label("Email"),
});
