'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          احصل علي الثيم من هنا
        </h4>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://s.salla.sa/marketplace/themes/1723503526"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white no-underline"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px]">احصل الآن</span>
          </a>

          <a
            href="https://www.notion.so/1a22687535c180eabe8adc77db231c30?v=1a22687535c181c08b1a000c7346d5ff"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white no-underline"
          >
            <img
              src="/documentation.png"
              alt="documentation"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px]">ملف المساعدة</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-28 h-auto object-contain"
          />
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 ثيم شيك.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
