import React from 'react';
import './home.css'
import FeaturedInfo from './../../components/featuredInfo/FeaturedInfo';
import Chart from './../../components/chart/Chart';
import {userData} from './../../dummyData';
import WidgetLg from './../../components/widgetLg/WidgetLg';
import WidgetSm from './../../components/widgetSm/WidgetSm';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" dataKey='Active Users' grid/>
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home;
