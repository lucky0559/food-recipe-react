import { Facebook, Instagram, Mail, Phone, X } from "lucide-react";

export const FooterSection = () => {
  return (
    <div className="my-8 px-10 flex justify-between">
      <div>
        <span className="font-bold inline-block mb-2 text-sm">Contact</span>
        <div className="flex items-center mb-2">
          <Phone size={20} color="red" className="mr-2" />
          <span className="text-xs">(+63)916-751-7273</span>
        </div>
        <div className="flex items-center mb-2">
          <Mail size={20} color="red" className="mr-2" />
          <span className="text-xs">angelorabosa5@gmail.com</span>
        </div>
      </div>
      <div>
        <span className="font-bold inline-block mb-2 text-sm">Follow Us</span>
        <div className="flex items-center mb-2">
          <Facebook size={20} color="red" className="mr-2" />
          <span className="text-xs">Facebook</span>
        </div>
        <div className="flex items-center mb-2">
          <Instagram size={20} color="red" className="mr-2" />
          <span className="text-xs">Instagram</span>
        </div>
        <div className="flex items-center mb-2">
          <X size={20} color="red" className="mr-2" />
          <span className="text-xs">X</span>
        </div>
      </div>
    </div>
  );
};
