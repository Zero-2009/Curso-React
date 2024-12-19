import "./InterFace.css"

function InterFaceCreate() {
    return (
        <>
            <section className="interface-global">
                <div><img src="" alt="" /></div>
                <div className="User-Password">
                    <input type="text" />
                    <input type="password" />
                </div>
                <div className="">
                    <button type="button">Enter</button>
                </div>
                <div className="">
                    <div>enter as a guest </div>
                    <div>recover password</div>
                </div>
            </section>
        </>
    )
}

export default InterFaceCreate;