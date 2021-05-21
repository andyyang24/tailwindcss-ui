import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

export default function DropdownMenu() {
  return (
    <>
      <h2 className="block m-6 text-white text-lg">Dropdown Menu</h2>
      <Menu as="div" className="group relative inline-block text-center">
        <div>
          <Menu.Button className="transition transform duration-200 inline-flex justify-center w-44 px-4 py-2 mb-1 text-sm font-medium text-gray-800 bg-white rounded-full hover:scale-105  hover:text-white hover:bg-pink-400 group-hover:text-white group-hover:bg-pink-400 group-hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Action Menu
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-gray-800 group-hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition transform duration-200"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="transition transform duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 w-56 origin-top-left bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
            <div className="px-3 pt-1 pb-2 my-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-pink-400 text-white" : "text-gray-800"
                    } group flex rounded-full items-center w-full px-2 py-2 text-sm transite transform duration-200 hover:scale-105 focus:outline-none`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-pink-400 text-white" : "text-gray-800"
                    } group flex rounded-full items-center w-full px-2 py-2 text-sm transite transform duration-200 hover:scale-105 focus:outline-none`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-3 pt-1 pb-2 my-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-pink-400 text-white" : "text-gray-800"
                    } group flex rounded-full items-center w-full px-2 py-2 text-sm transite transform duration-200 hover:scale-105  focus:outline-none`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-pink-400 text-white hover:bg-pink-400"
                        : "text-gray-800"
                    } group flex rounded-full items-center w-full px-2 py-2 text-sm transite transform duration-200 hover:scale-105 focus:outline-none`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-3 pt-1 pb-1 my-1">
              <Menu.Item disabled>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-pink-400 text-white"
                        : "text-gray-300 bg-gray-10"
                    } group cursor-not-allowed flex rounded-full items-center w-full px-2 py-2 text-sm transite transform duration-200 focus:outline-none`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-pink-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-pink-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete (disabled)
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#333333" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#f8f8f8" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#333333" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#333333" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#333333" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#f8f8f8" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#f8f8f8" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#f8f8f8" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#ffffff"
        stroke="#333333"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#333333" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#333333" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#F472B6"
        stroke="#f8f8f8"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#f8f8f8" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#f8f8f8" strokeWidth="2" />
    </svg>
  );
}
