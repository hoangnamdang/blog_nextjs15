"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const [loading, setLoading] = useState();
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setLoading(false);
    if (result?.error) {
      console.log(result.error);
    }
    if (!result?.error) {
      router.refresh();
      router.push("/posts");
    }
  };

  return (
    <Button variant="contained" loading={loading} onClick={handleDelete}>
      Delete
    </Button>
  );
}
