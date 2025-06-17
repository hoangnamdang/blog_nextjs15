import { createServerClient } from "@supabase/ssr";

export function createClient(req, res) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => {
          const cookieHeader = req.headers.get("cookie") ?? "";
          return cookieHeader.split(";").map((cookieStr) => {
            const [name, ...rest] = cookieStr.trim().split("=");
            return {
              name,
              value: decodeURIComponent(rest.join("=")),
            };
          });
        },
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options); // ✅ Ghi trực tiếp vào response
          });
        },
      },
    }
  );
}
