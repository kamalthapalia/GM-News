import React from "react";

function Breaking() {
  const image =
    "https://tntmusic.ru/media/content/preview@2x/2019-03-29_12-56-46__1c6093b8-5222-11e9-9098-6fabf9eee960.jpg";
  return (
    <section className="container cursor-pointer mx-auto sm:px-0 px-3">
      <p className="text-4xl   my-3 font-extralight">Breaking!!!</p>
      <div
        className="breaking"
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          height: "300px",
        }}
      >
        <div className=" flex flex-col h-full  card-shadow justify-between">
          <div className=" bg-violet-700 bg-opacity-70 md:text-3xl text-xl px-2 py-3">
            Kanye West and Yeezy Architect Have Private Wedding Ceremony
          </div>

          <div className=" bg-violet-700 bg-opacity-80 p-2.5">
            <div className="flex gap-2 my-1 text-lg flex-wrap font-medium text-blue-200">
              <p className="m-0 p-0">20 views</p> |
              <p className="m-0 p-0">22022/05/30 , Thursday</p> |
              <p className="m-0 p-0">Radhe Mohan Mishra</p>
            </div>
            <p className="m-0 p-0 text-xl overflow-hidden font-light clamp">
              Kanye West isn't just hanging around town with a mystery blonde,
              he's also married to her -- they recently had a private ceremony
              to celebrate their love. TMZ has learned. Sources connected to the
              couple tell TMZ the woman is Bianca Censori, she hails from
              Australia and she's worked as an architectural designer at Yeezy
              for several years.
              <br />
              <br />
              She's also been a brunette until switching things up to the short
              blonde look we've recently seen. Our sources say Ye and Bianca
              recently had some sort of wedding ceremony -- though we're told it
              doesn't appear they've filed a marriage certificate to make it
              legal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breaking;
