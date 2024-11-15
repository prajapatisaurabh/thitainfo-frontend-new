import { TeamMember } from "@/types/team";
import Image from "next/image";
import React from "react";

const TeamCard = ({ obj }: { obj: TeamMember }) => {
  return (
    <div
      id={`team-${obj.id}`}
      className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Text Information */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">{obj.name}</h3>
          <p className="text-lg text-primary">{obj.role}</p>
          <p className="text-gray-600 mt-4">{obj.disc}</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {obj.linkedin && (
              <a
                href={obj.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <p>FaLinkedin ICON</p>
              </a>
            )}
            {obj.twitter && (
              <a
                href={obj.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <p>FaTwitter ICON</p>
              </a>
            )}
            {obj.instagram && (
              <a
                href={obj.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <p>FaInstagram ICON</p>
              </a>
            )}
            {obj.facebook && (
              <a
                href={obj.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <p>FaFacebook ICON</p>
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <Image
            src={obj.img}
            alt={obj.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-primary px-4 py-2 rounded-lg shadow-lg font-semibold">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
