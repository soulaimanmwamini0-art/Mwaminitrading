// supabase-config.js
const SUPABASE_URL = "https://crrazlvbsohvwspdrtkz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNycmF6bHZic29odndzcGRydGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDUxNzYsImV4cCI6MjA5NTM4MTE3Nn0.opzfSgX9Ku4x82-_3rDjKHO-FzkBvAnKzB4W6BMXks0";

try {
    const configOptions = {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    };
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else if (typeof window.supabaseJS !== 'undefined') {
        window.supabase = window.supabaseJS.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else {
        console.error("Supabase CDN library script wrapper was missing at execution runtime.");
    }
} catch (e) {
    console.error("Failed to initialize database client connection:", e);
}
