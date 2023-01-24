import Swal from "sweetalert2";
import { editTodo, removeTodo } from "../redux/state/TodoSlice";
import store from "../redux/store/store";

  export function  deleteAlert(i){
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch(removeTodo(i));
       
      }
    })
  }

  export function updateAlert(i,x){
    Swal.fire({
      title: 'update todo name',
      input:'text',
      inputValue:x,
      showCancelButton: true,
      confirmButtonText: 'Update',
      inputValidator: (value) => {
        if(value){
          store.dispatch(editTodo({index:i,task:value}))
        }
      }
    })
  }