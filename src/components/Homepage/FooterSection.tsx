import { Facebook, Instagram, Mail, Phone, X } from "lucide-react";

export const FooterSection = () => {
  return (
    <div className="my-8 px-10 flex flex-col lg:flex-row justify-between">
      <div>
        <span className="font-bold inline-block mb-2 text-sm md:text-lg xl:text-xl">
          Contact
        </span>
        <div className="flex items-center mb-2">
          <Phone size={20} color="red" className="mr-2" />
          <span className="text-xs md:text-sm xl:text-lg">
            (+63)916-751-7273
          </span>
        </div>
        <div className="flex items-center mb-2">
          <Mail size={20} color="red" className="mr-2" />
          <span className="text-xs md:text-sm xl:text-lg">
            angelorabosa5@gmail.com
          </span>
        </div>
      </div>
      <div className="mt-3 lg:mt-0">
        <span className="font-bold inline-block mb-2 text-sm md:text-lg xl:text-xl">
          Follow Us
        </span>
        <div className="flex items-center mb-2">
          <Facebook size={20} color="red" className="mr-2" />
          <span className="text-xs md:text-sm xl:text-lg">Facebook</span>
        </div>
        <div className="flex items-center mb-2">
          <Instagram size={20} color="red" className="mr-2" />
          <span className="text-xs md:text-sm xl:text-lg">Instagram</span>
        </div>
        <div className="flex items-center mb-2">
          <X size={20} color="red" className="mr-2" />
          <span className="text-xs md:text-sm xl:text-lg">X</span>
        </div>
      </div>
    </div>
  );
};
