'use client'

export default function FindUs() {
    return (
        <section className="bg-customPinkLight py-24">
            <div >
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pb-12">
                    <h4 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl pb-12">
                        Où nous trouver ?
                    </h4>
                    <p className="mt-6 text-lg text-center leading-8 text-gray-700">
                        Nous sommes situés au 18 Rue Léon Gambetta 59136 Wavrin
                    </p>
                </div>
                <div className="relative w-full max-w-4xl h-96 mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.1628036212765!2d2.930830576834756!3d50.56833727886836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd2b8fbd9afeb3%3A0x70f5303c22ac6b62!2s18%20Rue%20L%C3%A9on%20Gambetta%2C%2059136%20Wavrin!5e0!3m2!1sfr!2sfr!4v1728473927704!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}
