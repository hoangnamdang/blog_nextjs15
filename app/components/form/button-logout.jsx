"use client";
import { Button } from "@mui/material";
import React from "react";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("error");
    }
    router.push("/login");
  };

  return (
    <Button variant="outlined" onClick={handleLogout}>
      Logout
    </Button>
  );
}
