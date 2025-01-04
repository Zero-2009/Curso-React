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
        NumberTemporaty += digit;
        View.innerText = View.textContent + NumberTemporaty;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = false;
        })
        console.log(View.textContent)
    }
    const addOperator = (e) => {
        let operator = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn-operator");
        arrayNumber.push(Number(NumberTemporaty));
        arrayOperator.push(operator);
        View.innerText = NumberTemporaty + operator;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = true;
        })
        NumberTemporaty = "";
    }
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
        arrayNumber.push(Number(NumberTemporaty));
        console.log(arrayNumber);
        console.log(arrayOperator);
        operated();
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