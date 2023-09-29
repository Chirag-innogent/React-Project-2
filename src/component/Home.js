import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
    const dispatch= useDispatch();
    const {employees}= useSelector((state)=>state.employeeState); 
    const Employees=({employees})=>{
        
        // <table>
        //     {employees.map((element) => {
        //         <td>(element.id)</td>;
        //     })};
        //  </table>
         
    };
    const Employee=({element})=>{ <tr><td>{element.id}</td><td>{element.name}</td></tr>}
    function deleteEmp(id){
        dispatch({type:'DELETE_EMPLOYEE',payload:id});
    }
    function updateEmp(id){
        dispatch({type:'SEARCH_EMPLOYEE',payload:id})
        dispatch({type:'UPDATE',payload:id});
    }
    console.log(employees);
    return (
    <>
    <h1>This is Home Page and we able to fetch date</h1>
    <table id="homeDisplay" class="table table-hover table-light">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>DOB</th>
                 <th>Delete</th>
                 <th>Update</th>
             </tr>
         </thead>
         <tbody>
             {employees.map((emp) => (
                 <tr key={emp.id}>
                     <td>{emp.id}</td>
                     <td>{emp.name}</td>
                     <td>{emp.email}</td>
                     <td>{emp.dob}</td>
                     <td><buttton class="btn btn-danger" onClick={()=>deleteEmp(emp.id)} >Delete</buttton></td>
                     <td><buttton class="btn btn-success" onClick={()=>updateEmp(emp.id)} >Update</buttton></td>
                 </tr>
             ))}
         </tbody>
     </table>
    
    </>
    );
}
export default Home;