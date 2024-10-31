import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


    const [navigation, setNavigation] = useState([
      { name: 'مقدمة', href: '#compare', current: true },
      { name: 'البيانات', href: '#card', current: false },
      { name: 'طلاب المقدمين', href: '#student', current: false },
      { name: 'الرسم البياني', href: '#draw', current: false },
      
    ])

  const handleClick = (clickedItem) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItem.name
          ? { ...item, current: true } // Set current to true for the clicked item
          : { ...item, current: false } // Set current to false for other items
      )
    );
  };

  
  
  return (
    <Disclosure as="nav" className="bg-[#94a3b8]  ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gray-900">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">

            <div className="hidden sm:ml-6 sm:block  ">
              <div className="flex space-x-4  ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item)}

                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-white text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}