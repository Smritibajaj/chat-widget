import React from "react";

function MessageComponent({ isRtl }) {
  // You can dynamically determine if RTL should be applied based on user settings or language

  return (
    <div className="flex items-start gap-2.5 my-4" dir={isRtl ? "rtl" : "ltr"}>
      <img
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-r-xl rtl:rounded-l-xl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900">
            Bonnie Green
          </span>
          <span className="text-sm font-normal text-gray-500 ">11:46</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 ">
          That's awesome. I think our users will really appreciate the
          improvements.
        </p>
        <span className="text-sm font-normal text-gray-500 ">Delivered</span>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50"
        type="button"
      >
        <svg
          className="w-4 h-4 text-gray-500 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40  "
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
              Reply
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Forward
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
              Copy
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
              Report
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MessageComponent;
