"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonLogin() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <Button variant="outlined" onClick={handleLogin}>
      Login
    </Button>
  );
}
