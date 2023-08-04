import { useRef, useState } from "react";

function Todo({ el,onClick, updateTodo }) {
    const [showUpdate, setShowUpdate] = useState(false);
    const updateField = useRef(null);

    const update = (event)=>{
        event.preventDefault();
        setShowUpdate(false)
        updateTodo({id: el.id, value: updateField.current.value});
    }

    return (
        <li>
            {el.value}
            <button onClick={() => onClick(el.id)}>X</button>
            {
                showUpdate ? 
                <form action="submit" onSubmit={update}>
                    <input type="text" ref={updateField} defaultValue={el.value} />
                </form>: 
                <button onClick={()=>setShowUpdate(!showUpdate)}>Update</button>
            }
        </li>
    )
}

export default Todo;