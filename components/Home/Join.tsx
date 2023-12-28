import Link from "next/link";

export default function Join() {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto">
      <div className="lg:w-2/3 md:w-1/2 w-full">
        <h2 className="text-4xl font-bold">Alătură-te</h2>

        <h4 className="my-4 text-base">
          LEFT este o platformă civico-politică ce îsi propune să coaguleze
          organizații civice și politice curate, organizații sindicale oneste,
          persoane fizice, activiști pentru a construi o alternativă puternică
          în vederea alegerilor din 2024. Așteptăm alături organizații și
          persoane cu viziune, cu dorință de a îndrepta lucrurile, oferindu-le o
          platformă de liberă exprimare, democratică, nouă. Aducem în discuție
          valorile, ideile și soluțiile tehnice, legislative și constituționale,
          pentru a depăși criza complexă actuală și a trece la o societate nouă,
          post-capitalistă preocupată să asigure oamenilor și planetei
          sustenabilitate și durabilitate astfel încât viața să merite să fie
          trăită, cu demnitate, empatie, respect. Pentru că este posibil.
        </h4>
      </div>

      <div className="lg:w-1/3 w-1/2 flex flex-col justify-between py-10">
        <Link href="/">
          <h2 className="font-bold text-3xl">Abonează-te la newsletter</h2>
        </Link>

        <Link href="/">
          <h2 className="font-bold text-3xl">Donează</h2>
        </Link>

        <Link href="/">
          <h2 className="font-bold text-3xl">Devino Membru</h2>
        </Link>
      </div>
    </div>
  );
}
