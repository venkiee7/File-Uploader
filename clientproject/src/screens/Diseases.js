import React from 'react'

export const Diseases = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div className='container row'>
        <div className='column col-md-4 my-2'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        <div className='column col-md-4 my-2'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        <div className='column col-md-4 my-2'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        <div className='column col-md-4'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        <div className='column col-md-4'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        <div className='column col-md-4'>
            <div className="card" style={myStyle}>
                <div className="card-body" style={myStyle}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush" style={myStyle}>
                    <li className="list-group-item" style={myStyle}>Cras justo odio</li>
                    <li className="list-group-item" style={myStyle}>Dapibus ac facilisis in</li>
                    <li className="list-group-item" style={myStyle}>Vestibulum at eros</li>
                </ul>
            </div>
        </div>
        </div>
            )
}

export default Diseases