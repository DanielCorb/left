import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/LEFT-Libertate-Egalitate-Fraternitate-Toleran%C8%9B%C4%83/100095630493224/",
      icon: "/images/facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/go_left_oficial/",
      icon: "/images/instagram.svg",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@LEFT-Romania",
      icon: "/images/youtube.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@go_left_oficial",
      icon: "/images/tiktok.svg",
    },
  ];
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto">
      <div className="lg:w-2/3 md:w-1/2 w-full">
        <h2 className="text-4xl font-bold">Contact</h2>

        <h4 className="my-4 text-base">
          Noi vrem sa înaintăm spre un orizont pașnic, sănătos și prosper pentru
          fiecare dintre noi. Prosperitatea nu trebuie sa depindă de trimiterea
          sau păstrarea în precaritate a altora, aceasta este dezumanizare.
          Sănătatea fiecăruia depinde în mare măsură de sănătatea celor din jur
          și de calitatea mediului. Iar pacea este absoluta și poate exista doar
          pentru toți sau pentru nimeni.
        </h4>
        <h4 className="my-4 text-base">
          Siguranță, sănătate, educație, servicii publice robuste și gratuite,
          un mediu sănătos și un echilibru ecologic echitabil sunt necesare
          pentru o viață trăită cu demnitate.
        </h4>
        <h4 className="my-4 text-base">
          Ne organizam pentru a construi un viitor pașnic în care toți oamenii
          vor avea spațiul și libertatea de a se dezvolta și de a-și exprima
          propria individualitate și opiniile în armonie cu animalele sălbatice
          și mediul înconjurător.
        </h4>
      </div>

      <div className="lg:w-1/3 w-1/2 flex flex-col justify-between py-10">
        <Link href="/">
          <h2 className="font-bold text-2xl hover:text-gray-700">
            Ia legătura cucoordonatorii platformei LEFT
          </h2>
        </Link>
        <Link href="/">
          <h2 className="font-bold text-2xl hover:text-gray-700">
            e-mail: <br /> contact@danefacembine.ro
          </h2>
        </Link>

        <div className="flex gap-4 justify-between">
          {socials.map((social, index) => (
            <Link
              href={social.url}
              key={index}
              className="hover:scale-150 transition-all"
              target="_blank"
            >
              <div className="flex items-center gap-2 hover:text-gray-700">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
