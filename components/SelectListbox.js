import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "- Select -", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict (unavailable)", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
  { id: 6, name: "hane White", unavailable: false },
  { id: 7, name: "Grance Bruce", unavailable: false },
];

export default function SelectListbox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox
      as="div"
      value={selected}
      onChange={setSelected}
      className="relative inline-block text-center"
    >
      <div className="group relative mt-1 text-gray-800">
        <Listbox.Label className="block m-6 text-gray-50 text-lg">
          Select Listbox
        </Listbox.Label>
        <Listbox.Button className="relative w-44 py-2 pl-3 pr-10 cursor-pointer text-left bg-white rounded-full shadow-md cursor-default transite transform duration-200 hover:scale-105 hover:bg-pink-400 hover:text-white active:bg-pink-400 group-hover:bg-pink-400 group-hover:text-white focus:outline-none text-sm">
          <span className="block text-center font-medium">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-800 group-hover:text-white"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition transform duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <Listbox.Options
            static
            className="absolute z-10 w-56 px-3 pt-2 pb-2 my-1 text-left origin-top-left bg-white bg-white rounded-2xl shadow-lg max-h-70 focus:outline-none text-sm"
          >
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ selected, active }) =>
                  `
                  ${selected && !person.unavailable ? "text-pink-600" : ""}
                  ${
                    active && !person.unavailable && !selected
                      ? "text-pink-600 transition transform duration-200 hover:scale-105 hover:bg-pink-400 hover:text-white"
                      : ""
                  }
                  ${
                    person.unavailable ? "text-gray-300 cursor-not-allowed" : ""
                  }                  
                    cursor-pointer select-none rounded-full relative py-2 pl-10 pr-4 
                  `
                }
                value={person}
                disabled={person.unavailable}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-bold" : "font-normal"
                      } block`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
