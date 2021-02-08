import React, { DetailedHTMLProps, FormEventHandler, FormHTMLAttributes, useState } from "react";

const Four = () => {
  const [state, setState] = useState({
    avalue: 0,
    bvalue: 0,
    cvalue: 0,
    dvalue: 0, 
  })

  const [max, setMax] = useState<number>()

  const { avalue, bvalue, cvalue, dvalue } = state

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log('name', name)

    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const answer = Math.max(avalue, bvalue, cvalue, dvalue)
    setMax(answer)
  }


  return (
    <>
      <div style={ContainerStyle}>
        <div style={InnerContainer}>
          <p>max value is {max}</p>
        </div>
      </div>
      <div style={ContainerStyle}>
        <div style={InnerContainer}>

          <div style={Padding}>
            <label>A's value </label>
            <input type="number" id="avalue" name="avalue" value={avalue} onChange={handleValue} />
          </div>
          <div style={Padding}>
            <label>B's value </label>
            <input type="number" id="bvalue" name="bvalue" value={bvalue} onChange={handleValue} />
          </div>
          <div style={Padding}>
            <label>C's value </label>
            <input type="number" id="cvalue" name="cvalue" value={cvalue} onChange={handleValue} />
          </div>          <div style={Padding}>
            <label>D's value </label>
            <input type="number" id="dvalue" name="dvalue" value={dvalue} onChange={handleValue} />
          </div>
          <button type="submit" onClick={handleSubmit}>Calculate Value's</button>
        </div>
      </div>
      <div style={InnerContainer}>

      </div>
    </>
  );
}

const ContainerStyle = {
  border: "1px solid black",
  alignItems: 'center',
  justifyContent: 'center',
  margin: "25px"
}
const InnerContainer = {
  padding: "25px"
}
const Padding = {
  padding: "10px"
}

export default Four;