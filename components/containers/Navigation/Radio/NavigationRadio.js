import { RadioLink } from '@/components/radioLink';
import getConfig from 'next/config';
import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from 'react';
const { publicRuntimeConfig } = getConfig();

const NavigationRadio = ({ menu, router }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuMobileClickHandler = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false"
                                onClick={menuMobileClickHandler}>
                                <span className="sr-only">Open main menu</span>
                                {openMenu ?
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg> :
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-8 w-auto lg:hidden" src="/vohonline.svg" alt="Your Company" />
                                <img className="hidden h-8 w-auto lg:block" src="/vohonline.svg" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <RadioLink to={`/radio.html`} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                        Trang chủ
                                    </RadioLink>

                                    {
                                        menu.map((val, index) => (
                                            <RadioLink key={val?.uniqId} to={val?.slug &&
                                                val?.uniqId && `/podcast/${val.slug}.${val.uniqId}.html`}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                {val.name}
                                            </RadioLink>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`sm:hidden ${openMenu === true ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <RadioLink to={`/radio.html`} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                            Trang chủ
                        </RadioLink>

                        {
                            menu.map((val, index) => (
                                <RadioLink key={val?.uniqId} to={val?.slug &&
                                    val?.uniqId && `/podcast/${val.slug}.${val.uniqId}.html`}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                    {val.name}
                                </RadioLink>
                            ))
                        }
                    </div>
                </div>
            </nav >


        </>

    )
}
export default withRouter(NavigationRadio);