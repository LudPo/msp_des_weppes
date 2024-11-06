import Image from "next/image";

interface HeroSectionProps {
  remainingHeight: number;
}
export default function HeroSection({ remainingHeight }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 flex items-center" style={{ height: `${remainingHeight}px` }}>
      <Image
        alt="Hero Background"
        src="/images/background_hero.JPG"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div className="absolute inset-0 bg-white opacity-50 -z-10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Être infirmier, c&apos;est apporter réconfort, soins et compassion chaque jour.
          </h2>
        </div>
      </div>
    </section>
  );
}
