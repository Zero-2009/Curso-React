import "./Style-Calculator.css"

function InterfaceCreate() {
    let ResultTemporary = "";
    let NumberTemporaty = "";
    let arrayNumber = [];
    let arrayOperator = [];
    const addNumber = (e) => {
        let digit = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn-operator");
        // NumberTemporaty is the number with all of the digit and View.textContent is the content of View show now
        NumberTemporaty += digit;
        View.textContent += digit;
        // that is for undisable the buttons of operators
        btnOperatorDisable.forEach(function(button) {
            button.disabled = false;
        })
    }
    const addOperator = (e) => {
        let operator = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn-operator");
        // View.textContent put but no abovewrite the View else majoring the operator
        View.textContent += operator;
        // That disble the button when try to put another operator 
        btnOperatorDisable.forEach(function(button) {
            button.disabled = true;
        })
        //.push the number and the operator for the operation to result
        arrayNumber.push(Number(NumberTemporaty));  
        arrayOperator.push(operator);
        // This clean the numberTemporaty 'cause we need another number until the button result is click
        NumberTemporaty = "";
    }
    // function to operated the numbers and operators
    function operated() {
        arrayOperator.forEach((operator, index) => {
            let number1 = arrayNumber[index];
            let number2 = arrayNumber[index + 1];
            if (index === 0) {
                if (operator === "+") {
                    ResultTemporary = number1 + number2;
                } else if (operator === "-") {
                    ResultTemporary = number1 - number2;
                } else if (operator === "*") {
                    ResultTemporary = number1 * number2;
                } else if (operator === "/") {
                    ResultTemporary = number1 / number2;
                }
            } else {
                if (operator === "+") {
                    ResultTemporary += number2;
                } else if (operator === "-") {
                    ResultTemporary -= number2;
                } else if (operator === "*") {
                    ResultTemporary *= number2;
                } else if (operator === "/") {
                    ResultTemporary /= number2;
                }
            }
        })
    }
    const showResult = () => {
        const View = document.getElementById("view-data");
        const ViewOperated = document.getElementById("view-numbers-operated");
        // Push the last number 
        arrayNumber.push(Number(NumberTemporaty));
        // Call the function operated
        operated();
        // Show the result and finished
        View.innerText = ResultTemporary;
    }
    const DeleteLastDigit = () => {
        console.log("Delete Last Digit")
    }
    const Porcentage = () => {
        console.log("Porcentage")
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div className="view-numbers-operated" id="view-numbers-operated"></div>
                    <div className="view-numbers" id="view-data"></div>
                </section>
                <section className="interface-container">
                        <div className="interface-numbers">  
                            <button className="btn-num" onClick={clearNumber}>clr</button>
                            <button className="btn-num" onClick={DeleteLastDigit}>DEL</button>
                            <button className="btn-num" onClick={Porcentage}>%</button>
                            <button className="btn-num" onClick={addNumber}>7</button>
                            <button className="btn-num" onClick={addNumber}>8</button>
                            <button className="btn-num" onClick={addNumber}>9</button>
                            <button className="btn-num" onClick={addNumber}>4</button>
                            <button className="btn-num" onClick={addNumber}>5</button>
                            <button className="btn-num" onClick={addNumber}>6</button>
                            <button className="btn-num" onClick={addNumber}>1</button>
                            <button className="btn-num" onClick={addNumber}>2</button>
                            <button className="btn-num" onClick={addNumber}>3</button>
                            <button className="btn-num" onClick={addNumber}>.</button>
                            <button className="btn-num" onClick={addNumber}>0</button>
                        </div>
                        <div className="Interface-Operator-Result">
                            <div className="interface-operators">
                                <button id="btn-operator" onClick={addOperator}>/</button>
                                <button id="btn-operator" onClick={addOperator}>*</button>
                                <button id="btn-operator" onClick={addOperator}>-</button>
                                <button id="btn-operator" onClick={addOperator}>+</button>
                            </div>
                            <div className="interface-result">
                                <button className="Btn-result" onClick={showResult}>=</button>
                            </div>
                        </div>
                </section>
            </section>
        </>
    )
}

export default InterfaceCreate;