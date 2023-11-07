import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJlOTIzMWZlNmQ1NDhmZDhjNjVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NDUwNCwiZXhwIjoxNjk3MzU4NTA0fQ._Rt2zU6V66P7V0GLqMZyO1Hk1t6H5648qBtII09zpDM"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
   // <Link to={{ pathname: "/watch", movie: movie }}>
      <Link to="/watch" state={{movie}}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 325 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}



//headers:{
  //token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJlOTIzMWZlNmQ1NDhmZDhjNjVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NDUwNCwiZXhwIjoxNjk3MzU4NTA0fQ._Rt2zU6V66P7V0GLqMZyO1Hk1t6H5648qBtII09zpDM"
//},


