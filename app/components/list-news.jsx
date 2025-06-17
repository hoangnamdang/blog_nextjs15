import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function ListNews({ news }) {
  return (
    <>
      {news?.map((post) => {
        return (
          <Link key={post.id} href={`/news/${post.id}`}>
            <Box sx={{ mb: 2 }}>
              <Typography component={"h2"} variant="h5">
                {post.title}
              </Typography>
              <Typography>{post.body}</Typography>
            </Box>
          </Link>
        );
      })}
    </>
  );
}
