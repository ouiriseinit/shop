import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const createClient = (cookieStore: Promise<ReadonlyRequestCookies>) => {
  return cookieStore.then((cookies) => {
    return createServerClient(
      supabaseUrl!,
      supabaseKey!,
      {
        cookies: {
          async getAll() {
            // Since we're now working with the actual cookies object, we can use its methods
            const allCookies = await cookies.getAll();
            return allCookies;
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(async (cookie) => {
                const options = { ...cookie.options };
                if (options.expires !== undefined && typeof options.expires === "string") {
                  options.expires = new Date(options.expires);
                }
                // Now we can use the cookies object's set method
                await cookies.set(cookie.name, cookie.value, options);
              });
            } catch (error) {
              console.error("Error setting cookies:", error);
            }
          },
        },
      },
    );
  });
};