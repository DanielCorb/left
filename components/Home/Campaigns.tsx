import Image from "next/image";
import Link from "next/link";

import PostsDefault from "public/images/postareDefault.png";

export default function Campaigns() {
  return (
    <div>
      <h2 className="text-4xl font-bold">Campanii</h2>
      <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto my-4">
        <Image
          src={PostsDefault}
          alt="Posts"
          className="md:w-1/2 sm:hidden block w-full"
          width={100}
          height={100}
        />

        <div className="sm:w-2/3 w-full">
          <h2 className="text-2xl font-bold">
            Subvenționarea energiei electrice pentru populație
          </h2>

          <h4 className="my-4 text-base">
            Explozia prețurilor la energie continua și continuă să amplifice
            cele două efecte majore cu care societatea se confruntă astăzi:
            sărăcirea populației și transferul unei părți importante din
            veniturile cetățenilor către buzunarele “băieților deștepți” care
            controlează Sistemul. Presiunile pentru privatizarea companiilor de
            stat (Hidroelectrica) sunt mari și deja au început. Am văzut cum în
            vară energia electrică a avut chiar preț negativ, nimic din toate
            astea nu se reflect însă în prețul plătit de populație.
          </h4>

          <Link href="/posts">
            <h5 className="text-base hover:text-gray-700">
              Citește mai departe...
            </h5>
          </Link>
        </div>

        <div className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden">
          <Image src={PostsDefault} alt="Posts" width={500} height={500} />
        </div>
      </div>
      <Link href="/posts">
        <h5 className="text-lg underline hover:text-gray-700">
          Vezi mai multe campanii &gt;
        </h5>
      </Link>
    </div>
  );
}
