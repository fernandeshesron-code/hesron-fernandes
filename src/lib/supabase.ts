import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
