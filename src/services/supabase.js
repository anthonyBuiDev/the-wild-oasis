import { createClient } from "@supabase/supabase-js";
export const supabaseUrl =
  "https://eeovkqiefwdzyqijwmyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlb3ZrcWllZndkenlxaWp3bXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTYzNzEsImV4cCI6MjAyNjMzMjM3MX0.Xd37_xo9xRGMlMKi6vYLBtZ-IWTuSQMhJfppJDHbAAg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
