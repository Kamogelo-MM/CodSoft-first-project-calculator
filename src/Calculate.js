import React from "react";
import { useState } from "react";
import "./Calculate.css";

export default function Calculate() {
  const [value, setValue] = useState("");
  const [inputDisplay, setInputDisplay] = useState({ ready: false });

  function handleNumber(event) {
    setValue(value + event.target.name);
  }

  function handleClear(event) {
    setValue(event.target.name);
  }
  function handleBackSpace() {
    setValue(value.slice(0, -1));
  }

  function handleCalculations() {
    if (inputDisplay.ready) {
      try {
        const result = eval(value);
        setValue(result.toString());
      } catch (error) {
        setValue("Error");
      }
    }
  }

  function switchToggle() {
    setInputDisplay((prev) => ({ ready: !prev.ready }));
    setValue("");
  }

  return (
    <div className="Calculate ">
      <div className="container">
        <div className="border">
          <form>
            <input
              type="text"
              autoFocus="on"
              value={value}
              className="p-3"
              readOnly
            />
            <div className="keypad">
              <button
                className="p-2"
                type="button"
                onClick={switchToggle}
                name={inputDisplay ? "On" : "Off"}
              >
                On
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="("
                disabled={!inputDisplay.ready}
              >
                (
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name=")"
                disabled={!inputDisplay.ready}
              >
                )
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="*"
                disabled={!inputDisplay.ready}
              >
                *
              </button>

              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="9"
                disabled={!inputDisplay.ready}
              >
                9
              </button>

              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="8"
                disabled={!inputDisplay.ready}
              >
                8
              </button>

              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="7"
                disabled={!inputDisplay.ready}
              >
                7
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="+"
                disabled={!inputDisplay.ready}
              >
                +
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="6"
                disabled={!inputDisplay.ready}
              >
                6
              </button>

              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="5"
                disabled={!inputDisplay.ready}
              >
                5
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="4"
                disabled={!inputDisplay.ready}
              >
                4
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="-"
                disabled={!inputDisplay.ready}
              >
                -
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="3"
                disabled={!inputDisplay.ready}
              >
                3
              </button>

              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="2"
                disabled={!inputDisplay.ready}
              >
                2
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="1"
                disabled={!inputDisplay.ready}
              >
                1
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="/"
                disabled={!inputDisplay.ready}
              >
                /
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleNumber}
                name="0"
                disabled={!inputDisplay.ready}
              >
                0
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleClear}
                disabled={!inputDisplay.ready}
                name=" "
              >
                Clr
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleBackSpace}
                disabled={!inputDisplay.ready}
                name="Del"
              >
                Del
              </button>
              <button
                className="p-2"
                type="button"
                onClick={handleCalculations}
                disabled={!inputDisplay.ready}
                name="="
              >
                =
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
