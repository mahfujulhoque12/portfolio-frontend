import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../../public/projects/d1.png";
import img2 from "../../public/projects/d2.png";
import img3 from "../../public/projects/d3.png";
import img4 from "../../public/projects/d4.png";
import img5 from "../../public/projects/d5.png";
import img6 from "../../public/projects/d6.png";
import img7 from "../../public/projects/d7.png";
import img8 from "../../public/projects/d8.png";
import img9 from "../../public/projects/d9.png";
import img10 from "../../public/projects/d10.png";

import img12 from "../../public/projects/d12.png";
import img13 from "../../public/projects/d13.png";
import img14 from "../../public/projects/d14.png";
import img15 from "../../public/projects/d15.png";
import img16 from "../../public/projects/d16.png";
import img17 from "../../public/projects/d17.png";
import img18 from "../../public/projects/d18.png";

const DashboardDesign = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,

    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  const slides = images.map((image) => ({
    src: image,
  }));

  const handleOpen = (imageIndex: any) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <div className="w-full bg-[#0B0F17] py-10 md:py-15 border border-t-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
          05. Dashboard
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
          Dashboards I've built
        </h2>

        <p className="text-[15px] text-[#9AA4B2] max-w-xl mb-10 leading-relaxed">
          A showcase of professional dashboards and admin panels developed for
          real-world applications, combining clean UI, intuitive workflows,
          responsive layouts, and practical business functionality.
        </p>

        {/* Dashboard Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              onClick={() => handleOpen(imageIndex)}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#111722] text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E3B341]/60"
            >
              <img
                src={image}
                alt={`Dashboard ${imageIndex + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/45">
                <span className="px-4 py-2 rounded-lg bg-white/0 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:bg-white/10 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm border border-white/10">
                  View Dashboard
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: false,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
      />
    </div>
  );
};

export default DashboardDesign;
