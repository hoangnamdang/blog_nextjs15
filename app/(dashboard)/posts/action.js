"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

export const handleFormSubmitServer = async (prevState, dataF) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const dataForm = {
    title: dataF.get("title"),
    shortDescription: dataF.get("shortDescription"),
    description: dataF.get("description"),
    email: user?.email || "",
  };
  const { error } = await supabase.from("posts").insert({ ...dataForm });
  if (error) {
    redirect("/error");
  }
  revalidatePath("/posts", "page");
  redirect("/posts");
};

export const handleDelete = async (id) => {
  const supabase = await createClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/posts", "page");
  redirect("/posts");
};
