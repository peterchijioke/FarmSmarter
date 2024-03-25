import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zvwnroyshklcroeaysng.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2d25yb3lzaGtsY3JvZWF5c25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMjY4ODUsImV4cCI6MjAyNjcwMjg4NX0.5Qqp1LgoIKoFaOZJglFMm6Hk1fU1qM1dqIlMpVq6UmE'


export const supabase = createClient(supabaseUrl, supabaseKey)