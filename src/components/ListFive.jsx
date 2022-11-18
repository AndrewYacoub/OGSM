import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem5, deleteItem5, updateName5 } from "../redux/dashboard/slice";
import img from '../add.svg';


function ListFive() {
  const dispatch = useDispatch();
  const List5 = useSelector((state) => state.FifthItems.value);
  const [fifthName, setFifthName] = useState("");
  const [newFifthName, setNewFifthName] = useState("");
  
    return (
        <>
         <div className="row flex justify-between h-[35px] w-full border">
        <h1 className="text-center w-full">Actieplan</h1>
        
        <button
          onClick={() => {
            dispatch(
              addItem5({
                id: List5[List5.length - 1].id + 1,
                name: fifthName,
              })
            );
          }}
        >
          {" "}
          <img src={img} alt="add" />
        </button>
      </div>
      <div >
        {List5.map((item) => {
          return (
            <div className="pl-5">
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="update / delete the above..."
                onChange={(event) => {
                    setNewFifthName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName5({ id: item.id, name: newFifthName })
                  );
                }}
              >
                {" "}
                Update
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  dispatch(deleteItem5({ id: item.id }));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <input 
          type="text"
          placeholder="Enter new title then press on plus button..."
          onChange={(event) => {
            setFifthName(event.target.value);
          }}
        />
      </div>
        </>

    )
}
export default ListFive;