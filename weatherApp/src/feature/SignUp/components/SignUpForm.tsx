import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useEmailStore from "../hooks/useStore";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema } from "./SignUpForm.schema";
import { Button, FormHelperText, FormControl, Typography } from "@mui/material";
import { SignUpFields } from "./SignUpForm.model";
import { sxFormWrapper, sxSignUpWrapper } from "./SignUpForm.styles";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const addEmail = useEmailStore((state) => state.addEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });
  const onSubmit = (data: FieldValues) => {
    addEmail(data.email);
    navigate("/dashboard");
  };

  return (
    <Box component="div" sx={sxSignUpWrapper}>
     
    <Box sx={sxFormWrapper}>
       <Typography mb={3} textAlign={"center"} variant="h4" color={"#344b5d"}> Please enter your email to see the weather forecast</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl error={!!errors[SignUpFields.email]} fullWidth required>
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Please enter email"
            multiline
            type="email"
            sx={{
              width: "100%",
            }}
            {...register("email")}
          />
        </FormControl>
        <FormHelperText sx={{ color: "red" }}>
          {errors[SignUpFields.email]?.message}
        </FormHelperText>
        <Box textAlign={"end"} mt={3}>
          <Button sx={{ width: "300px" }} type="submit" variant="contained">
            Sign Up to weather forecast
          </Button>
        </Box>
      </form>
      </Box>
    </Box>
  );
};
