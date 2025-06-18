"use client";
import { Button } from "@mui/material";
import { useTransition } from "react";
import { handleDelete } from "../action";

export default function DeleteButtonAction({ id }) {
  const [isPending, startTransition] = useTransition();
  const handleT = () => {
    startTransition(() => {
      handleDelete(id);
    });
  };
  return (
    <Button variant="contained" loading={isPending} onClick={handleT}>
      Delete
    </Button>
  );
}
