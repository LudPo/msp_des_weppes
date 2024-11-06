import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { PlusCircleIcon, MinusCircleIcon, SunIcon, MoonIcon, EyeIcon } from '@heroicons/react/16/solid'
import { IoAccessibility } from "react-icons/io5";

export default function AccessibilityMenu() {
  return (
    <div className="fixed bottom-4 right-4  text-right z-50">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-full bg-blue-600 p-2 text-white shadow-md focus:outline-none">
          <IoAccessibility className="w-8 h-8" />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-lg bg-white shadow-lg text-gray-900 focus:outline-none"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-2 px-4 hover:bg-gray-100">
              <PlusCircleIcon className="w-5 h-5 text-blue-600" />
              Augmenter la taille de police
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-2 px-4 hover:bg-gray-100">
              <MinusCircleIcon className="w-5 h-5 text-blue-600" />
              Diminuer la taille de police
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-gray-200" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-2 px-4 hover:bg-gray-100">
              <SunIcon className="w-5 h-5 text-yellow-500" />
              Mode lumineux
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-2 px-4 hover:bg-gray-100">
              <MoonIcon className="w-5 h-5 text-gray-700" />
              Mode sombre
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-2 px-4 hover:bg-gray-100">
              <EyeIcon className="w-5 h-5 text-green-500" />
              Augmenter le contraste
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
