"use client";
import TeamCard from "@/components/team/teamcard";
import { useState } from "react";
const Team = () => {
  const TeamInfo = [
    {
      id: 1,
      name: "Saurabh Prajapati",
      role: "Full Stack Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-1.png",
      twitter: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      linkedin: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      instagram: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      facebook: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
    },
    {
      id: 2,
      name: "Pradip Sodha",
      role: "Backend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-2.png",
      linkedin: "https://www.linkedin.com/in/pradipsodha",
      twitter: "https://www.linkedin.com/in/pradipsodha",
      instagram: "https://www.linkedin.com/in/pradipsodha",
      facebook: "https://www.linkedin.com/in/pradipsodha",
    },
    {
      id: 3,
      name: "Yash Prajapati",
      role: "Frontend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-3.jpg",
      linkedin: "https://www.linkedin.com/in/ysprajapati/",
      twitter: "https://www.linkedin.com/in/ysprajapati/",
      instagram: "https://www.linkedin.com/in/ysprajapati/",
      facebook: "https://www.linkedin.com/in/ysprajapati/",
    },
  ];

  const [team] = useState(TeamInfo);
  return (
    <main id="main" className="bg-gray-50">
      {/* Breadcrumbs Section */}
      <section id="breadcrumbs" className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="index.html" className="hover:text-primary">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li>Team</li>
          </ol>
        </div>
      </section>

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