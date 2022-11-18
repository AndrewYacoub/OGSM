import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addItem3, deleteItem3, updateName3} from "../redux/dashboard/slice";
import img from '../add.svg';


function ListThree() {
  const dispatch = useDispatch();
  const List3 = useSelector((state) => state.ThirdItems.value);
  const [thirdName, setThirdName] = useState("");
  const [newThirdName, setNewThirdName] = useState("");
  
    return (
        <>
         <div className="flex row justify-between h-[35px] w-full border">
        <h1 className="text-center w-full">Strategie</h1>
        <button className="float-right"
          onClick={() => {
            dispatch(
              addItem3({
                id: List3[List3.length - 1].id + 1,
                name: thirdName,
              })
            );
          }}
        >
          {" "}
          <img src={img} alt="add" />
        </button>
      </div>
      <div className="">
        {List3.map((item) => {
          return (
            <div>
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="update / delete the above..."
                onChange={(event) => {
                  setNewThirdName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName3({ id: item.id, name: newThirdName })
                  );
                }}
              >
           
                Update
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  dispatch(deleteItem3({ id: item.id }));
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
            setThirdName(event.target.value);
          }}
        />
      </div>
        </>

    )
}
export default ListThree;