import { Suspense } from "react";
import ListNews from "../components/list-news";
import Loading from "./loading";
async function getNews() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts } = await response.json();
  return posts;
}

export default async function Home() {
  const listNews = await getNews();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ListNews news={listNews} />
      </Suspense>
    </>
  );
}
