export default function ContactSection() {
    return (
        <section id="contact" className="bg-white py-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl pb-12">
                    Nous contacter
                </h3>
                <p className="mt-6 text-lg text-center leading-8 text-gray-700">
                    Vous pouvez joindre le secrétariat du lundi au vendredi de 8h à 19h45
                    et le samedi de 8h à 13h au :
                </p>
                <a
                    href="tel:0320589898"
                    className="text-sm sm:text-base font-medium text-blue-600 hover:underline block lg:hidden text-center mt-2"
                    aria-label="Appeler le secrétariat au 0320589898"
                >
                    0320589898
                </a>
                <span className="hidden lg:block text-lg font-semibold text-gray-900 text-center">
                    0320589898
                </span>
                <p className="mt-10 text-lg text-center leading-8 text-gray-700">
                    Pour les demandes de soins urgents en dehors des horaires d&apos;ouverture
                    du secrétariat (samedi de 13h à 20h, dimanche et jour férié de 8h à 20h), vous pouvez nous contacter au :
                </p>
                <a
                    href="tel:0652576540"
                    className="text-sm sm:text-base font-medium text-blue-600 hover:underline block lg:hidden text-center mt-2"
                    aria-label="Appeler pour les soins urgents au 0652576540"
                >
                    0652576540
                </a>
                <span className="hidden lg:block text-lg font-semibold text-gray-900 text-center">
                    0652576540
                </span>
            </div>
        </section>
    )
}
