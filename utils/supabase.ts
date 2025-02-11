import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

const supabaseUrl = config.public.NUXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = config.public.NUXT_PUBLIC_SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)
