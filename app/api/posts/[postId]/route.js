import { NextResponse } from "next/server";
import { createClient } from "../../../../utils/supabase/server";

export async function DELETE(_, { params }) {
  const dataParams = await params;
  const supabase = await createClient();

  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", dataParams?.postId);

  if (error) {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
  return NextResponse.json({ message: "Item deleted successfully" });
}
