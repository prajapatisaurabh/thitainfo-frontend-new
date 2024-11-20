"use client";
import Breadcrumbs from "@/components/layout/breadcrumb";
import TeamCard from "@/components/team/teamcard";
import { TeamMember } from "@/types/team";
import { useState } from "react";
import { teams } from "../constants/sociallinks";
const Team = () => {
  const TeamInfo: TeamMember[] = [
    {
      id: 1,
      name: "Saurabh Prajapati",
      role: "Full Stack Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "/img/team/team-1.png",
      twitter: teams.saurabh.LINKEDIN,
      linkedin: teams.saurabh.LINKEDIN,
      instagram: teams.saurabh.LINKEDIN,
      facebook: teams.saurabh.LINKEDIN,
    },
    {
      id: 2,
      name: "Pradip Sodha",
      role: "Backend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "/img/team/team-2.png",
      linkedin: teams.pradip.LINKEDIN,
      twitter: teams.pradip.LINKEDIN,
      instagram: teams.pradip.LINKEDIN,
      facebook: teams.pradip.LINKEDIN,
    },
    {
      id: 3,
      name: "Yash Prajapati",
      role: "Frontend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "/img/team/team-3.jpg",
      linkedin: teams.yash.LINKEDIN,
      twitter: teams.yash.LINKEDIN,
      instagram: teams.yash.LINKEDIN,
      facebook: teams.yash.LINKEDIN,
    },
  ];

  const [team] = useState(TeamInfo);

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Team" }];
  return (
    <main id="main" className="bg-gray-50">
      {/* Breadcrumbs Section */}
      <Breadcrumbs paths={breadcrumbs} />

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((obj) => (
              <TeamCard key={obj.id} obj={obj} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
