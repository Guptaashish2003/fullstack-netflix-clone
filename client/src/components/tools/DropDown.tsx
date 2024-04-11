import React, { FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
interface DropDownProps {
  content: Array<string>;
  className: string;
}

const DropDown: FC<DropDownProps> = ({ content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${className} border-2 w-36 max-lg:text-2xl border-gray-50 text-white hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-transparent bg-transparent font-medium mb-1 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent`}
        type="button"
      >
        Languages {" "}
        <FaAngleDown className="ml-1"/>
      </button>

      {isOpen && (
        <div
          className="z-10 absolute w-36  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700"
          data-dropdown-content
        >
          <ul
            className="py-2 text-sm text-gray-600 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {content.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
