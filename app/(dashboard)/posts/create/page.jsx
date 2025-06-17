import { Box, Typography } from "@mui/material";
import CreateFormAction from "./create-form-action";
//https://github.com/vercel/next.js/discussions/49625
// Server Action:
// export async function handleSubmitForm(data) {
//   "use server";
//   const response = await fetch(`http://localhost:3000/api/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }
export default function CreatePost() {
  return (
    <Box>
      <Typography component={"h1"} variant="h3">
        Create Post
      </Typography>
      {/* <CreateForm /> */}
      <CreateFormAction />
    </Box>
  );
}
