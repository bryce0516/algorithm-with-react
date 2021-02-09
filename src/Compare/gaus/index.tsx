import { useState } from "react";

export interface GausProps {
  
}
 
const Gaus: React.SFC<GausProps> = () => {
  const [state, setState] = useState({
    avalue: 0,
    bvalue: 0,
    cvalue: 0
  })
  const [calculate, setCalualate] = useState(0)

  const {avalue, bvalue, cvalue } = state

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let sum = 0
    for (var i = 1; i <= avalue; i++){
      sum += i
    }
  }

  const handlePlus = () => {
    console.log(bvalue)
    let sum = 0 
    for (var i = 0; i < avalue; i++) {
      for (var j =0; j < bvalue; j++) {
        sum += i
        console.log('*')
      }
    }
  }
  return ( 
    <>
      <div style={ContainerStyle}>
        <div style={InnerContainer}>
          <p>max value is {calculate}</p>
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
          <button type="submit" onClick={handleSubmit}>Calculate Value's</button>
          <button onClick={handlePlus}>Calculate handlePlus</button>
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

 
export default Gaus;