"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { createClient } from "../../../utils/supabase/client";
import AuthForm from "../auth-form";

export default function SignUp() {
  const router = useRouter();
  const handleFormSubmit = async (values) => {
    const supabase = createClient();
    const data = {
      email: values?.username || "",
      password: values?.password || "",
    };

    const { error } = await supabase.auth.signUp({
      ...data,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` },
    });
    if (!error) {
      // router.push("/verify");
      router.push("/");
    }
  };
  return (
    <Box component={"main"} sx={{ mt: 10, textAlign: "center" }}>
      <Typography component={"h1"} variant="h3">
        Signup
      </Typography>
      <AuthForm handleForm={handleFormSubmit} />
    </Box>
  );
}
