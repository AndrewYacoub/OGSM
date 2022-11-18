
import ListFive from "./components/ListFive";
import ListFour from "./components/ListFour";
import ListOne from "./components/ListOne";
import ListThree from "./components/ListThree";
import ListTwo from "./components/ListTwo";

function App() {

  

  return (
    <div className="w-full">
        <div className=" w-[90%] ml-[6.25%] border rounded mb-10">
          <ListOne />
        </div >
        <div className="flex w-[100%] ml-[6.5%]">
          <div className="w-[30%] border rounded mr-[5%]">
            <ListTwo />
          </div>
          <div className=" flex w-[75%]">
            <div className="border rounded ">
              <ListThree />
            </div>
            <div className="border rounded ">
              <ListFour />
            </div>
            <div className="border rounded ">
              <ListFive />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
