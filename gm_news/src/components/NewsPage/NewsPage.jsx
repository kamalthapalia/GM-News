import React, { useEffect } from "react";

function NewsPage() {
  useEffect(() => {
    document.title = "Nepal secure World Cup Qualifiers berth";
  });
  return (
    <div className="container sm:px-3 mx-auto">
      <p className=" text-5xl font-extralight -z-10 my-4 md:my-10 ">
        Nepal secure World Cup Qualifiers berth
      </p>
      <div style={{ height: "600px", overflow: "hidden" }}>
        <img
          className=" w-full h-full object-cover"
          src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg
"
          alt=""
        />
      </div>

      <div className="flex gap-2 my-3 text-lg flex-wrap font-medium text-blue-400">
        <p className="m-0 p-0">20 views</p> ||
        <p className="m-0 p-0">22022/05/30 , Thursday</p> ||
        <p className="m-0 p-0">Radhe Mohan Mishra</p>
      </div>
      <p className="text-xl sm:text-2xl font-light text-justify">
        Nepal have secured an automatic berth at the ICC Men’s Cricket World Cup
        Qualifiers after defeating the United Arab Emirates by nine runs (D/L
        method) in their final match of the triangular series of the World Cup
        League 2 played at the TU cricket ground on Thursday. The United Arab
        Emirates posted a mammoth 311-run target for Nepal in the final and
        deciding match.
        <br />
        <br /> Nepal were at 269 runs at the loss of six wickets in 44 overs
        after further play was not possible due to bad light. Bhim Sharki was
        the top-scorer for Nepal at 67 runs as Aarif Sheikh made 52 runs. Kushal
        Bhurtel and Gulsan Jha made equal 50 runs. Junaid Siddique of the UAE
        took three wickets as Aayan Afzal Khan sent two Nepali batsmen back to
        the pavilion. The visitors won the toss and elected to bat first posting
        310 runs in the designated 50 overs losing six wickets.
        <br />
        <br />
        UAE batsman Asif Khan, who came in sixth in the 38th over, scored an
        unbeaten century in just 41 balls. He scored 101 runs in 42 deliveries
        with the help of 11 sixes and four boundaries to reach the milestone.
        Vriitya Aravind, who came in third, stuck to the crease and held the
        UAE’s innings scoring 94 runs in 138 balls. The batsman hit two sixes
        and eight boundaries.
        <br />
        <br />
        Likewise, skipper Muhammed Waseem scored an impressive 63 runs in 49
        balls. Rohan Mustafa and Asif Khan scored 20 and 22 runs respectively
        for the UAE. In response, Nepali bowlers struggled to take wickets at
        regular intervals which let the visitors amass a massive total. Lalit
        Rajbanshi took the first wicket of opener Aryan Lakra (6 runs) in 2.5
        overs.
        <br />
        <br />
        Nepal had to wait until the 17th over to see another UAE batsman go as
        Sandeep Lamichhane trapped skipper Muhammed Waseem leg-before in 16.2
        overs. Chundangapoyil Rizwan (3 runs) was run out in 22.6 overs. Aayan
        Afzal Khan followed him in 26.1 overs after being caught by Gulshan Jha
        off Dipendra Singh Airee’s delivery. Airee also bagged the wicket of
        Rohan Mustafa trapping him for leg-before in 37.3 overs.
        <br />
        <br />
        https://kathmandupost.com/31/2023/03/16/nepal-secure-berth-at-cricket-world-cup-qualifiers
      </p>
    </div>
  );
}

export default NewsPage;
