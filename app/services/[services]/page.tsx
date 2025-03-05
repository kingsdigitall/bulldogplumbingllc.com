import Banner from "@/app/components/Home/Banner";
import NavbarState from "@/app/components/State/NavbarState";
import React from "react";
import Servicedata from "@/components/Content/serviceWidgetContent.json";
import Image from "next/image";
import Service from "@/app/components/Home/Service";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Navbar from "@/app/components/Navbar";
import TypeOfDumpster from "@/app/components/Widgets/TypeOfDumpster";

export function generateMetadata({ params }: { params: { services: string } }) {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: serviceData.title.split("[location]").join(Data?.name || "Volant, PA"),
    description: serviceData.description
      .split("[location]")
      .join(Data?.name || "Volant, PA"),
    alternates: {
      canonical: `https://${ContactInfo.host}/services/${params.services}`,
    },
  };
}

const page = ({ params }: { params: { services: string } }) => {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  return (
    <div className="">
      <Banner
        h1={serviceData.title.split("[location]").join(Data?.name || "Volant, PA")}
        image={"banner.jpg"}
        header=""
        p1={serviceData.description.split("[location]").join(Data?.name)}
      />
      <div className="mx-4 mt-6 print:hidden md:mx-10">
        {/* who */}
        <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold">
              <h2>
                {" "}
                {serviceData.title
                  .split("[location]")
                  .join(Data?.name || "Volant, PA")}
              </h2>
              <br />
            </div>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: serviceData.para1
                  .split("[location]")
                  .join(Data?.name || "Volant, PA"),
              }}
            ></div>
          </div>
          <div className="w-full pt-10">
            <Image
              src={`/full-bill-over-flowing-over-flowing-dumpsters-bein.jpg`}
              className="h-80 rounded-lg border object-cover shadow-lg"
              alt="full-bill-over-flowing-over-flowing-dumpsters-bein"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* who */}
      </div>
      {/* <div className="mx-auto my-4 w-80 border p-4">
          <div dangerouslySetInnerHTML={{ __html: serviceData.description }} />
        </div> */}
      <Service value={subdomain} />
      <TypeOfDumpster />
    </div>
  );
};

export default page;

// export function generateStaticParams() {
//   const cityData: any = Servicedata.lists;
//   return cityData.map((locations: any) => ({
//     State: locations.slug.toString(),
//   }));
// }
