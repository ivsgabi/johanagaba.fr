import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(req: Request) {
  console.log("--> Requête reçue sur /api/rate");
  console.log("Supabase URL présente ?", Boolean(supabaseUrl));
  console.log("Supabase Key présente ?", Boolean(supabaseKey));

  try {
    const body = await req.json();
    console.log("Données reçues :", body);

    if (!supabaseUrl || !supabaseKey) {
      console.error("ERREUR : Clés Supabase manquantes dans les variables d'environnement !");
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.from("ratings").insert([
      {
        score: Number(body.score),
        role: String(body.role),
        suggestion: body.suggestion || null,
      },
    ]);

    if (error) {
      console.error("ERREUR Supabase :", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("--> Succès insertion !");
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("ERREUR Serveur :", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}