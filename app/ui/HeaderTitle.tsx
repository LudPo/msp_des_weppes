export default function HeaderTitle() {
    return (
            <div className="flex justify-between items-center gap-8 lg:justify-around p-6 lg:px-8 bg-background dark:bg-backgroundDark shadow-md z-50">
                <h1 className="text-xl sm:text-2xl font-bold text-textTitle dark:text-textTitleDark">
                    Infirmiers MSP des Weppes
                </h1>
                <a
                    href="tel:0320589898"
                    className="text-xl font-medium text-linkBlue dark:text-linkBlueDark hover:underline block lg:hidden"
                >
                    0320589898
                </a>
                <span className="hidden lg:block text-xl font-medium text-textTitle dark:text-textTitleDark">
                    0320589898
                </span>
            </div>
    )
}
