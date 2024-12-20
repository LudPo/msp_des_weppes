import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="bg-customGreen dark:bg-customGreenDark py-24">
            <div className="container mx-auto flex justify-center items-center lg:flex-row lg:gap-64 flex-col text-linkBlue dark:text-linkBlueDark">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-48 h-48"
                >
                    <Image
                        alt="facebook"
                        src="./images/facebook-5.svg"
                        // src="/images/facebook-5.svg"
                        fill
                        priority
                    />
                </a>
                <a
                    href="https://www.doctolib.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-48 h-48"
                >
                    <Image
                        alt="Doctolib"
                        src="./images/logo-doctolib.svg"
                        // src="/images/logo-doctolib.svg"
                        fill
                        priority
                    />
                </a>
            </div>
            <div className="text-center mt-12 text-sm text-textPar dark:text-textParDark">
                <p>© 2024 Infirmiers MSP des Weppes. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
