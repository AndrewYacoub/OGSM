import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addItem1, deleteItem, updateName} from "../redux/dashboard/slice";
import img from '../add.svg';

function ListOne() {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.items.value);
  const [Name, setName] = useState("");
  const [newName, setNewName] = useState("");

    return(
        <>
        <div className="row flex h-[35px] w-full border">
        <h1 className="justify-center w-full">Ambitie</h1>
        <button className="float-right"
          onClick={() => {
            dispatch(
              addItem1({
                id: List[List.length - 1].id + 1,
                name: Name,
              })
            );
          }}
        >
          <img src={img} alt="add" />
        </button>
        </div>
    <div>
      </div>
      <div className="">
      {List.map((item) => {
        return (
          <div>
            <h1> {item.name}</h1>
            <input
              type="text"
              placeholder="update / delete the above..."
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
            <button className="m-5"
              onClick={() => {
                dispatch(
                  updateName({ id: item.id, name: newName })
                );
              }}
            >
              
              Update
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                dispatch(deleteItem({ id: item.id }));
              }}
            >
              Delete 
            </button>
          </div>
        );
      })}
    </div>
    <input autoFocus className="border w-full"
          type="text"
          placeholder="Enter new title then press on plus button..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        </>

    )
}

export default ListOne