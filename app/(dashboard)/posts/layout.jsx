import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
export const metadata = {
  title: "Posts page",
  description: "Posts page",
};

export default async function PostsLayout({ children }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user) {
    return redirect("/login");
  }
  return <>{children}</>;
}
