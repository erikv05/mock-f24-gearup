import { Dispatch, SetStateAction, useState } from "react";
import "../../styles/main.css";
import { histEntry } from "./Select";

/**
 * A interface for SelectInput.
 *
 * @params
 * history: the array storing all previous history entries
 * setHistory: function to add new history entry to history array
 */
interface SelectInputProps {
  history: Array<histEntry>;
  setHistory: Dispatch<SetStateAction<Array<histEntry>>>;
}

export function SelectInput() {
  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        name="dropdown"
        id="dropdown"
        aria-label="dropdown"
      >
        <option>Nim Telson</option>
        {/* TODO 1: add more options to the dropdown here */}
      </select>
      {/* TODO 2: add a button here to display the current dropdown option as text
            on the main output area
            (Hint: use the setHistory useState set function) 
        */}
    </div>
  );
}
