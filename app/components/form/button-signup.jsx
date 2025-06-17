"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ButtonSignup() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <Button variant="outlined" onClick={handleSignup}>
      Signup
    </Button>
  );
}
