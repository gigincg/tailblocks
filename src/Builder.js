import React from "react";
import getBlock from "./blocks";

export default function Builder(props) {
  return (
    <div className="max-w-6xl mx-auto">
      {props.buildState.length > 0 ? (
        props.buildState.map((section, blockIndex) => (
          <div className="flex flex-row flex-wrap">
            <div className="flex-1">
              {
                getBlock({ theme: props.theme, darkMode: props.darkMode })[
                  section.blockType
                ][section.blockName]
              }
            </div>
            {/* button with trash SVG */}
            <button
              className="text-red-800 font-bold py-2 px-4 hidden md:block"
              onClick={() => props.removeBlockCB(blockIndex)}
            >
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>
            </button>
          </div>
        ))
      ) : (
        //   Card that says "No blocks added yet" with a instruction span with the instruction "Select a section from the Left to Add it to the Builder"
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold">No blocks added yet</h1>
            <p className="text-xl">
              Select a section from the Left to Add it to the Builder
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
