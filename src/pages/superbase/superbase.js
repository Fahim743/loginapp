import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
 const supabase = createClient(
  "https://farxsmkpokvifufykvzj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcnhzbWtwb2t2aWZ1ZnlrdnpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNDg1NTAsImV4cCI6MjAxNjcyNDU1MH0.tVam-B7TnZpL-fnivT4AnWQ-2OrKHMi2xopCV5aLm4M"
);

export default supabase;