import { RadioLink } from '@/components/radioLink';
import getConfig from 'next/config';
import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from 'react';
const { publicRuntimeConfig } = getConfig();

const NavigationRadioFooter = () => {

    return (
        <footer>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className='flex flex-row'>
                    <div className='flex justify-center'>
                        <img src='/vohonline.svg' alt='VOH Online' className='p-2 min-w-[110px] w-[110px]' />
                    </div>
                    <div className='flex flex-col justify-center md:mb-0'>
                        <p>Giấy phép: số 114/GP-TTĐT cấp ngày 08/04/2020</p>
                        <p>© Copyright 2003 - 2023 VOH Online. All rights reserved.</p>
                    </div>
                    <div className='flex flex-col justify-center md:mb-0'>
                        <p>Giám đốc: Lê Công Đồng</p>
                        <div>
                            <RadioLink to='/'>
                                Quảng cáo - Tài trợ
                            </RadioLink> | <RadioLink to='/'>Đối tác</RadioLink>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default withRouter(NavigationRadioFooter);