"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import InputField from "../components/form/input";

import { yupResolver } from "@hookform/resolvers/yup";

export default function AuthForm({ handleForm }) {
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("enter your email please!")
      .min(6, "email at least 6 character"),
    password: Yup.string()
      .required("enter your password please!")
      .min(6, "password at least 6 character"),
  });
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setShowPassword((preShow) => !preShow);
  };
  const handleFormSubmit = async (values) => {
    handleForm(values);
  };
  return (
    <Box component={"main"} sx={{ width: 300, margin: "0 auto" }}>
      <Stack component={"form"} onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          name={"username"}
          control={control}
          label={"Username"}
          sx={{ mb: 2 }}
        />{" "}
        <InputField
          name={"password"}
          control={control}
          label={"password"}
          variant="outlined"
          sx={{ mb: 2 }}
          type={showPassword ? "text" : "password"}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
