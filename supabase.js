import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://klwdxmzjowzieepqxfbv.supabase.co'; // Copy from Supabase dashboard
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsd2R4bXpqb3d6aWVlcHF4ZmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMDQ1MDAsImV4cCI6MjA2MzY4MDUwMH0.-WGa9TlFu6c40fctViiFvtNG_fHPgDjRaBT6TTB870k'; // Copy from Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
