import "./Style-Calculator.css"
//Tareas:
//1) Que no se pueda tener mas de un operador
//2) Sumar mas de dos numeros

function InterfaceCreate() {
    let values = [];
    let result = "";
    let NumberTemporaty = "";
    const addNumber = (e) => {
        const value = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn");
        NumberTemporaty += value;
        View.innerText = NumberTemporaty;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = false;
        })
        console.log(values)
    }
    const addOperator = (e) => {
        const operator = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn");
        values.push(Number(NumberTemporaty));
        values.push(operator);
        View.innerText = operator;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = true;
        })
        NumberTemporaty = "";
        console.log(values)
    }
    // Put the expression in this div view-numbers-operated
    // result.innerText = values.join(" ");
    const showResult = () => {
        let View = document.getElementById("view-data");
        values.push(Number(NumberTemporaty));
        for (let i = 0; i < values.length; i++) {
            if (values[i] === "+") {
                result = values[i - 1] + values[i + 1]
            } if (values[i] === "-") {
                result = values[i - 1] - values[i + 1]
            } if (values[i] === "*") {
                result = values[i - 1] * values[i + 1]
            } if (values[i] === "/") {              
                result = values[i - 1] / values[i + 1]
            }
        }
        View.innerText = result;
        console.log(values)
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
        View.innerText = "";
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div className="view-numbers-operated" id="view-numbers-operated"></div>
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
                            <button id="btn" onClick={addOperator}>+</button>
                            <button id="btn" onClick={addOperator}>-</button>
                            <button id="btn" onClick={addOperator}>*</button>
                            <button id="btn" onClick={addOperator}>/</button>
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