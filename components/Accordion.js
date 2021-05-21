import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Accordion() {
  return (
    <>
      <h2 className="block m-6 text-white text-lg">Accordion</h2>
      <div className="w-full max-w-md p-5 mx-auto bg-white rounded-2xl shadow-md">
        <label className="block m-6 text-gray-800 text-md font-medium">
          Terms & Conditions
        </label>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex justify-between w-full px-4 py-2 text-sm font-medium text-left transition transform duration-200 text-gray-800 bg-gray-100 rounded-full hover:bg-pink-400 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-pink-400 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "transform rotate-0 duration-200"
                      : "transform rotate-180 duration-200"
                  } w-5 h-5 text-gray-800 group-hover:text-white`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                enter="transition transform duration-200"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition transform duration-100"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-xs text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima laborum, consequuntur velit eligendi, voluptatum
                  perspiciatis et quos quibusdam possimus quisquam nulla
                  aspernatur porro ut magni enim perferendis fuga tempora
                  assumenda!
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex justify-between w-full px-4 py-2 text-sm font-medium text-left transition transform duration-200 text-gray-800 bg-gray-100 rounded-full hover:bg-pink-400 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-pink-400 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "transform rotate-0 duration-200"
                      : "transform rotate-180 duration-200"
                  } w-5 h-5 text-gray-800 group-hover:text-white`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                enter="transition transform duration-200"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition transform duration-100"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima iusto, eligendi sed animi perferendis error, beatae
                  fuga dicta ex, saepe vero accusantium mollitia! Aperiam unde
                  facilis nulla tenetur quod reprehenderit.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="cursor-not-allowed group flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-800 rounded-full bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-400 focus-visible:ring-opacity-75">
                <span>Please Note: (Always Open)</span>
                <ChevronUpIcon className="w-5 h-5 text-gray-800 transform rotate-0" />
              </Disclosure.Button>
              <Disclosure.Panel
                static
                className="px-4 pt-4 pb-4 text-xs text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                minima? Atque laudantium quo, ullam eaque laboriosam, sit
                nesciunt placeat ipsa assumenda mollitia error tempore dolores
                explicabo perferendis quam maiores excepturi!
                <button>Conclusion:</button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
