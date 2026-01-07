// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// Use ANON key for client-side, or SERVICE_ROLE_KEY for server-only power
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY! 

export const supabase = createClient(supabaseUrl, supabaseKey)