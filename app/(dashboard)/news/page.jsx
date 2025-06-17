import { Box, Typography } from "@mui/material";
import ListNews from "../../components/list-news";
async function getNews() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts } = await response.json();
  return posts;
}

export default async function News() {
  const news = await getNews();
  return (
    <Box>
      <Typography component={"h1"} variant="h4" mb={2}>
        News
      </Typography>
      <ListNews news={news} />
    </Box>
  );
}
