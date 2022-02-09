import React from 'react';
import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
          <span className='featuredTitle'>Revenue</span>
          <div className='featuredMoneyContainer'>
              <span className='featuredMoney'>$4025</span>
              <span className='featuredMoneyRate'>
                -25.6 <ArrowDownward className='featuredIcon negative'/>
              </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
          <span className='featuredTitle'>Sales</span>
          <div className='featuredMoneyContainer'>
              <span className='featuredMoney'>$1479</span>
              <span className='featuredMoneyRate'>
                -1.6 <ArrowDownward className='featuredIcon negative'/>
              </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
          <span className='featuredTitle'>Cost</span>
          <div className='featuredMoneyContainer'>
              <span className='featuredMoney'>$125</span>
              <span className='featuredMoneyRate'>
                +22.6 <ArrowUpward className='featuredIcon'/>
              </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>)
}

export default FeaturedInfo;
