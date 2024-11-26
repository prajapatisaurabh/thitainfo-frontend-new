import { teams } from "@/app/constants/sociallinks";
import React from "react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <h3 className="text-primary text-2xl" />,
      title: "Location",
      detail: "Ahmedabad",
    },
    {
      icon: <h3 className="text-primary text-2xl" />,
      title: "Phone",
      detail: teams.saurabh.MOBILE_NO,
    },
    {
      icon: <h3 className="text-primary text-2xl" />,
      title: "Email",
      detail: teams.saurabh.EMAIL,
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg"
        >
          <div className="flex-shrink-0">{item.icon}</div>
          <div>
            <p className="text-sm font-medium text-gray-600">{item.title}</p>
            <p className="text-lg font-semibold text-gray-800">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
