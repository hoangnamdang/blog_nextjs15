"use client";
import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

export default function InputField({ name, control, label, ...props }) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
  });
  return (
    <TextField
      ref={ref}
      label={label}
      name={name}
      error={!!error}
      helperText={error?.message || ""}
      {...props}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
}
