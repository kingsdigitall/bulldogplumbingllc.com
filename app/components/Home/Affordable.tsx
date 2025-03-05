import React from "react";
import contactInfo from "@/components/Content/ContactInfo.json";
import { GrUserWorker } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Affordable = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
            Reliable Dumpster Rental Services for Your Waste Management Needs
          </h2>
          <p className="mt-4 text-gray-600">
            Need a dumpster for your project? All Pro Rolloff offers fast,
            reliable, and affordable dumpster rental services. Whether it’s for
            a home renovation, construction site, or large cleanup, we have the
            perfect dumpster size for your needs. Call now and get your dumpster
            delivered on time!
          </p>
          <a id="cta-id" href={`tel:${contactInfo.tel}`}>
            <button
              id="cta-id"
              className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
            >
              Call Now
            </button>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
          {/* Affordable Pricing */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
              <GiReceiveMoney className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Affordable Dumpster Rentals
            </h3>
            <p className="mt-2 text-gray-600">
              We provide cost-effective dumpster rental options to fit any
              budget, ensuring you get the best value for your waste disposal
              needs.
            </p>
          </div>
          {/* Various Sizes */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <GrUserWorker className="text-xl text-main" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Multiple Dumpster Sizes
            </h3>
            <p className="mt-2 text-gray-600">
              Choose from a variety of dumpster sizes to suit your project’s
              specific requirements, from small residential cleanups to
              large-scale construction waste management.
            </p>
          </div>
          {/* Timely Delivery */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
              <FaRegThumbsUp className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              On-Time Delivery & Pickup
            </h3>
            <p className="mt-2 text-gray-600">
              Our team ensures prompt dumpster delivery and pickup, so your
              project stays on schedule without any hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
