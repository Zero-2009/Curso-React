import "./Style-Calculator.css"
//Tareas:
//1) Que no se pueda tener mas de un operador
//2) Sumar mas de dos numeros
//Tareas complete :p

function InterfaceCreate() {
    let value = [];
    const addNumber = (e) => {
        let digit = e.target.innerText;
        let View = document.getElementById("view-data");
        let number = View.textContent;
        let numberFinished = number + digit;
        View.innerText = numberFinished;
        value = new Array(numberFinished);
    }
    const addOperator = (e) => {
        let View = document.getElementById("view-data");
        let operator = e.target.innerText;
        let Before = View.textContent;
        let numberBefore = Before + operator;
        View.innerText = numberBefore;
    }
    const showResult = () => {
        let numberComplete = document.getElementById("view-data");
        let numberOperated = document.getElementById("view-numbers-operated")
        numberOperated = numberComplete.textContent;
        numberComplete.innerText = numberOperated;
        console.log(numberOperated)
        value.forEach((operacion) => {
            const result = eval(operacion);
            numberComplete.innerText = result;
            console.log(result)
        })
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
        View.innerText = "";
        value = [];
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