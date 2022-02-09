import React, {useState, useMemo, useEffect} from 'react';
import './home.css'
import FeaturedInfo from './../../components/featuredInfo/FeaturedInfo';
import Chart from './../../components/chart/Chart';
import {userData} from './../../dummyData';
import WidgetLg from './../../components/widgetLg/WidgetLg';
import WidgetSm from './../../components/widgetSm/WidgetSm';
import {userRequest} from './../../requestMethods';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
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
      "Dec"
    ],
    []
  );

  useEffect(()=>{
    const getStats = async () => {
      try{
        const res = await userRequest.get('/users/stats')
        const sortByMonth = [...res.data].sort((a,b) => a._id - b._id)

        sortByMonth.map(item=>{
          setUserStats(prev => [
            ...prev,
            {name:MONTHS[item._id-1], "Active Users": item.total}
          ])
        })
      }catch(err){
        console.log(err)
      }
    }
    getStats();
  },[MONTHS])

  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userStats} title="User Analytics" dataKey='Active Users' grid/>
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home;
