import "./interface.css"

//Tareas:
//1) Que no se pueda tener mas de un operador
//2) Sumar mas de dos numeros 
function InterfaceCreate() {
    // Ver tema de hoooks en REACTs
    let valueOne = "";
    let valueTwo = "";
    let operation = "";
    let result = "";
    const addNumber = (e) => {
        let value = e.target.innerText;
        let numberView = document.getElementById("view-data");
        let numberPass = numberView.textContent;
        numberView.innerText = numberPass + value;
        if (operation === "") {
            valueOne = valueOne + value;
        } else {
            valueTwo = valueTwo + value;
        }
    }
    const addOperator = (e) => {
        let numberView = document.getElementById("view-data");
        let operator = e.target.innerText;
        let operatorPass = numberView.textContent;
        numberView.innerText = operatorPass + operator;
        operation = operator;
    }
    const showResult = () => {
        let numbers_operated = document.getElementById("view-NmsOperated")
        let numberComplete = document.getElementById("view-data");
        let operatorShow = numberComplete.textContent;
        numbers_operated.style.display = "block";
        if (operation == "+") {
            result = Number(valueOne) + Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation == "-") {
            result = Number(valueOne) - Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation == "*") {
            result = Number(valueOne) * Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation == "/") {
            result = Number(valueOne) / Number(valueTwo);
            numberComplete.innerText = result;
        }
    }
    const clearNumber = () => {
        let numberView = document.getElementById("view-data");
        numberView.innerText = "";
        valueOne = "";
        valueTwo = "";
        operation = "";
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div className="view-numbers-operated" id="view-NmsOperated"></div>
                    <div className="view-numbers" id="view-data"></div>
                </section>
                <div className="interface-container">
                    <section className="interface-operations-numbers">
                        <div className="interface-numbers">                    
                            <button id="number1" onClick={addNumber}>1</button>
                            <button onClick={addNumber}>2</button>
                            <button onClick={addNumber}>3</button>
                            <button onClick={addNumber}>4</button>
                            <button onClick={addNumber}>5</button>
                            <button onClick={addNumber}>6</button>
                            <button onClick={addNumber}>7</button>
                            <button onClick={addNumber}>8</button>
                            <button onClick={addNumber}>9</button>
                            <button onClick={showResult}>=</button>
                            <button onClick={addNumber}>0</button>
                            <button onClick={addNumber}>.</button>
                        </div>
                        <div className="interface-operators">
                            <button onClick={addOperator}>+</button>
                            <button onClick={addOperator}>-</button>
                            <button onClick={addOperator}>*</button>
                            <button onClick={addOperator}>/</button>
                        </div>
                    </section>
                    
                    <div className="interface-clear">
                        <button onClick={clearNumber}>Clear</button>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default InterfaceCreate;