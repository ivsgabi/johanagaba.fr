// import styles from './page.module.css';

// export default function Home() {
//   return (

//     // Combine CSS Module class with Tailwind utilities using template literals
//     // <main className={`${styles.container} bg-slate-950 text-white p-8`}>
//     //   <h1 className="text-3xl font-bold tracking-tight">
//     //     Next.js + CSS Modules + Tailwind
//     //   </h1>
//     //   <p className="text-slate-400 mt-2">
//     //     Layout handled by CSS Modules, utilities handled by Tailwind.
//     //   </p>
//     // </main>

//     <main className={`${styles.fullscreen_container} p-8`}>
//       <h1 className="text-3xl font-bold tracking-tight">
//        Johana Gaba
//      </h1>
//      <p className="text-slate-400 mt-2">
//       blablablablabla - to complete,, flex bow btw, everything needs to be responsive
//      </p>

//      <div className={`${styles.illustration_box} p-8`}>
//       <div className={`${styles.first_illustration} p-8`}> </div>
//       <div className={`${styles.second_illustration} p-8`}> </div>
//       <div className={`${styles.third_illustration} p-8`}> </div>
//       <div className={`${styles.fourth_illustration} p-8`}> </div>
//       <div className={`${styles.fifth_illustration} p-8`}> </div>

//      </div>
      

//     <div className="flex-cols">
     
//      {/* flex box to contain the illustrations */}
//      {/* grid to put on the illustration */}
//      {/* each star goes bigger when hoover */}
//      {/* modal open when click (or whole new page ? not enough material to say tho) */}
//     </div>
//    </main>

//   );
// }

'use client'

import Image from 'next/image';
import styles from './page.module.css';

interface Illustration {
  id: string;
  name: string;
  src: string;
}

const illustrations: Illustration[] = [
  { id: 'badge', name: 'Badge', src: '/illustrations/star-badge.png' },
  { id: 'desk', name: 'Desk', src: '/illustrations/star-desk.png' },
  { id: 'standing', name: 'Standing', src: '/illustrations/star-main.png' },
  { id: 'music', name: 'Music', src: '/illustrations/star-music.png' },
  { id: 'phone', name: 'Phone', src: '/illustrations/star-phone.png' },
];

export default function Home() {
  return (
    <main className={styles.fullscreen_container}>
      {/* Section Textuelle */}
      <div className={styles.text_section}>
        <span className={styles.about_tag}>about</span>
        <h1 className={styles.title}>Johana</h1>
        <p className={styles.subtitle}>
          yvvyftrffrtgyhyyh
        </p>
      </div>

      {/* Rangée Flexbox avec les 5 étoiles */}
      <div className={styles.illustration_box}>
        {illustrations.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.star_item}
            aria-label={item.name}
            onClick={() => console.log(`Clicked on ${item.name}`)}
          >
            {/* Si les images sont dans public/, Next/Image les charge directement */}
            <Image unoptimized
              src={item.src}
              alt={item.name}
              width={120}
              height={120}
              className={styles.star_image}
              priority
            />
          </button>
        ))}
      </div>
    </main>
  );
}