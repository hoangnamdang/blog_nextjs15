"use client";
import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "../../../components/form/input";

export default function CreateForm() {
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: { title: "", shortDescription: "", description: "" },
  });
  const handleFormSubmit = async (dataForm) => {
    const response = await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const { data, error } = await response.json();
    if (error) {
      console.log(error);
    }
    if (data) {
      router.push("/posts");
    }
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack gap={2}>
        <InputField name={"title"} control={control} label={"Title"} />
        <InputField
          name={"shortDescription"}
          control={control}
          label={"ShortDescription"}
        />
        <InputField
          name={"description"}
          control={control}
          label={"Description"}
        />
        <Button type="submit" variant="contained">
          Add Post
        </Button>
      </Stack>
    </Box>
  );
}
