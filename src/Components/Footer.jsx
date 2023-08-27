import { BsFacebook } from 'react-icons/bs';
import { BiLogoTwitter } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
function Footer() {
    return (
        <div className="footer-main mt-5">
            {/* <div className="container"> */}
            <div className="footer-container-first">
                <div className="footer-portions">
                    <ul className="p-0 m-0">
                        <li>
                            HELP & INFORMATION
                        </li>
                        <li> Request a Call Back!</li>
                        <li>Contact Us</li>
                        <li>FAQ & Help Center</li>
                    </ul>
                </div>
                <div className="footer-portions">
                    <ul className="p-0 m-0">
                        <li>
                            ABOUT CLICKY
                        </li>
                        <li> About Us</li>
                        <li>Privacy Statement</li>
                        <li>Terms & Conditions</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className="footer-portions ">
                    <ul className="p-0 m-0  ">
                        <li>
                            DOWNLOAD OUR APP
                        </li>
                        <li className='d-flex align-items-center gap-2'>
                            <div className='w-50'>
                                <img className='img-fluid w-75' src="https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png" alt="" />
                            </div>
                            <div className='w-50'>
                                <img className='img-fluid  w-75' src="https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png" alt="" />
                            </div>
                        </li>
                        <li>KEEP IN TOUCH</li>
                        <li className='d-flex align-items-center gap-2'>
                            <div><BsFacebook size={18} /></div>
                            <div><BiLogoTwitter size={18} /></div>
                            <div><AiOutlineInstagram size={18} /></div>
                        </li>
                    </ul>
                </div>
                <div className="footer-portions">
                    <ul className="p-0 m-0">
                        <li>
                            MORE FROM CLICKY
                        </li>
                        <li>
                            Sell On Clicky
                        </li>
                    </ul>
                </div>
                <div className="footer-portions">
                    <ul className="p-0 m-0">
                        <li>
                            SHOPPING FROM
                        </li>
                        <li>
                            You're in Pakistan
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-container-second">
                <div className="footer-second-portions">
                    <h3>
                        FASHION ONLINE SHOPPING IN PAKISTAN
                    </h3>
                    <p>
                        In Pakistan, experience the convenient, affordable and fast way of online shopping from online stores. Online shopping with Clicky.pk comforts you with latest and trendy Pakistani fashion at your doorstep. Our aim is to bring the best designer collection clothing of women, men and designer shoes along with accessories through online shopping in Pakistan.
                    </p>
                </div>
                <div className="footer-second-portions">
                    <h3>
                        ALL THE LATEST TRENDS IN ONE PLACE
                    </h3>
                    <p>
                        In Pakistan your place our online shopping websites. Now select and shop, the latest trend with Clicky.pk . We bring latest trends in fashion with famous brands in Pakistan. There is something for the whole family, you can shop for kids, men, and women. Choice is yours, Kurta shalwar or jeans top, scarf or sneakers, stich or unstitched, polo shirts or formal shirts, choose from wide variety of western wear, ethnic wear, eastern wear, casual wears, formal wear, traditional wears and more in clothing. Footwear & shoes of numerous kinds, bags, watches, glasses, jewelry, fragrances, beauty and skin products, home furnishings and many more. We are all about fashion and latest trends with quality for everyone all over Pakistan.
                    </p>
                </div>
                <div className="footer-second-portions">
                    <h3>
                        LATEST ONLINE FASHION JOURNEY
                    </h3>
                    <p>
                        Clicky, the smart choice. A classy never goes out of the style. Explore the latest collection of top brands like Adidas,Reebok, Puma, Skechers, Asics, Gucci, Dolce & Gabbana, J.junaid jamshed, Khaadi, Maria. B, Sapphire, Bonanza, Satrangi, Beechtree, Nishat, Ethnic, Ego, Generation, Lala Textiles, Kyseria, Sana Safinaz, Alkaram, Urbansole, Calvin Klein, Espico, Victoria Secret and many other. We are one of the best top 10 online branded shopping sites in pakistan To keep your wardrobe latest in fashion, shop here from best and famous online store. Clicky.pk provides you 24/7 services for best online shopping. Shopping is always fun and fashion is always a class for everyone. Now you don’t need to wait for right time or markets to get open. You can buy at any time from your home at affordable prices easily.
                    </p>
                </div>
                <div className="footer-second-portions">
                    <h3>
                        LATEST ONLINE FASHION JOURNEY
                    </h3>
                    <p>
                        We brings you all latest and seasonal collections for your fashion and wearing needs. Whether it's shopping for the chilling winter season or sweating summers, you will find all the latest collections from original brands in Pakistan. Clicky.pk will meet your requirements in every season. Buy shalwar kameez, trousers, kurtas, Kurtis, shawls, sleeves, t-shirts, sweaters, hoodies, caps, coats, shrugs, jackets, boots, sneakers, flats, high heels, khussa, shoes, high-end shoes to stylish accessories like jewelry, watch, scarf, hijabs, perfume and much more.
                    </p>
                </div>
            </div>

            {/* </div> */}

        </div>
    );
}

export default Footer;