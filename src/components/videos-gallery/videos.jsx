import Image from "next/image";
import React, { useContext } from "react";
import { BsPlayCircle } from "react-icons/bs";
import Modal from "react-modal";
import { SettingsContext } from "@/context/setting-context";
import {RxCross1} from "react-icons/rx"

const VideosGallery = () => {
  const { modalIsOpen, setIsOpen } = useContext(SettingsContext);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <section className="md:flex gap-6">
        <div className="rounded-3xl relative md:w-[77%] overflow-hidden inline-block border-[10px] border-white dark:border-transparent shadow-xl">
          <Image
            src="/assets/images/thumbnil1.jpg"
            alt="thumbnil"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
          <BsPlayCircle
            onClick={openModal}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-7xl"
          />
        </div>
        <div className="flex md:flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[23%]">
          <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
            <Image
              src="/assets/images/thumbnil1.jpg"
              alt="thumbnil"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            <BsPlayCircle
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
            />
          </div>
          <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
            <Image
              src="/assets/images/thumbnil1.jpg"
              alt="thumbnil"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            <BsPlayCircle
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
            />
          </div>
          <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
            <Image
              src="/assets/images/thumbnil1.jpg"
              alt="thumbnil"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            <BsPlayCircle
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
            />
          </div>
        </div>
      </section>
      {modalIsOpen && <VideoModelBox />}
    </>
  );
};

export default VideosGallery;

const VideoModelBox = () => {
  const { modalIsOpen, setIsOpen } = useContext(SettingsContext);

  const customStyles = {
    content: {
      
      backgroundColor: "transparent",
      border:'none'
    },
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal} className="w-full flex justify-end mb-2"><RxCross1 className="bg-yellow p-1 rounded-sm" size={30}/></button>
        <div className="player-wrapper">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen></iframe>
        </div>
      </Modal>
    </div>
  );
};
