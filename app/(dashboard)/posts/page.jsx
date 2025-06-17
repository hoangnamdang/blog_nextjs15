import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/server";
import ListPost from "../../components/list-post";
async function getPosts() {
  const supabase = await createClient();
  const { data } = await supabase.from("posts").select();
  return data;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>Posts</Typography>
        <Link href={"/posts/create"}>
          <Button variant="contained">Add Post</Button>
        </Link>
      </Stack>
      <ListPost posts={posts} />
      {/* {posts?.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Stack gap={1}>
              <Typography component={"h2"} variant="h4">
                {post.title}
              </Typography>
              <Stack direction={"row"}>
                <Chip label={new Date(post.created_at).toDateString()} />
              </Stack>
              <Typography>{post.shortDescription}</Typography>
              <Divider sx={{ my: 2 }} />
            </Stack>
          </Link>
        );
      })} */}
    </Box>
  );
}
