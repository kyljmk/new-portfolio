import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I Am</h2>
          <p>A late bloomer.</p>
          <p>
            I was born in South Africa, raised in England, and until the age of
            30 I worked in bars and restaurants across Europe. I've always had
            an interest in tech and software, and in my 20s I began to play
            around with writing code as a personal hobby. By the end of my 20s
            my little hobby was bordering on a minor obsession, I couldn't teach
            myself as quickly, or to a high enough level, as I would like so I
            began looking for other avenues. I began studying the School of
            Applied Technology's Full Stack .NET Course in 2022 and upon
            graduation they hired me as a development consultant. My
            professional experience is largely made up of back end .NET work,
            specifically creating the API and Database for a large project that
            allowed the sales team to search through consultants based upon
            their skills and preferences, and then email the profiles and CVs of
            said consultants to a specific client.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
