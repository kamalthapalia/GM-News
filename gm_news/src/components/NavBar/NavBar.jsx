import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    document.querySelector("#more").classList.add("more");
  }, []);
  return (
    // <div className=" bg-gray-800 px-2 py-2 ">
    //   {" "}
    //   <div className=" flex">
    //     <div className="text-2xl">GM News</div>
    //     <div className=" float-right">anotjer</div>
    //   </div>
    // </div>
    <nav className="sticky top-0 w-full z-20">
      <div className="flex justify-between bg-gray-800 px-2 py-2">
        <Link to="/">
          <div className="text-2xl text-center mx-3 text-stone-200">
            GM News
          </div>
        </Link>

        <div className="hidden md:block">
          <div className="text-lg uppercase flex  justify-center">
            <Link to={"/"}>
              <div className="mx-2  px-3 pt-1 pb-2 hover:bg-gray-700 rounded cursor-pointer">
                home
              </div>
            </Link>
            <Link to={"/Hot"}>
              <div className="mx-2  px-3 pt-1 pb-2 hover:bg-gray-700 rounded cursor-pointer">
                trending
              </div>
            </Link>
            <Link to={"/All"}>
              <div className="mx-2  px-3 pt-1 pb-2 hover:bg-gray-700 rounded cursor-pointer">
                All News
              </div>
            </Link>
            <div
              onClick={() => {
                document.querySelector("#more").classList.toggle("more");
              }}
              className="mx-2 flex justify-center hover:bg-gray-700 rounded  px-3 pt-1 pb-2 cursor-pointer"
            >
              <p className=" m-0 p-0">categories</p>{" "}
              <AiOutlineCaretDown className=" m-auto mx-2" />
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <AiOutlineMenu size={`2rem`} />
        </div>
        <div className="hidden md:block font-medium bg-stone-400 text-gray-800 rounded py-2 mx-3 px-3 cursor-pointer ">
          Contact Me
        </div>
      </div>
      <div className=" hidden md:block relative h-px">
        <div
          id="more"
          className="absolute uppercase bg-gray-800 text-base font-medium text-center rounded-b flex flex-col  w-max left-1/2"
        >
          <div className="hover:bg-gray-700 btm  px-5 py-2.5 cursor-pointer">
            Politics
          </div>
          <div className="hover:bg-gray-700 btm px-5 py-2.5 cursor-pointer">
            ShitCom
          </div>
          <div className="hover:bg-gray-700 px-5 py-2.5 cursor-pointer">
            Thirst Traps
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
