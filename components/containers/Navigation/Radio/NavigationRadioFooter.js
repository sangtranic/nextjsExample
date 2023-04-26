import { RadioLink } from '@/components/radioLink';
import getConfig from 'next/config';
import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from 'react';
const { publicRuntimeConfig } = getConfig();

const NavigationRadioFooter = () => {

    return (
        <footer className="md sticky top-0 z-20 mx-4 mt-4 bg-podcast-white header text-podcast-body-2 md:text-podcast-caption-1">
            <div className="flex flex-col justify-between pt-6 border-t border-podcast-neutral-6/[0.38] md:flex-row" >
                <div className="container flex flex-row flex-wrap w-full pb-4 md:flex-nowrap mb:pb-0 md:items-end">
                    <div className="flex justify-center order-1 h-fit md:order-none">
                        <img
                            className="min-w-[110px] w-[110px]"
                            src="/vohonline.svg"
                            alt="Voh podcast"
                        />
                    </div>

                    <div
                        className="flex flex-col mx-0 md:mx-8 md:mb-0 mb-8 justify-between w-full md:flex-row md:basis-[unset] md:max-w-[unset] md:shrink-[unset] md:grow-[unset] basis-full max-w-full shrink-0 grow-0"
                    >
                        <div className="flex flex-col">
                            <span> Giấy phép: số 114/GP-TTĐT cấp ngày 08/04/2020 </span>

                            <span>© Copyright 2003 - 2023 VOH Online. All rights reserved.</span>

                        </div>
                        <div className="flex flex-col flex-wrap">
                            <div>Giám đốc: Lê Công Đồng</div>

                            <div>
                                <a
                                    href="https://www.vohad.com.vn/"
                                    rel="nofollow noopener"
                                    target="_blank"
                                >
                                    Quảng cáo - Tài trợ
                                </a>

                                |

                                <a
                                    href="https://voh.com.vn/doitac.html"
                                    rel="nofollow noopener"
                                    target="_blank"
                                >Đối tác</a
                                >

                                |

                                <a
                                    href="https://voh.com.vn/lien-he.html"
                                    rel="nofollow noopener"
                                    target="_blank"
                                >
                                    Tòa soạn
                                </a>

                                |

                                <span
                                ><a
                                    href="https://radio.voh.com.vn"
                                    rel="nofollow noopener"
                                    target="_blank"
                                >
                                        Phiên bản cũ
                                    </a></span
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center order-2 my-auto ml-auto md:my-0 md:ml-0 h-fit md:order-none"
                    >
                        <a
                            className="mr-4"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/RadioVOH"
                            target="_blank"
                        ><facebook
                            /></a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UCW8EcPbuw-ahUETh2ptXerQ"
                            target="_blank"
                        >
                            <youtube
                            /></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default withRouter(NavigationRadioFooter);