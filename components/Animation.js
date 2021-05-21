import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";
import Image from "next/image";

export default function Animation() {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 1000);

  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-32 h-32">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transition transform duration-500"
          enterFrom="opacity-0 -rotate-180 scale-0"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transition transform duration-500"
          leaveFrom="opacity-100 rotate-0 scale-100"
          leaveTo="opacity-0 rotate-180 scale-0"
        >
          <div className="group flex justify-center items-center w-full h-full bg-white rounded-2xl shadow-lg transition transform duration-200 hover:bg-pink-400 group-hover:bg-pink-400">
            <svg
              width="283"
              height="64"
              viewBox="0 0 283 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="p-4 fill-current text-gray-800 transition transform duration-200 hover:scale-95 group-hover:text-white"
            >
              <path
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                fill=""
              />
            </svg>
          </div>
        </Transition>
      </div>

      <button
        onClick={() => {
          setIsShowing(false);
          resetIsShowing();
        }}
        className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-gray-800 transition transform bg-white rounded-full backface-visibility-hidden hover:scale-105 hover:text-white hover:bg-pink-400 focus:outline-none "
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="animate-spin w-5 h-5 opacity-70"
        >
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span className="ml-3">Click to transition</span>
      </button>
    </div>
  );
}
