import { NextResponse } from "next/server";
import { createClient } from "../../../../utils/supabase/server";

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=missing_code`
    );
  }

  const res = NextResponse.redirect(requestUrl.origin);

  const supabase = await createClient(request, res); // 👈 truyền req + res

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=session_error`
    );
  }

  return res; // ✅ trả response đã ghi cookie
}
