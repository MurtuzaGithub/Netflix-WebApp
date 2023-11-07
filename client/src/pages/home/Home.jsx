import NavBar from "../../components/NavBar/NavBar"
import Featured from "../../featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJlOTIzMWZlNmQ1NDhmZDhjNjVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NDUwNCwiZXhwIjoxNjk3MzU4NTA0fQ._Rt2zU6V66P7V0GLqMZyO1Hk1t6H5648qBtII09zpDM"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
      console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;