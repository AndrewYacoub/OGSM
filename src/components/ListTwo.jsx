import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addItem2, deleteItem2, updateName2} from "../redux/dashboard/slice";
import img from '../add.svg';


function ListTwo() {
  const dispatch = useDispatch();
  const List2 = useSelector((state) => state.SecondItems.value);
  const [secName, setSecName] = useState("");
  const [newSecName, setNewSecName] = useState("");
  
    return (
        <>
        <div className="flex h-[35px] w-full border">
        <h1 className="text-center w-full">Doellising</h1>
        <button className="float-right"
        onClick={() => {
          dispatch(
            addItem2({
              id: List2[List2.length - 1].id + 1,
              name: secName,
            })
          );
        }}
      >
        {" "}
      <img src={img} alt="add" />
      </button>
        
      </div>
      <div className="">
        {List2.map((item) => {
          return (
            <div>
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="update / delete the above..."
                onChange={(event) => {
                  setNewSecName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName2({ id: item.id, name: newSecName })
                  );
                }}
              >
                {" "}
                Update
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  dispatch(deleteItem2({ id: item.id }));
                }}
              >
                Delete 
              </button>
            </div>
          );
        })}
      </div>
      <input 
          type="text"
          placeholder="Enter New Title then press on plus button..."
          onChange={(event) => {
            setSecName(event.target.value);
          }}
        />
        </>
    )
}
export default ListTwo;