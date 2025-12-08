import { supabaseServer } from '@/lib/supabase/server';

export async function getPublicCovers() {
  const supabase = supabaseServer();
  
  const { data, error } = await supabase
    .from('covers')
    .select('section, title, image_url')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching public covers:', error);
    return [];
  }

  return data || [];
}