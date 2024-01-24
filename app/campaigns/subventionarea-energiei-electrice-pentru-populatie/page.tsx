"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { JoinSidebar } from "@/components/Shared";
import { HeartIcon, LinkIcon } from "@heroicons/react/20/solid";
import { useWindowSize } from "@uidotdev/usehooks";

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

      <h2 className="text-4xl font-black mt-8 mb-4">Campanii</h2>

      <Image
        src="/images/campanii1.png"
        alt="Posts"
        className="xl:hidden flex h-fit mb-10"
        width={1300}
        height={1300}
        objectFit="contain"
        priority
      />

      <div className="flex flex-col">
        <div className="flex gap-14">
          <div className="w-full">
            <div className="mb-5">
              <h2 className="text-4xl font-black inline">
                Subvenționarea energiei electrice pentru populație
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
              Explozia prețurilor la energie continua și continuă să amplifice
              cele două efecte majore cu care societatea se confruntă astăzi:
              sărăcirea populației și transferul unei părți importante din
              veniturile cetățenilor către buzunarele “băieților deștepți” care
              controlează Sistemul. Presiunile pentru privatizarea companiilor
              de stat (Hidroelectrica) sunt mari și deja au început. Am văzut
              cum în vară energia electrică a avut chiar preț negativ, nimic din
              toate astea nu se reflect însă în prețul plătit de populație.
            </p>
          </div>

          <Image
            src="/images/campanii1.png"
            alt="Posts"
            className="xl:flex hidden h-fit"
            width={1500}
            height={1500}
            priority
            objectFit="contain"
          />
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16  mt-10">
          <p className="text-lg lg:w-2/3 lg:mb-20 mb-10">
            Efectele scumpirilor, declanșate de măsurile aberante luate de
            Comisia Europeană, liberalizare și calcul al prețului energiei,
            efecte amplificate de speculanți, inflație și războiul din Ucraina,
            sunt mascate prin măsurile de plafonare luate de guvern. Nu ne dăm
            seama direct dar, această plafonare poate fi considerată cel mai
            mare jaf din bugetul de stat din ultimii ani. Acoperirea diferenței
            dintre costul plătit de consumatori și prețurile stabilite arbitrar
            de furnizori și intermediari, prin transferul de la buget al unor
            sume uriașe și nemeritate către conturile acestora, va avea efecte
            majore asupra stabilității bugetare și asupra veniturilor generale
            ale românilor în anii care urmează.
            <br />
            <br />
            Analiza noastră arată cum bugetul de stat, dar și buzunarele
            românilor sunt spoliate de băieții deștepți din energie, atât ei cât
            și sistemul bancar care îi împrumută, acumulând profituri uriașe,
            doar din pix.
            <br />
            <br />
            Propunerea noastră vine dintr-un calcul simplu și este de a acorda
            tuturor gospodăriilor, consumatorilor casnici, o subvenție pentru
            energia electrică, dar nu în bani, ci direct în energie, adică o
            subvenție de 150 kWh pe lună. Astfel, primii 150 kWh se taxează cu 0
            lei pe factură. La prima vedere pare un efort major, dar calculele
            arată că această subvenție ar aduce la bugetul de stat o economie de
            peste 7 miliarde de lei pe an, iar buzunarele cetățenilor ar fi mai
            pline cu peste 5 miliarde și jumătate de lei anual.
            <br />
            <br />
            Hai să vedem calculele! Subvenția aceasta reprezintă în primul rând
            o măsură anti-sarăcie.
            <br />
            <br />
            În România consumatorii casnici au nevoie de aproximativ 12 TWh pe
            an din totalul de 66 TWh, în medie cam 115 kWh pe lună având în
            Vedere că 4,5 milioane sunt gospodării vulnerabile, cu un consum sub
            100kWh, multe chiar cu 50 kWh pe lună. Această energie reprezintă
            aproximativ 30% din producția de energie a companiilor de stat, cam
            toate construite înainte de 1989 sau finalizate în proporție mare
            înainte de 1989, cazul Cernavodă. Așadar nicio investiție
            capitalistă nu a creat aceste capacități de producție.
            <br />
            <br />
            Prețul de producție este 0,2 lei pe kWh la companiile de stat
            (Hidroelectrica, Nuclearelectrica, CEO, etc) cele care produc
            aproape 90% din necesarul de energie al României. Prețul
            subvenționat este de 0,68 lei și toți plătim astăzi acest preț pe
            fiecare kWh consumat, niciun furnizor nu coboară prețul. Dacă ne
            uităm în contractile de furnizare vedem că prețul este de 1,3 lei
            pentru un kWh.
            <br />
            <br />
            Diferența de la 1,3 lei la 0,68 lei pe kWh se virează direct din
            buget băieților deștepți, ei doar învârt niște hârtii, nu produc, nu
            distribuie. Diferența de la 0,68 la 0,2 leieste virată băieților
            deștepți din buzunarul nostru.
            <br />
            <br />
            Dacă aplicăm aceste diferențe la cei 12TWh o sa vedem adevărata
            anvergură a speculei. Diferența de la 1,3 lei la 0,68 lei pe kWh
            înseamnă 7,44 miliarde de lei pe an, iar diferența de la 0,68 la 0,2
            lei înseamnă alte 5,76 miliarde lei anual.
            <br />
            <br />
            <Image
              src="/images/campanii1-poza1.png"
              alt="Posts"
              className="h-fit"
              width={1500}
              height={1500}
              priority
              objectFit="contain"
            />
          </p>

          <div className="flex flex-col gap-3 lg:w-1/3 sticky top-10 h-fit">
            {/* <h2 className="text-4xl font-black">Susține campania prin:</h2>
            <h2 className="text-4xl font-black">-</h2>
            <h2 className="text-4xl font-black">-</h2>
            <h2 className="text-4xl font-black">-</h2> */}

            <div className="flex flex-col gap-10 py-4 ">
              <JoinSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
