import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem4, deleteItem4, updateName4 } from "../redux/dashboard/slice";
import img from '../add.svg';


function ListFour() {
  const dispatch = useDispatch();
  const List4 = useSelector((state) => state.FourthItems.value);
  const [fourthName, setFourthName] = useState("");
  const [newFourthName, setNewFourthName] = useState("");
  
    return (
        <>
        <div className="row flex justify-between h-[35px] w-full border">
        <h1 className="text-center w-full">Dashboard</h1>
        
        <button
          onClick={() => {
            dispatch(
              addItem4({
                id: List4[List4.length - 1].id + 1,
                name: fourthName,
              })
            );
          }}
        >
          {" "}
          <img src={img} alt="add" />
        </button>
      </div>
      <div className="">
        {List4.map((item) => {
          return (
            <div>
              <h1> {item.name}</h1>
              <input
                type="text"
                placeholder="update / delete the above..."
                onChange={(event) => {
                  setNewFourthName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateName4({ id: item.id, name: newFourthName })
                  );
                }}
              >
                {" "}
                Update
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  dispatch(deleteItem4({ id: item.id }));
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
            setFourthName(event.target.value);
          }}
        />
      </div>
        </>

    )
}
export default ListFour;