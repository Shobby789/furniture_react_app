import React from "react";
import profile1 from "../../images/profile1.jpg";
import profile2 from "../../images/profile2.jpg";
import profile3 from "../../images/tst-profile.jpg";
import profile4 from "../../images/profile4.jpg";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Lawson Arnold",
      designation: "CEO, Founder, Atty.",
      image: profile1,
    },
    {
      id: 2,
      name: "Jeremy Walker",
      designation: "CEO, Founder, Atty.",
      image: profile2,
    },
    {
      id: 3,
      name: "Patrik White",
      designation: "CEO, Founder, Atty.",
      image: profile3,
    },
    {
      id: 4,
      name: "Kathryn Ryan",
      designation: "CEO, Founder, Atty.",
      image: profile4,
    },
  ];
  return (
    <>
      <div className="container-fluid d-flex justify-content-around align-items-center flex-wrap py-5">
        {teamMembers.map((member) => {
          return (
            <TeamMemberCard
              id={member.id}
              key={member.id}
              name={member.name}
              designation={member.designation}
              image={member.image}
            />
          );
        })}
      </div>
    </>
  );
}
