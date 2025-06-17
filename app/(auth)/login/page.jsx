"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { createClient } from "../../../utils/supabase/client";
import AuthForm from "../auth-form";

export default function Login() {
  const router = useRouter();
  const handleFormSubmit = async (values) => {
    const supabase = createClient();
    const dataLogin = {
      email: values?.username || "",
      password: values?.password || "",
    };

    const { error, data } = await supabase.auth.signInWithPassword(dataLogin);

    if (error) {
      console.error("Login error", error);
      router.push("/error");
      return;
    }

    if (!data?.session) {
      router.push("/error");
      return;
    }
    router.push("/");
  };
  return (
    <Box component={"main"} sx={{ mt: 10, textAlign: "center" }}>
      <Typography component={"h1"} variant="h3">
        Login
      </Typography>
      <AuthForm handleForm={handleFormSubmit} />
    </Box>
  );
}
