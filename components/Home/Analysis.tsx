import Image from "next/image";
import Link from "next/link";

import PostsDefault from "public/images/analize1.png";

export default function Analysis() {
  return (
    <div>
      <Link href="/analysis" className="shadow-2xl">
        <h2 className="text-4xl font-black hover:text-gray-500">Analize</h2>
      </Link>

      <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto my-4">
        <div className="sm:hidden block">
          <Image
            src={PostsDefault}
            alt="Posts"
            className="md:w-1/2 w-full shadow-2xl object-contain"
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="sm:w-2/3 w-full">
          <Link href="/analysis/stanga-romaneasca-de-la-vointa-la-neputinta">
            <h2 className="text-4xl font-black hover:text-gray-500">
              Stânga Românescă de la voință la (ne)putință
            </h2>
          </Link>
          <h4 className="my-4 text-base">
            Suntem condamnați pe vecie ca deciziile ce ne privesc să fie luate
            mereu de alții? Există vreo șansă ca într-o zi voința noastră să
            conteze cu adevărat? Conform Constituției, România este o Democrație
            reprezentativă în care “Alegerile legitimează dreptul
            reprezentanților de a decide în locul și în numele poporului, fără
            a-l mai consulta, pentru o perioadă de timp limitată, după care
            trebuie organizate noi alegeri.”(1) În privința Democrației,
            înțeleasă în sensul său originar, ca participare a cetățenilor la
            luarea deciziilor din societate, nu sunt prea multe de spus, căci ea
            lipsește cu desăvârșire. Singura interferență a noastră cu decizia
            în societate are loc odată la patru ani, atunci când suntem chemați
            să validăm niște oameni selectați de cei care îi dirijează și să
            aprobăm niște programe politice care niciodată nu se pun în
            practică.
          </h4>

          <Link href="/analysis/stanga-romaneasca-de-la-vointa-la-neputinta">
            <h5 className="text-base font-bold hover:text-gray-500">
              Citește mai departe...
            </h5>
          </Link>
        </div>

        <div className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden">
          <Image
            src={PostsDefault}
            alt="Posts"
            width={500}
            height={500}
            priority={true}
            className="shadow-2xl object-contain"
          />
        </div>
      </div>

      <Link href="/analysis">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe analize
        </h5>
      </Link>
    </div>
  );
}
