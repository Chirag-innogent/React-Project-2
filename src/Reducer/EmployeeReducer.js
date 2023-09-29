const INITIAL_STATE = {
    employees: [
        { id: 101, name: 'rishi', email: 'rishi@yahoo.com', dob: '2000-12-12' },
        { id: 102, name: 'jay', email: 'jay@yahoo.com', dob: '2000-12-12' },
        { id: 103, name: 'harsh', email: 'harsh@yahoo.com', dob: '2000-12-12' },
        { id: 104, name: 'vaibhav', email: 'vaibhav@yahoo.com', dob: '2000-12-12' },
        { id: 105, name: 'rahul', email: 'rahul@yahoo.com', dob: '2000-12-12' },
        { id: 106, name: 'shubham', email: 'shubham@yahoo.com', dob: '2000-12-12' },
        { id: 107, name: 'abhishek', email: 'abhishek@yahoo.com', dob: '2000-12-12' }

    ],
};
function EmployeeReducer(state = INITIAL_STATE, action) {
    console.log("reducer running" + action)
    switch (action.type) {
        case 'ADD_EMPLOYEE': {
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        }
        case 'UPDATE_EMPLOYEE': {
            const empid = action.payload.id;
            console.log(empid);
            const newEmployees = state.employees.filter((emp) => emp.id !== empid);
            return {
                ...state,
                employees: [...newEmployees, action.payload],
            };
        }
        case 'DELETE_EMPLOYEE': {
            const empid = action.payload;
            const newEmployees = state.employees.filter((emp) => emp.id !== empid);
            return {
                ...state,
                employees: newEmployees
            }

        }
        default: return state;
    }

}
export default EmployeeReducer;