import { Box, Chip, Typography } from "@mui/material";
import { notFound } from "next/navigation";
export const revalidate = 86400;
export async function generateMetadata({ params }) {
  const response = await fetch(`https://dummyjson.com/posts/${params?.newsId}`);
  const post = await response.json();
  return { title: post.title, description: post.body };
}
export async function generateStaticParams() {
  const response = await fetch(`https://dummyjson.com/posts`, {
    next: { revalidate: 86400 },
  });
  const { posts } = await response.json();
  return posts?.map((post) => ({ newsId: String(post.id) }));
}
export default async function DetailNew({ params }) {
  const data = await params;
  const response = await fetch(
    `https://dummyjson.com/posts/${data?.newsId || ""}`
  );
  const post = await response.json();
  if (post.message) {
    notFound();
  }

  return (
    <Box>
      <Typography component={"h1"} variant="h4" mb={2}>
        News detail
      </Typography>
      <Typography component={"h4"} variant="h5">
        {post.title}
      </Typography>
      {post.tags.map((tag, idx) => {
        return <Chip key={idx} label={tag} sx={{ mr: 1 }} />;
      })}
      <Typography>{post.body}</Typography>
    </Box>
  );
}
