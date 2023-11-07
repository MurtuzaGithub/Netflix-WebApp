import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Featured({ type, setGenre }) {

    const [content, setContent] = useState({});

    useEffect(() => {
        if (type) {
          const getRandomContent = async () => {
            try {
              const res = await axios.get(`/movies/random?type=${type}`, {
                headers:{
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJlOTIzMWZlNmQ1NDhmZDhjNjVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NDUwNCwiZXhwIjoxNjk3MzU4NTA0fQ._Rt2zU6V66P7V0GLqMZyO1Hk1t6H5648qBtII09zpDM"
                  },
              });
              setContent(res.data[0]);
            } catch (err) {
              console.log(err);
            }
          };
          getRandomContent();
        }
      }, [type]);
      

    //console.log(content)
    return (
        <div className='featured'>
        {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="anime">Anime</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}



            <img
                src={content.img
                }
                alt=""
            />

            <div className="info">

                <img
                    src={content.imgTitle}
                    alt=""
                />

                <span className="desc">
                    {content.desc}

                </span>

                <div className="buttons">

                    <button className="play">
                        <PlayArrow className="icon" />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <InfoOutlined className="icon"/>
                        <span>Info</span>
                    </button>

                </div>

            </div>

        </div>

    )
}


