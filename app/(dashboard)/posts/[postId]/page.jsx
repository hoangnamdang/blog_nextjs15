import { Box, Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { createPublicClient } from "../../../../utils/supabase/public-client";
import { createClient } from "../../../../utils/supabase/server";
import DeleteButton from "./delete-button";
export const dynamic = "force-dynamic";
export const generateMetadata = async (context) => {
  const params = await context?.params;
  const postId = params?.postId;
  if (!postId) {
    return {
      title: "Post not found",
      description: "No post ID provided",
    };
  }
  const supabase = await createPublicClient();
  const { data } = await supabase
    .from("posts")
    .select()
    .single()
    .eq("id", postId);
  return {
    title: data?.title || "",
    description: data?.shortDescription || "",
  };
};

export async function generateStaticParams(context) {
  const supabase = await createPublicClient();
  const data = await supabase.from("posts").select();
  return data.data.map((post) => ({
    postsId: post.id,
  }));
}
async function getPost(postId) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select()
    .single()
    .eq("id", postId || "");
  if (!data) {
    return notFound();
  }
  return data;
}
export default async function PostDetail({ params }) {
  const supabase = await createClient();
  const dataParams = await params;
  const post = await getPost(dataParams?.postId);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography component={"h2"}>Post Detail</Typography>
        {post.email === user?.email && <DeleteButton id={post?.id} />}
      </Stack>
      <Typography component={"h1"} variant="h3">
        {post?.title}
      </Typography>
      <Typography>{post?.description}</Typography>
    </Box>
  );
}
