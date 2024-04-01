import { Component } from "react";

class CompanyData extends Component {

    constructor() {
        super();
        this.state = {
            employee: [
                {
                    empid: 1,
                    empname: "abc",
                    empemail: "abc@gmail.com",
                    empphone: 12345,
                    empaddress: {
                        country: "india",
                        state: "gujarat",
                        city: "surat",
                        area: "motavarachha"
                    },
                    empdeg: "junior",
                    empsalary: 23000,
                    empdepartment: "ui/ux"
                },
                {
                    empid: 2,
                    empname: "def",
                    empemail: "def@gmail.com",
                    empphone: 2121,
                    empaddress: {
                        country: "india",
                        state: "rajasthan",
                        city: "jaypur",
                        area: "jaypurabc"
                    },
                    empdeg: "junior",
                    empsalary: 21000,
                    empdepartment: "web design"
                },
                {
                    empid: 3,
                    empname: "ghi",
                    empemail: "ghi@gmail.com",
                    empphone: 2212,
                    empaddress: {
                        country: "india",
                        state: "maharashtra",
                        city: "pune",
                        area: "abcpune"
                    },
                    empdeg: "seniour",
                    empsalary: 65000,
                    empdepartment: "backend developer"
                },
                {
                    empid: 4,
                    empname: "jkl",
                    empemail: "jkl@gmail.com",
                    empphone: 212112,
                    empaddress: {
                        country: "india",
                        state: "karnatak",
                        city: "bengaluru",
                        area: "kgf"
                    },
                    empdeg: "tl",
                    empsalary: 150000,
                    empdepartment: "frontend developer"
                }
            ]
        }
    }

    render() {

        return (
            <>
               <center>
               <h1>Employee Data</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Employe Id</th>
                            <th>Employe Name</th>
                            <th>Employe Email</th>
                            <th>Employe Phone</th>
                            <th>Employe Address</th>
                            <th>Employe Degree</th>
                            <th>Employe Salary</th>
                            <th>Employe Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employee.map((val) => (
                                <tr key={val.empid}>
                                    <td>{val.empid}</td>
                                    <td>{val.empname}</td>
                                    <td>{val.empemail}</td>
                                    <td>{val.empphone}</td>
                                    <td>{val.empaddress.area} ,{val.empaddress.city} ,{val.empaddress.state} ,{val.empaddress.country}.</td>
                                    <td>{val.empdeg}</td>
                                    <td>{val.empsalary}</td>
                                    <td>{val.empdepartment}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
               </center>
            </>
        )
    }
}

export default CompanyData;