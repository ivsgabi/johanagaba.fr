"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

type NodeType =
  | "education"
  | "experience"
  | "project"

type GraphNode = {
  id: string
  label: string
  type: NodeType
  x: number
  y: number
  description?: string
  details?: string[]
}

const NODES: GraphNode[] = [
  // EDUCATION
  {
    id:"epitech",
    label:"EPITECH",
    type:"education",
    x:-280,
    y:-130,
    description:
      "Software Engineering & Computer Science",
    details:[
      "C / C++",
      "Software Architecture",
      "Systems Programming"
    ]
  },
  {
    id:"mcgill",
    label:"McGill",
    type:"education",
    x:0,
    y:-260,
    description:
      "Management, Data & Finance",
    details:[
      "Python",
      "Data Analysis",
      "AI"
    ]
  },
  {
    id:"apple",
    label:"Apple",
    type:"experience",
    x:300,
    y:-130,
    description:
      "Retail & Customer Experience",
    details:[
      "Problem Solving",
      "Communication",
      "UX mindset"
    ]
  },
  {
    id:"intact",
    label:"Intact",
    type:"experience",
    x:-330,
    y:120,
    description:
      "Data & Enterprise Software",
    details:[
      "Data",
      "Business systems"
    ]
  },
  {
    id:"tribune",
    label:"The Tribune",
    type:"experience",
    x:300,
    y:140,
    description:
      "Media & Analysis",
    details:[
      "Writing",
      "Analysis"
    ]
  },
  {
    id:"b2life",
    label:"B2Life",
    type:"project",
    x:-120,
    y:250,
    description:
      "AI reinsertion platform",
    details:[
      "Next.js",
      "NestJS",
      "AI chatbot"
    ]
  },
  {
    id:"simulator",
    label:"Customer Simulator",
    type:"project",
    x:130,
    y:300,
    description:
      "Behavior simulation engine",
    details:[
      "Python",
      "Data Science",
      "Machine Learning"
    ]
  }
]

const EDGES = [
  {
    from:"johana",
    to:"epitech"
  },
  {
    from:"johana",
    to:"mcgill"
  },
  {
    from:"johana",
    to:"apple"
  },
  {
    from:"johana",
    to:"intact"
  },
  {
    from:"johana",
    to:"tribune"
  },
  {
    from:"epitech",
    to:"b2life"
  },
  {
    from:"mcgill",
    to:"simulator"
  },
  {
    from:"intact",
    to:"b2life"
  }
]

export default function Home() {
  const [hovered,setHovered] = useState<string|null>(null)
  const [selected,setSelected] = useState<string|null>(null)
  const selectedNode = NODES.find( n=>n.id===selected)

  const isConnected = (
    edge:any )=>{
      if(!hovered)
        return true
    return (
      edge.from===hovered || edge.to===hovered
    )
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background text-foreground flex items-center justify-center" >

      {/* CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full">
        <g transform="translate(50% 50%)">

        {EDGES.map(
          (edge,index)=>{ const from = edge.from==="johana" ? { x:0, y:0 } : NODES.find( n=>n.id===edge.from )
            const to = edge.to==="johana" ? { x:0, y:0 } : NODES.find( n=>n.id===edge.to )
            if(!from || !to)
              return null
            return (
              <motion.line
                key={index}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="currentColor"
                strokeWidth="1"
                opacity={
                  isConnected(edge)
                  ? 0.25
                  : 0.05
                }
              />
            )
          }
        )}
        </g>
      </svg>

      {/* CENTER */}
      <div className="relative z-20 text-center">
        <h1 className="text-6xl font-medium tracking-tight">
          Johana Gaba
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Software Engineer
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          AI · Data · Full Stack
        </p>
        <div className="flex justify-center gap-5 mt-8 text-sm">
          <a href="https://github.com/ivsgabi" target="_blank" rel="noopener noreferrer">
            <img src="github.svg" alt="lien vers mon profil LinkedIn - Johana Gaba" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/johana-gaba-54865926b/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.svg" alt="lien vers mon profil LinkedIn - Johana Gaba" width="30" height="30" />
          </a>
          <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
            <img src="mail.svg" alt="lien vers mon profil LinkedIn - Johana Gaba" width="30" height="30" />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <img src="cv.svg" alt="lien vers mon profil LinkedIn - Johana Gaba" width="30" height="30" />
          </a>
          
        </div>
      </div>

      {/* NODES */}
      {
        NODES.map(node=>(
          <motion.div key={node.id} style={{ x:node.x, y:node.y }} whileHover={{ scale:1.08 }} transition={{ type:"spring", stiffness:300 }}
          onMouseEnter={()=> setHovered(node.id)} onMouseLeave={()=> setHovered(null)} onClick={()=> setSelected(node.id) }
          className="absolute z-30 min-w-24 px-5 py-2 rounded-xl border bg-background cursor-pointer text-xs font-medium flex justify-center">
            {node.label}
          </motion.div>
        ))
      }

      {/* DETAIL PANEL */}
      <AnimatePresence>
      { selectedNode && ( <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0 }}
          className="absolute bottom-10 right-10 z-50 w-72 border bg-background p-6 rounded-2xl"
        >
        <h2 className="font-semibold text-lg"> {selectedNode.label} </h2>
        <p className="text-sm text-muted-foreground mt-2"> {selectedNode.description}</p>

        <ul className="mt-4 space-y-1 text-xs">
        { selectedNode.details?.map( item=>(
              <li 
              key={item}>
                • {item}
              </li>
            )
          )
        }
        </ul>
        </motion.div>
      )
      }
    </AnimatePresence>
  </main>
  )
}