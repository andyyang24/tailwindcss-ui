import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

export default function SelectRadios() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <>
      <h2 className="block m-6 text-white text-lg">Radio Selector</h2>
      <div className="w-full px-4">
        <div className="w-full max-w-md mx-auto">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${active ? "bg-pink-400" : ""}
                  ${
                    checked
                      ? "bg-pink-400 text-white scale-105"
                      : "bg-white scale-100"
                  }
                    relative rounded-full shadow-md px-5 py-4 cursor-pointer transit transform duration-200 hover:scale-105`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="w-full">
                        <div className="flex flex-row items-center justify-between text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`pl-2 font-medium text-md sm:text-sm  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "" : "text-gray-500"
                            }`}
                          >
                            <span className="text-xs">
                              {plan.ram}/{plan.cpus}
                            </span>{" "}
                            <br className="md:hidden" />
                            <span
                              className="invisible md:visible"
                              aria-hidden="true"
                            >
                              &middot;
                            </span>{" "}
                            <span className="text-xs">{plan.disk}</span>
                          </RadioGroup.Description>

                          <span
                            className="text-white
                          {checked && (
                            block
                          )}
                          "
                          >
                            <CheckIcon className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
