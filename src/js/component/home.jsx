import React, {useState} from "react";

//include images into your bundle

//create your first component
const Home = () => {

	const [color, setColor] = useState("");

	const [lights, setLights] = useState([{name: "rojo", value: "red"}, {name: "amarillo", value: "yellow"}, {name: "verde", value: "green"}])

	return (
		<div className="container mt-5">


			<div className="container mt-5 bg-black rounded-5" style={{width: 200}}>
				<div className=" d-inline-block d-flex flex-column align-items-center">
						{
							lights.map( item => <button className={"d-inline-block rounded-circle m-3 border-0 " + (color == item.value ? item.name : '') } style={{ backgroundColor: item.value ,width: 80, height: 80}} onClick={()=>{setColor("red")}}/>) 
						}
				</div>
			</div>
				<button className="btn btn-success" onClick={() => {
					if (lights.length <= 4){
						setLights = ([...lights, {name: "rojo", value: "purple"}])
					}
				}}>Agregar</button>
		</div>
	);
}

export default Home;
