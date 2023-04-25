import React from "react";
import { AiOutlineEye } from "react-icons/ai";
function Hot() {
  const test = [1, 1, 1, 1];
  const image =
    "https://tntmusic.ru/media/content/preview@2x/2019-03-29_12-56-46__1c6093b8-5222-11e9-9098-6fabf9eee960.jpg";

  return (
    <div className="container  sm:py-0 py-2">
      <div className="text-4xl  my-3 font-extralight">Hot🔥</div>
      <div className=" grid md:grid-cols-2 gap-6">
        {test.map(() => (
          <div
            className="breaking cursor-pointer  card-shadow transition-all"
            style={{
              background: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "350px",
              zIndex: "0",
            }}
          >
            <div className=" flex flex-col h-full justify-between">
              <div className=" bg-slate-800 bg-opacity-70 sm:text-2xl text-xl py-2.5 px-2">
                Kanye West and Yeezy Architect Have Private Wedding Ceremony
              </div>
              <div className=""></div>

              <div className=" bg-slate-800 bg-opacity-90 p-1">
                <div className="flex px-2 py-1.5 gap-2 my-1 text-lg flex-wrap font-medium text-blue-400">
                  <p className="m-0 p-0 flex justify-center align-middle">
                    <p className="m-0 p-0">20 Views</p>
                    {/* <AiOutlineEye className="my-auto mx-2" /> */}
                  </p>
                  |<p className="m-0 p-0">22022/05/30 , Thursday</p> |
                  <p className="m-0 p-0">Radhe Mohan Mishra</p>
                </div>
                <p className="m-0 px-2 text-xl overflow-hidden font-light clamp">
                  Kanye West isn't just hanging around town with a mystery
                  blonde, he's also married to her -- they recently had a
                  private ceremony to celebrate their love. TMZ has learned.
                  Sources connected to the couple tell TMZ the woman is Bianca
                  Censori, she hails from Australia and she's worked as an
                  architectural designer at Yeezy for several years.
                  <br />
                  <br />
                  She's also been a brunette until switching things up to the
                  short blonde look we've recently seen. Our sources say Ye and
                  Bianca recently had some sort of wedding ceremony -- though
                  we're told it doesn't appear they've filed a marriage
                  certificate to make it legal.
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center  md:col-span-2">
          <div className=" font-medium bg-stone-400 text-gray-800 rounded py-2 mx-3 px-3 cursor-pointer">
            Load More
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hot;
