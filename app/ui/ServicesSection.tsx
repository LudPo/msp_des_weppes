export default function ServicesSection() {
    return (
        <section id="services" className="bg-background dark:bg-backgroundDark py-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-textTitle dark:text-textTitleDark sm:text-5xl pb-12">
                    Les soins
                </h3>
                <p className="mt-6 text-lg text-center leading-8 text-textPar dark:text-textParDark">
                    Le cabinet s&apos;occupe de tous les types de patients, quel que soit leur âge et leur pathologie.
                </p>
                <p className="mt-6 text-lg text-center leading-8 text-textPar dark:text-textParDark">
                    Nous assurons les soins 7j/7 sur rendez-vous au cabinet et à domicile.
                </p>
                <div className="mx-auto mt-12 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-8 text-center">
                    <div className="bg-customGreen dark:bg-customGreenDark col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-textTitle dark:text-textTitleDark">Pansements et soins des plaies</h4>
                    </div>
                    <div className="bg-customGreen dark:bg-customGreenDark col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-textTitle dark:text-textTitleDark">Perfusions et injections</h4>
                    </div>
                    <div className="bg-customGreen dark:bg-customGreenDark col-span-2 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-textTitle dark:text-textTitleDark">Maladie chronique</h4>
                    </div>
                    <div className="bg-customGreen dark:bg-customGreenDark col-span-2 sm:col-start-2 lg:col-start-7 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-textTitle dark:text-textTitleDark">Maintien à domicile</h4>
                    </div>
                    <div className="bg-customGreen dark:bg-customGreenDark col-span-2 col-start-2 sm:col-start-4 lg:col-start-9 rounded-lg p-6 shadow-lg flex items-center justify-center min-h-[200px]">
                        <h4 className="text-xl font-semibold text-textTitle dark:text-textTitleDark">Soins palliatifs</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
