import React from "react";

const ProcessWidget = () => {
  return (
    <div className="mt-16 px-4 md:px-32">
      <h2 className="text-center text-3xl font-extrabold text-main">
      Roll-Off Dumpster Rental in – 3 Easy Steps!
      </h2>
      <p className="mt-4 text-center text-lg">
      Renting a roll-off dumpster with All Pro Roll Off is simple, fast, and hassle-free. Here’s how it works:
      </p>
      <section className="relative lg:mx-32 flex flex-col items-center justify-center gap-8  p-8">
        {/* Vertical Progress Bar */}
        <div className="absolute left-1/2  h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg ">
          <div className="mb-4 text-xl font-bold">Step 1: Choose the Right Dumpster Size</div>
          <p className="">
          Not sure which size fits your project? Use our size guide or talk to our team to find the perfect roll-off dumpster for your needs.
          </p>
          {/* <div className="absolute hidden md:block w-4 h-4 bg-white border-2 border-gray-500 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div> */}
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold">
            Step 2: Get Transparent Pricing
          </div>
          <p className="">
          No surprises, no hidden fees—just clear, competitive pricing for your dumpster rental
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold">
            Step 3: Fast Delivery & Pickup
          </div>
          <p className="">
          We deliver your dumpster to your location and pick it up when you’re done. No delays, no stress.
          </p>
        </div>

        {/* Step 4 */}
        {/* <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold">Step 4: Final Inspection</div>
          <p className="">
            Your satisfaction is our priority. Each fence undergoes a rigorous
            inspection to meet our high standards and your expectations.
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default ProcessWidget;
