import React, { useEffect, useState } from "react";
import { GET, POST } from "../../fetch";

function Upload() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [cat, setCat] = useState("Entertainment");

  async function test() {
    await POST("admin/blogs", { title: title, content: body, cat: cat });
  }

  useEffect(() => {
    document.title = "Upload your news!!";
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <label className=" text-2xl my-2">Title :</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" outline-0 text-black text-lg p-2 rounded"
          placeholder="Enter News Title!!!"
          type="text"
        />
        <label className=" text-2xl my-2">Body :</label>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className=" outline-0 text-lg text-black p-2 rounded"
          name="body"
          cols="30"
          placeholder="Enter the news body!!!"
          rows="10"
        ></textarea>
      </div>
      <label className=" text-2xl my-2">Category :</label>
      <br />
      <select
        onChange={(e) => {
          setCat(e.target.value);
        }}
        name="cat"
        className="outline-0 text-black text-lg p-2 rounded w-full"
      >
        <option
          className="outline-0 text-black text-lg p-2"
          value="Entertainment"
        >
          Entertainment
        </option>
        <option className="outline-0 text-black text-lg p-2" value="Politics">
          Politics
        </option>
        <option className="outline-0 text-black text-lg p-2" value="Shitpost">
          Shitpost
        </option>
        <option className="outline-0 text-black text-lg p-2" value="Gore">
          Gore
        </option>
        <option className="outline-0 text-black text-lg p-2" value="Others">
          Others
        </option>
      </select>
      <div
        onClick={test}
        className=" bg-slate-600 my-5 py-3 text-center rounded cursor-pointer border border-zinc-200"
      >
        submit
      </div>
    </div>
  );
}

export default Upload;
