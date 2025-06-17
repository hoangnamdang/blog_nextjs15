import { Typography } from "@mui/material";
import Link from "next/link";

export default function Notfound() {
  return (
    <main>
      <Typography>We could not find a ticket you were looking for.</Typography>
      <Typography>
        Go back to all <Link href="/posts">posts</Link>
      </Typography>
    </main>
  );
}
