import { useState } from "react";
import './home.css'

const Record = () => {

    const [input, setInput] = useState([
        { id: '', name: '', phone: '', salary: '' }
    ])

    const addData = () => {
        let newRow = { id: Math.floor(Math.random() * 100), name: '', phone: '', salary: '' };
        let add = [...input, newRow];
        setInput(add)
    }

    const inputhandle = (e, i) => {
        let data = [...input];
        data[i][e.target.name] = e.target.value;
        setInput(data)
    }

    const remove = (id) => {
        let allData = [...input];
        let del = allData.filter((val) => {
            return val.id != id;
        })
        setInput(del)
    }

    return (
        <div className="container main">
            <div>
                <h1>Dynamic Form</h1>
                <table className="table-data w-10 container" border="2">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            input.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            {
                                                i == 0 ? <input type="hidden" value={item.id} /> : <input type="text" value={item.id} />
                                            }
                                        </td>
                                        <td><input type="text" name="name" value={item.name} onChange={(e) => inputhandle(e, i)} /></td>
                                        <td><input type="text" name="phone" value={item.phone} onChange={(e) => inputhandle(e, i)} /></td>
                                        <td><input type="text" name="salary" value={item.salary} onChange={(e) => inputhandle(e, i)} /></td>
                                        <td>
                                        {
                                            i == 0 ? "" : <button type="button" className="btn btn-danger m-2 p-1" onClick={() => remove(item.id)}>
                                                {
                                                    i == 0 ? "" : "delete"
                                                }
                                            </button>
                                        }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <button className="btn btn-primary m-2 p-2" onClick={() => addData()}>Add</button>
            </div>
        </div>
    )
}

export default Record;