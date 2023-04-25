import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GET, POST } from "../../fetch";
function Hot() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      setData(await GET("admin/blogs"));
    }
    getData();
  }, []);
  const image =
    "https://tntmusic.ru/media/content/preview@2x/2019-03-29_12-56-46__1c6093b8-5222-11e9-9098-6fabf9eee960.jpg";

  return (
    <div className="container  sm:py-0 py-2">
      <div className="text-4xl  my-3 font-extralight">All 📰</div>
      <div className=" grid md:grid-cols-2 gap-9 ">
        {data?.data?.map((news) => (
          <div
            className="breaking cursor-pointer transition-all card-shadow"
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
              <div
                style={{ height: "3.5em" }}
                className=" bg-slate-800 bg-opacity-80 sm:text-2xl text-xl py-2.5 px-2"
              >
                {news?.title}
              </div>
              <div className=""></div>

              <div className=" bg-slate-800 bg-opacity-90 p-1">
                <div className="flex px-2 py-1.5 gap-2 my-1 text-lg flex-wrap font-medium text-blue-400">
                  <p className="m-0 p-0 flex justify-center align-middle">
                    <p className="m-0 p-0">20 Views</p>
                    {/* <AiOutlineEye className="my-auto mx-2" /> */}
                  </p>
                  |<p className="m-0 p-0">{news?.createdAt.split("T")[0]}</p> |
                  <p className="m-0 p-0">Radhe Mohan Mishra</p>
                </div>
                <p className="m-0 px-2 text-xl overflow-hidden font-light clamp">
                  {news?.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-9 mb-3 md:col-span-2">
        <div className=" font-medium bg-stone-400 btn-shadow text-gray-800 rounded py-2 mx-3 px-3 cursor-pointer">
          Load More
        </div>
      </div>
    </div>
  );
}

export default Hot;
