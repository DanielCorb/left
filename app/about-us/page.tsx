import { JoinSidebar } from "@/components/Shared";
import Member from "@/components/Shared/Member";
import { MemberProps } from "@/utils/types";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  const members: Array<MemberProps> = [
    {
      name: "George Epurescu",
      image: "/images/georgeepurescu.png",
      description:
        "Cercetător științific în domeniul procesării materialelor cu laser la INFLPR Magurele, lider de sindicat și din 2011 activist implicat activ în apărarea drepturilor omului, a mediului, apărarea comunităților aflate sub asediul binomului capital&#x2014; autorități în explorarea și exploatarea resurselor naturale.",
      socials: "",
    },
    {
      name: "Mugurel Popescu",
      image: "/images/mugurelpopescu.png",
      description: `Absolvent Facultate Electrotehnică 1998, specializarea aparate electrice medie și înaltă tensiune, autorizat ANRE pentru proiectare și execuție instalații electrice sub 1000V, inspector SSM din 2014, înfintare sindicate începând cu anul 1990 (E.C.R.A.L. &#x2014; Craiova), președinte sindicat universitar din 2012, președinte federatie invatamant si cercetare din 2016. Organizator sau participant conferințe sindicale internaționale. Contacte naționale și internaționale cu reprezentanți ai clasei muncitoare (asociații, organizații). Redactor șef la revista ”SINDICAT ... sau sindicate” din luna mai anul 2017, cod ISSN 2559 &#x2014; 5237 / ISSN-L 2559 &#x2014; 5237 disponibilă online: <a class="underline text-red" href="https://ssu.ro/index.php/revista/" target="_blank">https://ssu.ro/index.php/revista/</a>`,
      socials: "",
    },
    {
      name: "Alexandru Radu",
      image: "/images/alexandruradu.png",
      description:
        "Editor de film, absolvent al Universității Naționale de Artă Teatrală și Cinematografică, liber profesionist pentru mai bine de 10 ani în domeniu cinematografic și apoi emigrant, interesat de îmbunătățirea condițiilor de lucru și viață a societății care l-a format, dornic de existența unui statut al artistului în România care să recunoască valoarea muncii tuturor celor care mențin cultura vie, care să susțină începutul de drum și care să ofere atenție și protecție împotrivă vulnerabilităților specifice diferitelor profesi artistice.",
      socials: "",
    },
    {
      name: "Daniel Corbix",
      image: "/images/danielcorbix.png",
      description: `Web developer din 2022, editor video liber profesionist cu o experiență de 3 ani în domeniu. De asemenea, streamer pe Twitch începând din 2022 <a class="underline text-red" href="https://www.twitch.tv/DanielCorbix" target="_blank">(twitch.tv/DanielCorbix)</a>, și creator de conținut pe YouTube și TikTok. Personă non-binară, Daniel este un activist implicat, contribuie ca voluntar și colaborează cu diverse organizații politice și ONG-uri, dedicându-și timpul și energia pentru a susține cauzele în care crede. Prin studiul independent al teoriilor politice, economice și sociale, Daniel își propune să contribuie la crearea unei lumi mai bune. Vizează un mediu în care toate persoanele, indiferent de sex, gen, identitate de gen sau abilități, să poată trăi în siguranță, cu nevoile lor ascultate și într-o societate în care oamenii decid colectiv direcția de evoluție a acesteia.`,
      socials: "",
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black hover:text-gray-500 mt-8 mb-4">
        Despre Noi
      </h2>

      <div className="flex md:flex-row flex-col gap-8 relative ">
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-black">Ce este LEFT?</h3>
              <p className="text-lg font-black">
                O inițiativă pentru consolidarea unei platforme civico-politice
                pentru însănătoșirea vieții sociale, politice și economice în
                perspectiva anului electoral 2024
              </p>
              <p className="text-lg">
                Urmărim coagularea forțelor civice și politice curate, a
                organizațiilor sindicale oneste, a persoanelor și
                personalităților care îmbrățișează valorile democratice reale
                și, prin experiența lor profesională și civică pot completa
                viziunea și mijloacele pentru fundamentarea proiectului
                societății viitoare pe care orice om cinstit și-o dorește în
                sinea lui.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-black">Ce ne dorim?</h3>
              <p className="text-lg">
                &#x2014; Să proiectăm cât mai detaliat fundația solidă pe care
                să ridicăm pilonii viitoarei societăți administrate de un stat
                ale cărui instituții se află sub control cetățenesc, în totală
                transparență:
              </p>
              <p className="text-lg">
                &#x2014; Să definim reguli clare pentru ca fiecare cetățean
                cinstit să se poată împlini personal și profesional, fără
                discriminări, fără sacrificii personale sau familiale. Să lucrăm
                ceea ce ne place și ne satisfice.
              </p>
              <p className="text-lg">
                &#x2014; Să trăim în demnitate, solidaritate, siguranță,
                echitate și echilibru, toleranță având la bază un sistem public
                nou de educație, de sănătate, de protecție socială, de cultură,
                de justiție.
              </p>
              <p className="text-lg">
                &#x2014; Să încurajăm libera inițiativă într-o economie
                reglementată, bazată pe concurență loială, cinste, respect,
                într-un climat de pace socială prin întărirea rolului
                sindicatelor, participarea angajaților la beneficii prin
                deținerea în comun a mijloacelor de producție, încurajarea
                structurilor economice asociative;
              </p>
              <p className="text-lg">
                &#x2014; Să implicăm statul în dezvoltarea și administrarea
                infrastructurilor și a serviciilor publice.
              </p>
              <p className="text-lg">
                &#x2014; Să formăm cetățeni educați, onești, informați, sănătoși
                și activi care să poată consolida o societate cu adevărat
                democratică, transparentă și care să lucreze în beneficiul
                tuturor celor cinstiți.
              </p>
              <p className="text-lg">
                Constructia unei societati viitoare pentru oameni, pentru copiii
                noștri, pentru copiii copiilor lor, pentru viitor, pentru
                supravietuirea omenirii și a planetei
              </p>
              <p className="text-lg">
                Da, ne facem bine! Auzim tot mai des expresia ”nu ne mai facem
                bine!”, dar reesemnarea nu este o soluție, pentru că da, ne
                putem face bine. Suntem prea ocupați de probleme, ca să mai
                căutăm soluții, dar ele există și încep cu câteva momente de
                reflecție, cu încercarea de a avea încredere că mai există
                oameni onești care acum, în ceasul al 12-lea, pot construi o
                alternativă. Nu e chiar atât de greu, trebuie doar să ne găsim
                busola, iar ea se află chiar lânga noi, în jurul nostru, este
                familia, anturajul, sunt cei pentru care sărim imediat în ajutor
                la greu și cu care împărțim momentele de bucurie. Hai sa
                extindem toate astea la nivel de comunitate, de societate, să
                recladim încrederea în cel mai transparent mod posibil pentru a
                implementa aceste principii ale fraternității în toate aspectele
                societății.
              </p>

              <Link href="/manifest">
                <h5 className="text-lg underline hover:text-gray-500">
                  -&gt; Manifestul nostru
                </h5>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-5">
            {members.map((member: MemberProps) => (
              <Member member={member} />
            ))}
          </div>
        </div>

        <div className="sticky top-10 flex flex-col gap-10 py-4 h-fit">
          <JoinSidebar />
        </div>
      </div>
    </main>
  );
}
