import React, { useState } from 'react';

export function UpdateStateArr(){
//Update State of an array
    /*const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFruit(event) {

        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value = "";
        setFruits(f => [...f, newFruit]);
    }

    function handleDeleteFruit(index) {
        setFruits(fruits.filter((_, i) => i !== index));
    }                                   

    return (<div>
                <h2>List of Fruits</h2>
                <ul>
                    {fruits.map((fruit, index) => 
                    <li key={index} onClick= {() => handleDeleteFruit(index)}>
                        {fruit}
                        </li>)}
                </ul>
                <input type="text" id="fruitInput" placeholder= "Add a fruit"/>
                <button onClick={handleAddFruit}>Add Fruit</button>

        </div>); */

//Update State of an array of objects

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(event) {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
    
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i!== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (<div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => 
                    <li key={index} onClick= {() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                        </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeChange}
                       placeholder= "Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange}
                       placeholder= "Enter car model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
                </div>
                )
}