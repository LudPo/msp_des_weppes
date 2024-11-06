export default function ServicesSection() {
    return (
        <section id="services" className="bg-white py-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl pb-12">
                    Les soins
                </h3>
                <p className="mt-6 text-lg text-center leading-8 text-gray-700">
                    Le cabinet s&apos;occupe de tous les types de patients, quel que soit leur âge et leur pathologie.
                </p>
                <p className="mt-6 text-lg text-center leading-8 text-gray-700">
                    Nous assurons les soins 7j/7 sur rendez-vous au cabinet et à domicile.
                </p>
                <div className="mx-auto mt-12 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-8 text-center">
                    <div className="bg-customGreenLight col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-gray-900">Pansements et soins des plaies</h4>
                    </div>
                    <div className="bg-customGreenLight col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-gray-900">Perfusions et injections</h4>
                    </div>
                    <div className="bg-customGreenLight col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-gray-900">Maladie chronique</h4>
                    </div>
                    <div className="bg-customGreenLight col-span-2 sm:col-start-2 lg:col-start-7 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-gray-900">Maintien à domicile</h4>
                    </div>
                    <div className="bg-customGreenLight col-span-2 col-start-2 sm:col-start-4 lg:col-start-9 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-gray-900">Soins palliatifs</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
