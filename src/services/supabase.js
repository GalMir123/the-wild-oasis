import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nnouqbohtjnoerekngfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ub3VxYm9odGpub2VyZWtuZ2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NzU2NTcsImV4cCI6MjA0NDQ1MTY1N30.UjmMqXOsvl6OkoW_PGZLRRV2Ocsz5kUa1bwEkIO38AM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
