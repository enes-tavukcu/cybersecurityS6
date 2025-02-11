import { supabase } from "@/utils/supabase";

export const useTierList = async () => {
  const { data, error } = await supabase.from("tierlist").select("*");

  if (error) {
    console.error("Erreur de récupération des données:", error.message);
    return [];
  }

  return data;
};
