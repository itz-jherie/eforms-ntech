import React, {useState} from 'react'
import { AiFillYoutube } from 'react-icons/ai';
import { useNavigate} from 'react-router'
import "./styles/addcommissioneroath.css"

const AddCommissionerOath = () => {


  /*

  const initialState = {name: "", id: ""}

  function taskReducer(tasks, action) {
    
    switch(action.type) {

      case 'add' : {
        return [...tasks, {
          id: action.id,
          name: action.name,
          idNo: id_no
        }]
      }

     case 'edit' : {
      return tasks.map(t => {
        if (t.id === action.task) {
          return action.task
        } else {
          return t
        }
      });
     }

     case 'delete' : {
      return tasks.filter(t => t.id === action.id)
     }

     default: {
      throw Error('Unknown action: ' + action.type)
     }
  }
}


const [tasks, dispatch] = useReducer(reducer, initialState);

function handleAddTask(text) {
  dispatch({
    type: 'add',
    id: nextId++,
    text: text
  })

  function handleEditTask(task) {
    dispatch({
      type: 'edit',
      task: task
    })
  }

  function handleDeleteTask(){
    dispatch({
      type: 'delete',
      id: 'taskId'
    })
  }
}
  */

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
      name: '',
      id: ""
});


const [users, setUsers] = useState([{name: "", id: ""}]);

function validateForm(){
  const errors = {};

  if (!formData.name) {
    errors.name = 'Name is required';
  }

  if (!formData.id){
    errors.id = 'ID is required';
  }

  setErrors(errors);
  return Object.keys(errors).length === 0;
}

function handleAddData() {
  const newData = {formData};
  setUsers([...users,newData]);
}

function handleSubmit(event, item) {
  event.preventDefault();
  
  const isValid = validateForm();

  if (isValid) {
    // return formData;
    
    navigate("/court/commisionerofoath", {state: users});
    setFormData({name: "", id:""})
  }
}

function handleChange(event){

  const {name, value} = event.target;

  setFormData((prevState) => ({
    ...prevState,
    [name]: value
  }));

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: undefined
  }));
}

console.log(users);
  return (
    <div className='addCommissionOath'>
      
      <h1 className='commissioner-h1'>Add Commissioner of Oathe </h1>
    
      <form className='addcommission' onSubmit={handleSubmit}>

        <div className='labelBox'>
        <label>Commissioner Name</label>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className='commissionerName'
        placeholder='Enter Commissioner Name'
        required
        />
        {errors.name && <div className='error'>{errors.name}</div>}
        </div>
        

        <div className='labelBox'>
          <label>Commissioner ID</label>
          <input
          type='text' 
          name="id"
          value={formData.id}
          onChange={handleChange}
          className='commissionerId'
          placeholder='Enter Commissioner Id'
          required
          />
          {errors.id && <div className='error'>{errors.id}</div>}
        </div>

        <button className='addButt' onClick={handleAddData}>Add Commissioner</button>
      </form>
    </div>
  )
}

export default AddCommissionerOath