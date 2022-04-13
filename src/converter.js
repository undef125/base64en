import React, { useState } from "react";
import "./style.css";

function Header({ active, setStatus, setInp }) {
    return (
        <div className="head">
            <p>Base64</p>
            <button
                className={active ? "active" : "inactive"}
                onClick={() => {
                    setStatus(true);
                    setInp("");
                }}
            >
                Encoder
            </button>
            <button
                className={!active ? "active" : "inactive"}
                onClick={() => {
                    setStatus(false);
                    setInp("");
                }}
            >
                Decoder
            </button>
        </div>
    );
}

function InputBox({ setinp, inputt }) {
    return (
        <div className="inputHolder">
            <textarea
                type="text"
                className="input"
                value={inputt}
                onChange={(e) => setinp(e.target.value)}
            />
        </div>
    );
}

function ButtonTimes({ times, settime }) {
    return (
        <div className="timesTo">
            <label htmlFor="input">Times to encode</label>
            <input
                type="number"
                name="times"
                id=""
                min="1"
                max="30"
                value={times}
                onChange={(e) => settime(e.target.value)}
            />
        </div>
    );
}

function OutputBox({ setinp, inputt, activeStat, timeto }) {
    let i = 0;
    const loop = () => {
        if(timeto > 30) {
            alert("Maximum is 30 times!!");
            return;
        } else {
        let result = inputt;
        for (i = 0; i < timeto; i++) {
            if (activeStat) {
                result = btoa(result);
            } else {
                try {
                    result = atob(result);
                } catch (e) {
                    alert("Please enter the encoded text");
                }
            }
        }
        return result;
    }
    };
    return (
        <div className="outputSection">
            <div className="inputHolder">
                <textarea
                    readOnly
                    className="input"
                    type="text"
                    name=""
                    id=""
                    value={activeStat ? loop() : loop()}
                />
            </div>
            <button
                onClick={(e) =>
                    navigator.clipboard.writeText(
                        e.target.previousSibling.children[0].value
                    )
                }
            >
                Copy Output
            </button>
        </div>
    );
}

const Converter = () => {
    const [input, setinput] = useState("");
    const [activeStatus, setactiveStatus] = useState(true);
    const [timesto, settimesto] = useState(1);
    return (
        <div>
            <Header
                active={activeStatus}
                setStatus={setactiveStatus}
                setInp={setinput}
            />
            <InputBox setinp={setinput} inputt={input} />
            <ButtonTimes times={timesto} settime={settimesto} />
            <OutputBox
                setinp={setinput}
                inputt={input}
                activeStat={activeStatus}
                timeto={timesto}
            />
        </div>
    );
};

export default Converter;
