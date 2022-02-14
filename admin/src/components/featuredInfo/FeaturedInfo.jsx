import React, {useState, useEffect} from 'react';
import './featuredInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
import {userRequest} from './../../requestMethods';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [yearTotal, setYearTotal] = useState(0);

  useEffect(()=>{
    const getIncome = async () => {
      let newArray = [];
      try{
        const res = await userRequest.get('/orders/income');
        const sortByMonth = [...res.data.income].sort((a,b)=> a._id - b._id);

        sortByMonth.map(month => newArray.unshift(month.total));

        setYearTotal(newArray.reduce((a,b) => (a+b)));
        setIncome(sortByMonth);
        setPercentage((sortByMonth[1].total * 100) / sortByMonth[0].total - 100);
      }catch(err){
        console.log(err)
      }
    }
    getIncome();
  },[])

  return (
    <div className='featured'>
      <div className='featuredItem'>
          <span className='featuredTitle'>Revenue</span>
          <div className='featuredMoneyContainer'>
              <span className='featuredMoney'>${income[0]?.total}</span>
              <span className='featuredMoneyRate'>
                {Math.floor(percentage)}%
                { percentage < 0
                  ?
                  <ArrowDownward className='featuredIcon negative'/>
                  :
                  <ArrowUpward className='featuredIcon'/>
                }

              </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
          <span className='featuredTitle'>Annual Revenue</span>
          <div className='featuredMoneyContainer'>
              <span className='featuredMoney'>$ {yearTotal}</span>
              <span className='featuredMoneyRate'>Annual Target: $1000</span>
              <span className='featuredMoneyRate'>Target Total Percent: {yearTotal/10}%</span>
          </div>
            <span className='featuredSub'>Total Revenue This Year</span>
      </div>
    </div>)
}

export default FeaturedInfo;
