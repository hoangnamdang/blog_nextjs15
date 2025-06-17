"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import { handleFormSubmitServer } from "../action";

export default function CreateFormAction() {
  const [state, formAction, isPending] = useActionState(handleFormSubmitServer);

  return (
    <Box action={formAction} component={"form"}>
      <Stack gap={2}>
        <TextField name={"title"} label={"Title"} />
        <TextField name={"shortDescription"} label={"ShortDescription"} />
        <TextField name={"description"} label={"Description"} />
        <Button type="submit" loading={isPending} variant="contained">
          Add Post
        </Button>
      </Stack>
    </Box>
  );
}
