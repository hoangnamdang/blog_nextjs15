import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default async function ListPost({ posts }) {
  return (
    <>
      {posts?.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="h1">
                  {post.title}
                </Typography>
                <Stack direction={"row"}>
                  <Chip label={new Date(post.created_at).toDateString()} />
                </Stack>
                <Typography sx={{ color: "text.secondary" }}>
                  {post.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
