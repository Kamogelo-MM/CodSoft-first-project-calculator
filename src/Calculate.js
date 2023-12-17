import React from "react";
import { useState } from "react";

export default function Calculate() {
  const [value, setValue] = useState("");
  const [ready, setReady] = useState();

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
    setValue(eval(value));
  }

  function switchON(event) {
    setReady({ ready: true });
    // when button is clicked
    //input text should switch on
  }

  function switchOff(event) {
    setReady({ ready: false });
    //when clicked twice switch off
  }
  //function :
  //should return null if setvalue ==false

  return (
    <div className="Calculate">
      <div className="container">
        <form>
          <div className="row mb-5 mt-5 ">
            <div className="col-sm-6">
              <input type="text" autoFocus="on" value={value} className="p-5" />
            </div>
          </div>

          <div className="keypad-buttons">
            <div className="row">
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={switchON}
                  onDoubleClick={switchOff}
                  name="On"
                >
                  On/Off
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleBackSpace}
                  name="Del"
                >
                  Del
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="("
                >
                  (
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name=")"
                >
                  )
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="*"
                >
                  *
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="/"
                >
                  /
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="-"
                >
                  -
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="+"
                >
                  +
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="9"
                >
                  9
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="8"
                >
                  8
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="7"
                >
                  7
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="6"
                >
                  6
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="5"
                >
                  5
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="4"
                >
                  4
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="3"
                >
                  3
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="2"
                >
                  2
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="1"
                >
                  1
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleNumber}
                  name="0"
                >
                  0
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleClear}
                  name=" "
                >
                  Clr
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="p-3 "
                  type="button"
                  onClick={handleCalculations}
                  name="="
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
