import styles from './page.module.css';

export default function Home() {
  return (

    // Combine CSS Module class with Tailwind utilities using template literals
    // <main className={`${styles.container} bg-slate-950 text-white p-8`}>
    //   <h1 className="text-3xl font-bold tracking-tight">
    //     Next.js + CSS Modules + Tailwind
    //   </h1>
    //   <p className="text-slate-400 mt-2">
    //     Layout handled by CSS Modules, utilities handled by Tailwind.
    //   </p>
    // </main>

    <main className={`${styles.fullscreen_container} p-8`}>
      <h1 className="text-3xl font-bold tracking-tight">
       Johana Gaba
     </h1>
     <p className="text-slate-400 mt-2">
      blablablablabla - to complete,, flex bow btw, everything needs to be responsive
     </p>

    <div className="flex-cols">
     {/* flex box to contain the illustrations */}
     {/* grid to put on the illustration */}
     {/* each star goes bigger when hoover */}
     {/* modal open when click (or whole new page ? not enough material to say tho) */}
    </div>
   </main>

  );
}