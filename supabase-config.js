// supabase-config.js
const SUPABASE_URL = "https://jyibcdhwwpihmrsirhss.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aWJjZGh3d3BpaG1yc2lyaHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDA4OTUsImV4cCI6MjA5NTM3Njg5NX0.r24FNjg3ukQB_LDB2IUfRnEUQgq_dGiQIyD6pyOFv8c";

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
