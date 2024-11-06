export default function HeaderTitle() {
    return (
            <div className="flex justify-between items-center gap-8 lg:justify-around p-6 lg:px-8 bg-white shadow-md z-50">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Infirmiers MSP des Weppes
                </h1>
                <a
                    href="tel:0320589898"
                    className="text-xl font-medium text-blue-600 hover:underline block lg:hidden"
                >
                    0320589898
                </a>
                <span className="hidden lg:block text-xl font-medium text-gray-900">
                    0320589898
                </span>
            </div>
    )
}
