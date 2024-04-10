import React, { useState } from 'react';
import './home.css'

function Record() {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');

    const addData = () => {
        if (name && email && salary) {
            setData([...data, { name, email, salary }]);
            setName('');
            setEmail('');
            setSalary('');
        }
    };

    const deleteData = (index) => {
        const olddata = [...data];
        olddata.splice(index, 1);
        setData(olddata);   
    };

    return (
        <center>
            <div className="container">
                <h1>Add Data</h1>
                <div className="text-light form-data">
                    <table>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                className='ml-3'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email : </label>
                            <input
                                className='ml-3'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input
                                className='ml-3'
                                type="text"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={ () => addData() }>Add Data</button>
                    </table>
                </div>
                <div>
                    <table className="table-data w-10 container">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteData(i)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </center>
    );
}

export default Record;