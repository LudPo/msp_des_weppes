'use client'

const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'Soins', href: '#services' },
    { name: 'Prise en charge', href: '#care' },
    { name: 'Contact', href: '#contact' },
]

export default function HeaderNav() {
    return (
        <nav
            aria-label="Navigation principale"
            className=" sm:relative bg-customGreen dark:bg-customGreenDark shadow-md p-4"
        >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-xl font-semibold text-textTitle dark:text-textTitleDark"
                        aria-current={item.href === '#home' ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}
