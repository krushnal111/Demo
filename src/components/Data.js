import  React,{ useState, useEffect } from "react";
import axios from "axios";


const Data = () => {
  
  const [fetch, fetchData] = useState([]);
  const displayUser = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    display();
  }, []); 
  const display = async () => {
    const data = await axios.get(displayUser);
    fetchData(data.data);
  };
  return (
    <div>
      
      {
         fetch.map((data, index) => (
            <div key={index}>
              <div>{`Name : ${data.name}`}</div>
              <div>{`Email :  ${data.email}`}</div>
              <div> {`Body :  ${data.body} `}</div>
            </div>
          ))
        }
    </div>
  );
}

export default Data;
