import { NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";

export async function POST(req) {
  const post = await req.json();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const newPost = {
    ...post,
    email: user?.email || "",
  };
  const { data, error } = await supabase
    .from("posts")
    .insert({ ...newPost })
    .select();
  return NextResponse.json({ data, error });
}
