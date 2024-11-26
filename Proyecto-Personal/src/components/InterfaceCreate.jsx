import "./interface.css"

function InterfaceCreate() {
    // Ver tema de hoooks en REACTs
    const numberToOperation = () => {

    }
    const addNumber = (e) => {
        let value = e.target.innerText;
        let numberView = document.getElementById("view-data");
        let numberPass = numberView.textContent;
        numberView.innerText = numberPass + value;
    }
    const addOperator = (e) => {
        let numberView = document.getElementById("view-data");
        let operator = e.target.innerText;
        let operatorPass = numberView.textContent;
        numberView.innerText = operatorPass + operator;
    }
    const clearNumber = () => {
        let numberView = document.getElementById("view-data");
        numberView.innerText = "";
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div id="view-data"></div>
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
                            <button>=</button>
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