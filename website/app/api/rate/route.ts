
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(req: Request) {
  console.log("--> Requête reçue sur /api/rate");

  try {
    const body = await req.json();

    if (!supabaseUrl || !supabaseKey) {
      console.error("ERREUR : Variables Supabase manquantes");
      return NextResponse.json(
        { error: "Configuration Supabase manquante" },
        { status: 500 }
      );
    }

    const score = Number(body.score);
    const role = String(body.role || "").trim();
    const discoverySource =
      typeof body.discovery_source === "string"
        ? body.discovery_source.trim() || null
        : null;
    const suggestion =
      typeof body.suggestion === "string"
        ? body.suggestion.trim() || null
        : null;

    if (!Number.isInteger(score) || score < 1 || score > 5 || !role) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("ratings").insert({
      score,
      role,
      discovery_source: discoverySource,
      suggestion,
    });

    if (error) {
      console.error("ERREUR Supabase :", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.log("--> Succès insertion !");

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (err) {
    console.error("ERREUR Serveur :", err);

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
