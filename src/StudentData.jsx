const StudentData = ({ data }) => {
    return (
        <div>
            <center>
            <h1>Student Data</h1>
            <table border={1}>
                <thead className="table-dark">
                    <tr>
                        <th>GR</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Cource</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.grid}>
                                <td>{item.grid}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.course.join(", ")}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </center>
        </div>
    )
}

export default StudentData;