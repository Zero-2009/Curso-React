import "./interface.css"
//Tareas:
//1) Que no se pueda tener mas de un operador
//2) Sumar mas de dos numeros

function InterfaceCreate() {
    //Only numbers can go in "values" (enteros)
    let value = [];

    //And in operation only go "operation" (string)
    let operation = [];

    //Here show the result in string (string)
    let result = "";

    //Here add digits and chain them on "values"
    const addNumber = (e) => {
        let digit = e.target.innerText;
        let View = document.getElementById("view-data");
        let digitBefore = View.textContent;
        let numberFinished = digitBefore + digit;
        View.innerText = numberFinished;
        //This array content digits for conformed one number 
        value = new Array(numberFinished);
        console.log(Number(value));
        console.log(value)
    }

    //Here we are the sign of operation "+,-,x,/"
    const addOperator = (e) => {
        let View = document.getElementById("view-data");
        let operatorForView = e.target.innerText;
        //This array content operator for the numbers up 
        View.innerText = "";
        View.innerText = operatorForView;
        operation = new Array(operatorForView);
        console.log(Number(operation));
        console.log(operation);
    }
    
    const showResult = () => {
        let numbersOperated = document.getElementById("view-NmsOperated")
        let numberComplete = document.getElementById("view-data");
        let operatorShow = numberComplete.textContent;
        if (operation === "+") {
            result = Number(valueOne) + Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation === "-") {
            result = Number(valueOne) - Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation === "*") {
            result = Number(valueOne) * Number(valueTwo);
            numberComplete.innerText = result;
        } if (operation === "/") {
            result = Number(valueOne) / Number(valueTwo);
            numberComplete.innerText = result;
        }
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
        View.innerText = "";
        value = [];
        operation: [];
        result = "";
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
                            <button onClick={addOperator}>x</button>
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