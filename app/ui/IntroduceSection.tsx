const people = [
    {
        name: 'Corinne',
        image: '/images/infirmiere_portrait.webp',
    },
    {
        name: 'Florya',
        image: '/images/infirmiere_portrait.webp',
    },
    {
        name: 'Laurence',
        image: '/images/infirmiere_portrait.webp',
    },
    {
        name: 'Vincent',
        image: '/images/infirmier_portrait.webp',
    },
]

export default function IntroduceSection() {
    return (
        <section id="home" className="py-32 sm:py-32">
            <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight sm:text-5xl pb-24">Le cabinet</h3>
            <div className="mx-auto max-w-7xl grid gap-x-32 gap-y-20 px-6 lg:px-8 lg:grid-cols-2">
                {/* Colonne de gauche : texte */}
                <div className="max-w-2xl mx-auto">
                    <p className="mt-6 text-lg leading-8">
                        Installés au sein du centre médical Ambroise Paré, au cœur de la Maison de Santé Pluridisciplinaire des Weppes à Wavrin, nous offrons une prise en charge globale et individualisée de chaque patient. En collaboration étroite avec les autres professionnels de santé de la MSP, nous travaillons de manière pluridisciplinaire, avec l'appui d'un dossier médical informatisé partagé pour assurer une coordination optimale des soins.
                    </p>
                </div>
                {/* Colonne de droite : liste des personnes */}
                <ul role="list" className="grid gap-x-8 gap-y-12 grid-cols-2 sm:gap-y-16">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex flex-col items-center justify-center gap-x-6">
                                <img
                                    alt={`Portrait de ${person.name}`}
                                    src={person.image}
                                    className="sm:h-32 sm:w-32 h-24 w-24 rounded-full shadow-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                        {person.name}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
