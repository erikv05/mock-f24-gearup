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

export function SelectInput(props: SelectInputProps) {
  const [name, setName] = useState<string>("Nim Telson");

  return (
    <div className="dropdown-container">
      <select
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="dropdown"
        name="dropdown"
        id="dropdown"
        aria-label="dropdown"
      >
        <option value="Nim Telson">Nim Telson</option>
        <option value="Tim Nelson">Tim Nelson</option>
      </select>
      <button
        name="submit"
        id="submit"
        aria-label="Submit"
        // I use state here instead of the DOM
        onClick={() => {
          props.setHistory([...props.history, { data: name }]);
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}
