import Image from "next/image";

interface CareSectionProps {
    isDarkMode: boolean;
}
export default function CareSection({ isDarkMode }: CareSectionProps) {
    return (
        <section
            id="care"
            className="relative bg-fixed bg-contain bg-repeat py-24"
            style={{
                backgroundImage: "url('./images/background_care.png')",
                // backgroundImage: "url('/images/background_care.png')",
                backgroundSize: "500px"
            }}
        >
            <div className="absolute inset-0 bg-background dark:bg-backgroundDark"
                style={{ opacity: isDarkMode ? '0.8' : '0.7' }}>
            </div>
            <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-20">
                <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-textTitle dark:text-textTitleDark sm:text-5xl pb-12">
                    Prise en charge
                </h3>
                <p className="mt-6 text-lg text-center leading-8 text-textPar dark:text-textParDark">
                    Les honoraires pratiqués par les praticiens du cabinet sont
                    conventionnés par l&apos;assurance maladie.
                </p>
                <div className="mx-auto mt-12 grid grid-cols-2 gap-8 text-center">
                    <div className="relative w-full h-60">
                        <Image
                            alt="tiers payant"
                            src="./images/tiers_payant.png"
                            // src="/images/tiers_payant.png"
                            fill
                            sizes="15rem"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-60">
                        <Image
                            alt="carte vitale"
                            src="./images/carte_vitale.png"
                            // src="/images/carte_vitale.png"
                            fill
                            sizes="15rem"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <p className="mt-6 text-lg text-center leading-8 text-textPar dark:text-textParDark">
                    Pour une prise en charge optimale, préparez votre carte vitale, votre
                    carte de mutuelle ainsi que votre ordonnance médicale.
                </p>
            </div>
        </section>
    )
}
