import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
// import {motion} from "framer-motion"

function Header() {
  return (
      <div className="flex flex-col justify-center items-center w-full bg-slate-200 dark:bg-slate-800">
        <div className=" flex flex-col items-center justify-center mt-10">
          <Image src={assets.movie} alt="" className="w-60" />
          <h1 className="text-4xl text-black text-semibold mt-2 p-2 mb-2 dark:text-white">
            <strong>Movie App.com</strong>
          </h1>
        </div>

        <div className="w-full flex items-center justify-center py-3 mt-3">
          <input
            id="first-input"
            type="text"
            className="md:w-[750px] rounded-md focus:outline-none 
 border border-gray-500 py-[10] px-4 focus:placeholder-hidden "
            placeholder="Enter Keywords..."
          />
          <button className="w-15 h-15 px-4 py-[15] rounded-md bg-slate-500">
            <FaSearch className="text-semibold" />
          </button>
        </div>

        <button className="flex flex-row items-center gap-4 border  text-2xl border-gray-500 px-10 py-3 mt-5 rounded-full hover:scale-105 transition duration-300 hover:bg-lightHover dark:text-white dark:hover:text-black">
          Visit full site <FaArrowRight />
        </button>


        <div className="flex mx-14 mt-10 flex-col dark:text-white">
        <div className="mb-10">
          <h3 className="mb-2 font-Outfit font-semibold">
            Watch Movies Online Free
          </h3>
          <p>
            People have many reasons to opt for a free movie site. Many of us
            want to trim unnecessary expenses. Some do not watch movies
            frequently enough to pay for a monthly subscription. And many just
            prefer free entertainment. No matter what your reason is, you should
            stick with safe sites only. There are thousands of free movie sites
            on the Internet but only a few of them are safe. Free sites need ads
            for income while ads can carry viruses and malware. Security is the
            main reason people decide to pay for paid streaming services
            instead. If it has been your headache for a while, we have found you
            the cure: a free site with no ads. Or to be more specific, DopeBox.
            With no ads, DopeBox poses no risk to both your device and identity.
            The site also boasts a huge collection of movies for free streaming,
            HD quality, fast loading speed, constant content updates, and many
            more outstanding features. A penny saved is a penny earned. Earn
            money effortlessly by watching movies online for free at DopeBox!
          </p>
        </div>

        <div className="mb-10">
          <h3 className="mb-2 font-Outfit font-semibold">What is Dopebox?</h3>
          <p>
            DopeBox is a new name in the streaming industry. However, its
            content library and features show that every site has a chance to
            stand out, no matter where they are a newbie or a veteran. We have
            spent years learning about the industry as well as users’
            expectations in order to create the best free movie site for the
            movie fan community. DopeBox allows users to watch and download
            thousands of movies and TV shows in the best resolution possible
            with no ads. We also provide users with fast loading speed, safe and
            private sources, seamless streaming feature, and many other benefits
            you never expect from a free movie site.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="mb-2 font-Outfit font-semibold">
            Is It Illegal to Use Dopebox?
          </h3>
          <p>
            DopeBox is not a legal site as the content for free streaming is
            pirated. However, if you are concerned about criminal or civil
            charges, don’t worry, you are safe. According to copyright
            attorneys, watching movies online is not illegal, but sharing or
            downloading pirated content might cause you troubles with
            authorities. If you insist on downloading videos for later usage
            offline, use a reliable VPN and proceed at your own risk.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="mb-2 font-Outfit font-semibold">Is Dopebox safe?</h3>
          <p>
            DopeBox is as safe as Youtube, Google, and Netflix. Our site is 100%
            ad-free, meaning that there are no ads, pop ups, or commercials on
            the site. Although most ads are safe, some of them might give you
            serious headaches such as identity theft, data loss, or corrupted
            networks. Therefore, it is only wise to stay away from ads
            altogether. As there is no registration or signup required on
            DopeBox, you do not need to reveal your information with the site.
            By doing so, you are also safe from information leakage. To sum it
            up, DopeBox is one of the safest and most reliable free movie sites
            you can find on the Internet.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="mb-2 font-Outfit font-semibold">
            How To Download From Dopebox?
          </h3>
          <p>
            Downloading a movie on DopeBox is easy as a piece of cake. When you
            play a video, you will see the Download icon on the bottom of the
            video, along with other icons such as Closed Captions, Settings,
            Fullscreen, etc. Click on Download and follow the instructions, you
            will be able to download the video with a fast speed.
          </p>
        </div>

        <div className="mb-10">
          <p className="font-Kanit font-semibold">
            We might have a long way to go to become your perfect movie site.
            But as long as we know what you expect from us, we will work hard to
            make it happen. Therefore, please leave us some feedback and if you
            are satisfied with the site, please support us by sharing DopeBox
            with your friends and family. Thanks!
          </p>
        </div>
      </div>


      </div>
  );
}

export default Header;
