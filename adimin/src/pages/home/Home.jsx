import React, { useMemo } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
//import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(()=>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )

  const [userStats, setUserStats] = useState([]);

  useEffect (()=>{
    const getStats = async () =>{
    try{
        const res =  await axios.get("users/stats", {
          headers:{
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJlOTIzMWZlNmQ1NDhmZDhjNjVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NDUwNCwiZXhwIjoxNjk3MzU4NTA0fQ._Rt2zU6V66P7V0GLqMZyO1Hk1t6H5648qBtII09zpDM"
         },
      });
      const statsList = res.data.sort(function (a, b){
        return a._id - b._id;
      });

     statsList.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User" : item.total},
    
    ]))

    }catch(err){
      console.log(err);

    }
  }; 
  getStats();
   
  },[MONTHS]);

  //console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
