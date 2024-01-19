"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JoinSidebar } from "@/components/Shared";
import { HeartIcon, LinkIcon } from "@heroicons/react/20/solid";

export default function page() {
  const [showCopy, setShowCopy] = useState(false);
  const copylink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 2000);
  };

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      {showCopy && (
        <div className="bg-gray-100 text-gray-900 text-center py-3 px-3 rounded-md mb-3 mx-auto w-fit fixed inset-x-0">
          <p className="text-lg">Link copiat in clipboard</p>
        </div>
      )}

      <h2 className="text-4xl font-black mt-8 mb-4">Analize</h2>

      <Image
        src="/images/analize1. png"
        alt="Posts"
        className="xl:hidden flex object-contain h-fit mb-20"
        width={1300}
        height={1300}
        priority={true}
      />

      <div className="flex flex-col">
        <div className="flex gap-16">
          <div className="">
            <div className="mb-5">
              <h2 className="text-4xl font-black inline">
                Stânga Românescă de la voință la (ne)putință
                <LinkIcon
                  className="inline ml-3 w-10 text-sky-500 cursor-pointer"
                  onClick={() => copylink()}
                />
              </h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-base text-gray-600">29 Decembrie 2023</p>
                {/* <p className="text-base text-gray-600 flex gap-1">
                  <HeartIcon className="w-6 text-red-600" />
                  120
                </p> */}
              </div>
            </div>

            <p className="text-lg">
              Suntem condamnați pe vecie ca deciziile ce ne privesc să fie luate
              mereu de alții? Există vreo șansă ca într-o zi voința noastră să
              conteze cu adevărat?Conform Constituției, România este o
              Democrație reprezentativă în care “Alegerile legitimează dreptul
              reprezentanților de a decide în locul și în numele poporului, fără
              a-l mai consulta, pentru o perioadă de timp limitată, după care
              trebuie organizate noi alegeri. ”(1) În privința Democrației,
              înțeleasă în sensul său originar, ca participare a cetățenilor la
              luarea deciziilor din societate, nu sunt prea multe de spus, căci
              ea lipsește cu desăvârșire. Singura interferență a noastră cu
              decizia în societate are loc odată la patru ani, atunci când
              suntem chemați să validăm niște oameni selectați de cei care îi
              dirijează și să aprobăm niște programe politice care niciodată nu
              se pun în practică.
              <br />
              <br />
            </p>
          </div>

          <Image
            src="/images/analize1. png"
            alt="Posts"
            className="xl:block hidden object-contain h-fit"
            width={1500}
            height={1500}
            priority={true}
          />
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16">
          <p className="text-lg lg:w-2/3 lg:mb-20 mb-10">
            Să discutăm însă despre reprezentativitate. Într-o societate
            democratică, toate categoriile sociale și ocupaționale, toate
            minoritățile de orice natură, ar trebui să fie reprezentate la
            conducerea țării. Astfel s-ar asigura pacea socială și echilibrul și
            ar dispărea conflictele majore din societate. Într-un sistem
            democratic nu vom mai avea demonstrații de protest, greve și nu vom
            mai avea nici sindicate, pentru că deciziile vor aparține oamenilor.
            Suntem însă departe de acest obiectiv, cât timp regimul politic
            actual nu a rezolvat nici măcar antagonismul primar născut odată cu
            extinderea sistemului capitalist, acela dintre deținătorii de
            capital și cei obligați să își vândă munca. În timp, acest conflict
            a evoluat, antagonismul din societatea de astăzi opunând sistemul
            capitalist oligarhic și marea masă de cetățeni excluși de la luarea
            deciziilor.
            <br />
            <br />
            EI ŞI NOI
            <br />
            Mai întâi definițiile: Sistemul oligarhic cuprinde persoane și
            companii foarte bogate cuplate la banul public, corporaţii
            multinaţionale monopoliste, entități aparţinand sistemului
            financiar-bancar, toţi marii infractori pe bani publici prinşi şi
            scăpaţi de “Justiţie” și un număr mare de oportuniști care deservesc
            sistemul. Coerenţa și eficienţa sistemului sunt asigurate prin
            implicarea serviciilor de informații iar stabilitatea este asigurată
            prin prezenţa a 100-150. 000 de sinecurişti bine înşurubaţi în
            funcțiile cheie din administraţia centrală şi locala, prin aportul
            permanent asigurat de partidele politice parlamentare. De cealalată
            parte sunt cele 18 milioane de cetățeni care își câștigă existența
            din salariu, tinerii și vârstnicii, toate categoriile
            socio-profesionale și minoritățile ale căror necesități nu sunt
            niciodată satisfăcute. În privința reprezentării la nivelul deciziei
            din societate, exista un dezechilibru major: minoritatea care
            constituie Sistemul deţine controlul absolut în societate, atât la
            nivel economic cât și politic. Care sunt argumentele care vin să
            susţină această afirmaţie?
            <br />
            <br />
            Le întâlnim zi de zi în toate deciziile care se iau la nivel
            politic:Privatizarea a tot ce a reprezentat bunuri publice, în
            diverse forme, începând cu “vănzarea” activelor industriale de stat
            în anii ’90, înstrăinarea resurselor naturale, transformarea
            monopolurilor de stat din domenii strategice(combustibili, energie,
            comunicaţii, etc) în monopoluri private, transferul terenurilor
            agricole în mâna marilor corporații străine, etc. Perpetuarea
            sistemului evazionist prin care marile corporații evită plata
            taxelor către statul roman, prin transferul profiturilor către
            paradisuri fiscale, ajutoare de stat acordate din bani publici
            corporatiilor care sunt în dificultate, scutiri la plata datoriilor
            comerciale, etc. Şi asta în timp ce cetățenii sunt executați silit
            pentru datorii de 1 leu de către ANAF. “Liberalizarea” pieţei
            energiei care a însemnat introducerea unui palier speculativ –
            format din companii clientelare – între producătorii (majoritar de
            stat) şi consumatori, fapt ce a condus la explozia prețurilor pentru
            cetățeni, platite direct sau indirect (prin compensări de la buget)
            de către aceştia. Atacul corporaţiilor asupra ultimelor unități de
            producție energetică de stat, scoase acum la privatizare.
            <br />
            <br />
            Privatizarea efectivă sau mascată a sistemelor de sănătate şi
            învăţământ, ale căror servicii pentru cetățeni sunt tot mai proaste
            și mai scumpe. Organismele de forţă ale societății, Justiția,
            Internele, Apărarea, Serviciile sunt şi ele, din păcate, la remorca
            sistemului oligarhic. Prin pensii speciale, privilegii şi corupție
            se cumpără bunăvoință şi se asigură dependenţa oamenilor care
            lucrează aici, sfidând mulţimea cetăţenilor “ne-speciali”. Toate
            acestea sunt în beneficiul celor din Sistem. Şi lista poate continua
            la nesfârşit, fiecare dintre noi poate adăuga alte şi alte exemple
            ale acestui asalt permanent al Sistemului asupra proprietății
            publice și libertăților ce încă mai apartin cetățenilor. În timp ce
            această minoritate este tot mai bine organizată și mai bogată,
            cetăţenii reprezintă în continuare o masă amorfa, tot mai săracă,
            manipulată printr-un sistem mediatic bine pus la punct şi printr-un
            sistem politic bine antrenat în a mima reprezentarea cetăţenească.
            Poziția Sistemului în societate, pe cât de puternică în aparenţă, pe
            atât de fragilă este în realitate, în condiţiile în care ei au
            nevoie de o validare periodică prin alegeri din partea cetățenilor,
            de aceea se acordă o atenţie majoră eliminarii “din fașă” a oricărui
            nucleu organizat al cetățenilor care doresc să ceară democratizarea
            societății. De fapt, orice formă organizată purtătoare de mesaje
            antisistem reprezintă un pericol major pentru ei. La nivel politic
            s-au consacrat în timp două etichetări: Dreapta care reprezintă
            interesele Sistemului (adică tot ce vedem şi am văzut pe scena
            politică românească în ultimii 30 de ani) şi Stânga care reprezintă
            interesele cetăţenilor în faţa Sistemului şi care lipseşte în
            prezent cu desăvârşire din spațiul public. <br />
            <br />
            DE CE “MERGE” DREAPTA ȘI STANGA NU?Dreapta, înțeleasă ca extensie a
            Sistemului în mediul politic, este foarte bine organizată, foarte
            disciplinată și beneficiază de resurse materiale și financiare
            practic nelimitate. Eficiența rezultă din modul direct de propagare
            a deciziei de la cei ale căror interese trebuie promovate (și care
            asigură finanțarea Sistemului) către reprezentanții politici și din
            administrație. Interesele de moment, armonizate când este cazul, se
            pun în aplicare imediat, indiferent de caracterul lor popular sau
            impopular. De aici și inconsecvența și aparența de haos decizional,
            suprapuse peste decuplarea totală de la promisiunile electorale care
            le-au asigurat perpetuarea în funcții. Ce face Stânga în acest
            timp?Prima eroare majoră a Stângii constă în copierea modelului după
            care Dreapta aparent funcționează: crearea unor programe politice, a
            unor proiecte create în “laborator” în jurul cărora unele persoane,
            de altfel bine intenționate, își imaginează că vor atrage susținerea
            publicului. Zicala “la doi oameni-trei idei” se aplică aici foarte
            bine, ceea ce explică atomizarea mișcării de Stânga și reticența
            pentru colaborare și coagulare. A doua eroare majoră, decurgând din
            prima, este ignorarea contactului efectiv cu cei pe care teoretic îi
            reprezintă şi absenţa comenzii directe de la beneficiar, care
            funcționează perfect în cazul Dreptei. Programele de stânga abundă
            de proiecte utopice, fără legătură cu nevoile şi dorintele imediate
            ale cetățenilor. Într-un program de 40 de pagini este suficient să
            introduci o singură idee greşită sau controversată pentru a-ţi
            îndepărta audienţa. A treia greșeală majoră este adoptarea modelului
            de organizare ierarhic în care comanda vine de la o persoană sau de
            la un grup de interese. Acest model asigură eficiența Sistemului dar
            este autodistructiv în cazul Stângii, unde decizia trebuie să
            aparțină unui beneficiar numeros și atomizat, ale cărui dorințe și
            necesități trebuie întâi identificate și formulate. În plus,
            centralizarea deciziei creează vulnerabilități care au fost
            exploatate fără excepție, prin deturnarea sau denigrarea liderilor.
            <br />
            <br />
            CE SOLUŢII AVEM?În primul rând, trebuie să ieșim din paradigma
            greșită a reprezentării şi să adoptăm modelul care funcționează atât
            de bine în cazul dreptei, acela al comenzii directe. Ceea ce avem de
            făcut este să creăm cadrul organizatoric în care voința cetățenilor
            să se poată exprima, odată cu aceasta și suportul popular va fi
            garantat. În fapt, este vorba de punerea în practică a elementelor
            de baza ale democrației directe. Apoi, rolul activiștilor care își
            asumă sarcina construirii unor organizații de stânga trebuie să fie
            de organizare, informare, conștientizare, de formulare și coagulare
            a cerințelor venite din partea cetățenilor, decât de realizare a
            unor proiecte utopice. Persoanele cu expertiză, experiența și
            viziune trebuie sa devină formatori și lideri de opinie, nu șefi și
            președinți. Resursele precare de care Stânga dispune nu trebuie să
            fie un handicap insurmontabil, cât timp noi nu ne propunem să
            cumpărăm funcții, oameni, mass media sau întregi organizații, așa
            cum practică Dreapta. Atomizarea Stângii, cauzată de orgolii,
            delimitări ideologice utopice și experimente organizatorice greșite
            trebuie înlocuită cu dorința de colaborare, având ca obiectiv suprem
            transferul deciziei în societate către cetățeni. Trebuie să
            conștientizăm impostura și fragilitatea Sistemului care guvernează
            ilegitim asupra unei majorități care așteaptă de atâta vreme o
            deschidere și o democratizare a societății. Daca considerati aceasta
            tema importanta, distribuiti articolul prietenilor vostri.
            <br />
            <br /> Picture Credit: Robin Weiner through awolau. org
          </p>

          <div className="flex flex-col gap-3 lg:w-1/3 ">
            {/* <Image
              src="/images/alexandruradu. jpg"
              alt="Posts"
              className="object-contain h-fit"
              width={180}
              height={180}
              priority={true}
            />
            <h2 className="text-4xl font-black">Alexandru Radu</h2>
            <p className="text-base">
              Editor de film, absolvent al Universității Naționale de Artă
              Teatrală și Cinematografică, liber profesionist pentru mai bine de
              10 ani în domeniu cinematografic și apoi emigrant, interesat de
              îmbunătățirea condițiilor de lucru și viață a societății care l-a
              format, dornic de existența unui statut al artistului în România
              care să recunoască valoarea muncii tuturor celor care mențin
              cultura vie, care să susțină începutul de drum și care să ofere
              atenție și protecție împotrivă vulnerabilităților specifice
              diferitelor profesi artistice
            </p> */}

            <div className="sticky top-10 flex flex-col gap-10 py-4 h-fit">
              <JoinSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
