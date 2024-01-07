import { JoinSidebar } from "@/components/Shared";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black py-8">Despre Noi</h2>

      <div className="flex md:flex-row flex-col xl:gap-20 lg:gap-14 gap-10 relative">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-black">Ce este LEFT?</h3>
          <p className="text-lg font-black">
            O inițiativă pentru consolidarea unei platforme civico-politice
            pentru însănătoșirea vieții sociale, politice și economice în
            perspectiva anului electoral 2024
          </p>
          <p className="text-lg">
            Urmărim coagularea forțelor civice și politice curate, a
            organizațiilor sindicale oneste, a persoanelor și personalităților
            care îmbrățișează valorile democratice reale și, prin experiența lor
            profesională și civică pot completa viziunea și mijloacele pentru
            fundamentarea proiectului societății viitoare pe care orice om
            cinstit și-o dorește în sinea lui.
          </p>
          <h3 className="text-4xl font-black">Ce ne dorim?</h3>
          <p className="text-lg">
            - Să proiectăm cât mai detaliat fundația solidă pe care să ridicăm
            pilonii viitoarei societăți administrate de un stat ale cărui
            instituții se află sub control cetățenesc, în totală transparență:
          </p>
          <p className="text-lg">
            - Să definim reguli clare pentru ca fiecare cetățean cinstit să se
            poată împlini personal și profesional, fără discriminări, fără
            sacrificii personale sau familiale. Să lucrăm ceea ce ne place și ne
            satisfice.
          </p>
          <p className="text-lg">
            – Să trăim în demnitate, solidaritate, siguranță, echitate și
            echilibru, toleranță având la bază un sistem public nou de educație,
            de sănătate, de protecție socială, de cultură, de justiție.
          </p>
          <p className="text-lg">
            – Să încurajăm libera inițiativă într-o economie reglementată,
            bazată pe concurență loială, cinste, respect, într-un climat de pace
            socială prin întărirea rolului sindicatelor, participarea
            angajaților la beneficii prin deținerea în comun a mijloacelor de
            producție, încurajarea structurilor economice asociative;
          </p>
          <p className="text-lg">
            – Să implicăm statul în dezvoltarea și administrarea
            infrastructurilor și a serviciilor publice.
          </p>
          <p className="text-lg">
            – Să formăm cetățeni educați, onești, informați, sănătoși și activi
            care să poată consolida o societate cu adevărat democratică,
            transparentă și care să lucreze în beneficiul tuturor celor
            cinstiți.
          </p>
          <p className="text-lg">
            Constructia unei societati viitoare pentru oameni, pentru copiii
            noștri, pentru copiii copiilor lor, pentru viitor, pentru
            supravietuirea omenirii și a planetei
          </p>
          <p className="text-lg">
            Da, ne facem bine! Auzim tot mai des expresia ”nu ne mai facem
            bine!”, dar reesemnarea nu este o soluție, pentru că da, ne putem
            face bine. Suntem prea ocupați de probleme, ca să mai căutăm
            soluții, dar ele există și încep cu câteva momente de reflecție, cu
            încercarea de a avea încredere că mai există oameni onești care
            acum, în ceasul al 12-lea, pot construi o alternativă. Nu e chiar
            atât de greu, trebuie doar să ne găsim busola, iar ea se află chiar
            lânga noi, în jurul nostru, este familia, anturajul, sunt cei pentru
            care sărim imediat în ajutor la greu și cu care împărțim momentele
            de bucurie. Hai sa extindem toate astea la nivel de comunitate, de
            societate, să recladim încrederea în cel mai transparent mod posibil
            pentru a implementa aceste principii ale fraternității în toate
            aspectele societății.
          </p>

          <Link href="/manifest">
            <h5 className="text-lg underline hover:text-gray-500">
              Manifestul nostru &gt;
            </h5>
          </Link>
        </div>

        <div className="sticky top-0 flex flex-col gap-10 py-4 h-fit">
          <JoinSidebar />
        </div>
      </div>
    </main>
  );
}
