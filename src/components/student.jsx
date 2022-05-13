import React from "react"
export default function Student() {
    const data = [{
        name: 'Jhon',
        age:26,
        course:'MERN',
        batch:'October'
    },{
        name: 'Ritick',
        age:26,
        course:'MERN',
        batch:'October'
    },{
        name: 'Rahul',
        age:26,
        course:'MERN',
        batch:'October'
    },{
        name: 'Prakhar',
        age:26,
        course:'MERN',
        batch:'October'
    },{
        name: 'Singh',
        age:26,
        course:'MERN',
        batch:'October'
    }]
    return (<div>
        <div className="headingContainer">
            <h2>Student Details</h2>
            <div className="addNew">Add new student</div>
        </div>
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            <tbody>
            {
                data.map((item,pos)=>{
                    return(<tr>
                      <td>{item.name}</td>                            
                      <td>{item.age}</td>
                      <td>{item.course}</td>
                      <td>{item.batch}</td>
                      <td>edit</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
    </div>)
}