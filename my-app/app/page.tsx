"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button }from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-white dark:bg-black text-foreground font-sans">
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-6 py-16 text-center">
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Johana Gaba
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Data IA Profile
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center gap-6 sm:gap-12 w-full">
          
          {/* BACKGROUND */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => toggleSection("background")}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors cursor-pointer group"
            >
              <span>Background</span>
              <ChevronDown 
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  openSection === "background" ? "rotate-180" : ""
                }`} 
              />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${
              openSection === "background" 
                ? "grid-rows-[1fr] opacity-100 mt-3" 
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}>
              <div className="flex flex-col items-center gap-3 text-center">
                {/* SCHOOL */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                  Parcours scolaire
                </p>
                <Button variant="ghost" className="w-full max-w-xs">Epitech Paris</Button>
                <Button variant="ghost" className="w-full max-w-xs">McGill University</Button>

                {/* XP */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  Expériences
                </p>
                 <Link className="" href="/xp#nricher">
                    <Button variant="ghost" className="w-full max-w-xs">nricher</Button>
                </Link>
                <Link className="" href="/xp#Apple Retail France">
                    <Button variant="ghost" className="w-full max-w-xs">Apple Retail France</Button>
                </Link>
                <Link className="" href="/xp#The Tribune">
                    <Button variant="ghost" className="w-full max-w-xs">The Tribune</Button>
                </Link>
                 <Link className="" href="/x#Intact Assurance">
                    <Button variant="ghost" className="w-full max-w-xs">Intact Assurance</Button>
                </Link>
               
              </div>
            </div>
          </div>

          {/* MAIN PROJECTS */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => toggleSection("projects")}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors cursor-pointer group"
            >
              <span>Main Projects</span>
              <ChevronDown 
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  openSection === "projects" ? "rotate-180" : ""
                }`} 
              />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${
              openSection === "projects" 
                ? "grid-rows-[1fr] opacity-100 mt-3" 
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}>
              <div className="overflow-hidden text-xs text-muted-foreground space-y-1 text-center">
                <p className="font-medium text-foreground">B2Life</p>
                <p>Plateforme IA & Réinsertion</p>
              </div>
            </div>
          </div>

          {/* CONTACT ME */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => toggleSection("contact")}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors cursor-pointer group"
            >
              <span>Contact Me</span>
              <ChevronDown 
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  openSection === "contact" ? "rotate-180" : ""
                }`} 
              />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${
              openSection === "contact" 
                ? "grid-rows-[1fr] opacity-100 mt-3" 
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}>
              <div className="overflow-hidden text-xs text-muted-foreground space-y-1 text-center">
                <p><a href="https://www.linkedin.com/in/johana-gaba-54865926b/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></p>
                <p><a href="https://github.com/ivsgabi" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></p>
                <p><a href="mailto:gabajohana77@gmail.com" className="hover:underline">Email</a></p>
              </div>
            </div>
          </div>

          {/* 4. DOWNLOAD CV */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => toggleSection("cv")}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors cursor-pointer group"
            >
              <span>Download CV</span>
              <ChevronDown 
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  openSection === "cv" ? "rotate-180" : ""
                }`} 
              />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${
              openSection === "cv" 
                ? "grid-rows-[1fr] opacity-100 mt-3" 
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}>
              <div className="overflow-hidden text-xs text-muted-foreground text-center">
                <a href="/cv.pdf" download className="underline underline-offset-4 hover:text-foreground">
                  Télécharger (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} Johana Gaba - Tous droits réservés
      </footer>

    </div>
  )
}