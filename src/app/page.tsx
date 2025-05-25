"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleATSClick = () => {
    router.push("/ats");
  };

  const handleETSClick = () => {
    router.push("/ets");
  };

  return (
    <div className="w-screen h-screen flex gap-8 p-8 pt-24 relative">
      {/* Site Logo */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src="/logo.png"
          alt="Site Logo"
          width={160}
          height={160}
          className="drop-shadow-2xl"
        />
      </motion.div>

      {/* ATS Card */}
      <motion.div
        className="w-1/2 h-full relative cursor-pointer overflow-hidden rounded-3xl group"
        onClick={handleATSClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image with Effects */}
        <div className="absolute inset-0">
          <Image
            src="/ats_bg.png"
            alt="ATS Background"
            fill
            className="object-cover grayscale blur-sm group-hover:grayscale-0 group-hover:blur-[2px] transition-all duration-300"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src="/ats.png"
              alt="ATS Logo"
              width={320}
              height={320}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ETS Card */}
      <motion.div
        className="w-1/2 h-full relative cursor-pointer overflow-hidden rounded-3xl group"
        onClick={handleETSClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image with Effects */}
        <div className="absolute inset-0">
          <Image
            src="/ets_bg.png"
            alt="ETS Background"
            fill
            className="object-cover grayscale blur-sm group-hover:grayscale-0 group-hover:blur-[2px] transition-all duration-300"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src="/ets.png"
              alt="ETS Logo"
              width={320}
              height={320}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}