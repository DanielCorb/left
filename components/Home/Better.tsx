import Image from "next/image";
import Link from "next/link";

import PostsDefault from "public/images/postareDefault.png";

export default function Better() {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto">
      <div className="sm:hidden block">
        <Image
          src={PostsDefault}
          alt="Posts"
          className="md:w-1/2 w-full"
          width={100}
          height={100}
          priority
          objectFit="contain"
        />
      </div>

      <div className="sm:w-2/3 w-full">
        <Link href="/manifest">
          <h2 className="text-4xl font-black hover:text-gray-500">
            Ne mai facem bine? DA!
          </h2>
        </Link>

        <h4 className="my-4 text-base">
          Auzim tot mai des expresia ”nu ne mai facem bine!”, dar resemnarea nu
          este o soluție, pentru că da, ne putem face bine. Suntem prea ocupați
          de probleme, ca să mai căutăm soluții, dar ele există și încep cu
          câteva momente de reflecție, cu încercarea de a avea încredere că mai
          există oameni onești care acum, în ceasul al 12-lea, pot construi o
          alternativă. Nu e chiar atât de greu, trebuie doar să ne găsim busola,
          iar ea se află chiar lângă noi, în jurul nostru, este familia,
          anturajul, sunt cei pentru care sărim imediat în ajutor la greu și cu
          care împărțim momentele de bucurie. Hai sa extindem toate astea la
          nivel de comunitate, de societate, să reclădim încrederea în cel mai
          transparent mod posibil pentru a implementa aceste principii ale
          fraternității în toate aspectele societății.
        </h4>

        <Link href="/manifest">
          <h5 className="text-lg underline hover:text-gray-500">
            -&gt; Manifestul nostru
          </h5>
        </Link>
      </div>

      <div className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden">
        <Image
          src={PostsDefault}
          alt="Posts"
          width={500}
          height={500}
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
