import { RadioLink } from '@/components/radioLink';
import getConfig from 'next/config';
import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
const { publicRuntimeConfig } = getConfig();

const NavigationRadio = ({ menu, router }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuMobileClickHandler = () => {
        setOpenMenu(!openMenu);
    };
    var today = new Date(), date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy');
    return (
        <>
            <div className="TopNavigation_wrapper-head-top__uESxa">
                <div className="TopNavigation_header__37vyw">
                    <div className="TopNavigation_time-and-contact__225PE">
                        <ul className="">
                            <li>{formattedDate}</li>
                            <li>
                                <a href="/rss">RSS</a>
                            </li>
                            <li>
                                <a href="/lien-he.html">Liên hệ</a>
                            </li>
                            <li>
                                <a href="https://www.vohad.com.vn" target="_blank" rel="nofollow noopener noreferrer">
                                    <i className="fas fa-ad"></i>&nbsp;&nbsp; <span>Quảng cáo - Tài trợ</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dich-vu-vohdata.html">
                                    <span>VOH Data</span>
                                </a>
                            </li>
                        </ul>
                        <div className="TopNavigation_contact__2XxSL">
                            <span>
                                <i className="fas fa-phone fa-flip-horizontal"></i>:&nbsp; <strong>028.38225933</strong> (Hotline) -
                                <strong>028 3822 1188</strong> (FM 95.6) -
                                <strong>028 38291 357</strong>
                            </span>
                        </div>
                    </div>
                    <div className="TopNavigation_channel-head__2EcBG">
                        <a href="https://radio.voh.com.vn/radio/fm-99.9-mhz-2.html" target="_blank">
                            <Image src="/images/icon-small-1.png" alt="icon-radio-fm-999-mhz" width={41} height={41} />
                        </a>
                        <a href="https://radio.voh.com.vn/radio/am-610khz-1.html" target="_blank">
                            <Image src="/images/icon-small-2.png" alt="icon-radio-fm-610-mhz" width={41} height={41} />
                        </a>
                        <a href="https://radio.voh.com.vn/radio/fm-87.7-mhz-4.html" target="_blank">
                            <Image src="/images/icon-small-3.png" alt="icon-radio-fm-877-mhz" width={41} height={41} />
                        </a>
                        <a href="https://radio.voh.com.vn/radio/fm-95.6-mhz-3.html" target="_blank">
                            <Image src="/images/icon-small-4.png" alt="icon-radio-fm-956-mhz" width={41} height={41} />
                        </a>
                        <div className="TopNavigation_search-box__1eDDD">
                            <div className="TopNavigation_search-wp__2yZ9m">
                                <label for="search_box">Search</label>
                                <input type="text" id="search_box" placeholder="Nhập nội dung tìm kiếm …" />
                                <div className="TopNavigation_icon-wp__1T7zs">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="TopNavigation_header-tab__2K1rD">
                            <div className="TopNavigation_tab-left__3-___">
                                <div className="TopNavigation_logo-voh__2Xxi3">
                                    <h1 className="style_html-tag-h1__23liH">Đài tiếng nói nhân dân Thành phố Hồ Chí Minh - VOH</h1>
                                    <RadioLink to="/"><Image src="/images/Logo-VOH-08.svg" alt="logo-voh-radio-online" width={128} height={50} objectFit='contain' /></RadioLink>
                                    
                                </div>
                            </div>
                            <div className="TopNavigation_tab-right__1rGDU">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="TopNavigation_contact-mobile-show__U-hF3">
                    <div className="TopNavigation_mobile-contact__2iGV5">Điện thoại: 028.38225933 - 028.38225934</div>
                    <div className="TopNavigation_mobile-contact__2iGV5">Đường dây nóng bạn nghe đài: 028.3891 357 - 0948747571</div>
                </div>
            </div>

            <div className='container'>
                <div className="NavigationDefault_navigation-default__2M1Fe NavigationDefault_show-menu__3rxb3">
                    <div className="Drawer_drawer__2hxHm">
                        <div className="NavigationDrawer_navigation-drawer__3OoVa">
                            <div className="NavigationDrawer_menu-head__3hZ-w">
                                <div className="NavigationDrawer_close__2-OqV">
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="NavigationDrawer_search__294p6">
                                    <input type="text" placeholder="Tìm kiếm" />
                                    <div className="NavigationDrawer_icon-wp__5D8Md">
                                        <i className="fas fa-search-mobile"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="NavigationDrawer_menu-content__1Yudi">
                                <div className="NavigationDrawer_share__VG3kE">
                                    <div>
                                        <a href="/">Trang Chủ</a>
                                    </div>
                                    <div className="style_all-icon__8qFNb">
                                        <button aria-label="twitter" className="react-share__ShareButton">
                                            <i className="fab fa-twitter custom-twit share"></i>
                                        </button>
                                        <button aria-label="facebook" className="react-share__ShareButton">
                                            <i className="fab fa-facebook-f custom-fb share"></i>
                                        </button>
                                        <button aria-label="email" className="react-share__ShareButton">
                                            <i className="fas fa-envelope custom-enve share"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="NavigationDrawer_menu__WRYXq">
                                    <div>
                                        <div className="NavigationDrawer_menu-item__hUTrM">
                                            <h5 className="style_html-tag-h5__8ufRl">
                                            <RadioLink to="/radio.html">Radio</RadioLink>
                                            </h5>
                                        </div>
                                        {
                                            menu.map((val, index) => (
                                                <div className="NavigationDrawer_menu-item__hUTrM">
                                                    <h5 className="style_html-tag-h5__8ufRl">
                                                        <RadioLink key={val?.uniqId} to={val?.slug && val?.uniqId && `/podcast/${val.slug}.${val.uniqId}.html`}>{val.name}</RadioLink>
                                                    </h5>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="NavigationDefault_menu__2pXt7">
                        <div className="NavigationDefault_desktop__3ByWL">
                            <a href="/">
                                <i className="fas fa-home custom-home"></i>
                            </a>
                            <h5 className="style_html-tag-h5__8ufRl">
                                <RadioLink to="/radio.html">Radio</RadioLink>
                            </h5>
                            {
                                menu.map((val, index) => (
                                    <h5 className="style_html-tag-h5__8ufRl">
                                        <RadioLink key={val?.uniqId} to={val?.slug && val?.uniqId && `/podcast/${val.slug}.${val.uniqId}.html`}>{val.name}</RadioLink>
                                    </h5>
                                ))
                            }
                        </div>
                        <div className="NavigationDefault_mobile__2KEvj">
                            <i className="fa fa-bars"></i>
                            <a href="/">
                                <Image src="/images/Logo-VOH-08.svg" alt="logo-voh-radio-online" width={128} height={50} objectFit='contain' />
                            </a>
                            <i className="fas fa-search-mobile"></i>
                        </div>
                    </div>
                    <div className="NavigationDefault_sub-menu__2KO2w">
                        <div className="NavigationDefault_desktop__3ByWL"></div>
                        <div className="NavigationDefault_mobile__2KEvj">
                            <a href="/">
                                <i className="fas fa-home custom-home"></i>
                            </a>
                            <h5 className="style_html-tag-h5__8ufRl">
                                <Link href="/radio.html">Radio</Link>
                            </h5>
                            {
                                menu.map((val, index) => (
                                    <h5 className="style_html-tag-h5__8ufRl">
                                        <RadioLink key={val?.uniqId} to={val?.slug && val?.uniqId && `/podcast/${val.slug}.${val.uniqId}.html`}>{val.name}</RadioLink>
                                    </h5>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default withRouter(NavigationRadio);