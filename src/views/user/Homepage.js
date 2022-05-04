import Biolerplate from '../../components/boilerplate/Boilerplate'
import './homepage.css'
import faker from '@faker-js/faker';
import { MdOutlineAttachMoney } from 'react-icons/md'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Month on Month',
    },
  },
  maintainAspectRatio: false
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function content() {
  return (
    <>
      <div className='user_container'>
        <div className='user_header card'>
          <div className='user_header_label'>
            Order to Cash
          </div>
        </div>

        <div className='user_navigation'>
          <div className='user_navigation_selection'>
            <button className='user_navigation_button'>Button 1</button>
            <button className='user_navigation_button'>Button 2</button>
            <button className='user_navigation_button'>Button 3</button>
          </div>
        </div>

        <div className='user_content'>

          <div className='user_header_cards'>

            {/* --- Card --- */}
            <div className='user_card_parent'>
              <div className='user_card_content'>
                <div className='user_card_icon'>
                  <MdOutlineAttachMoney className='user_card_icon_prop' />
                </div>
                <div className='user_card_header'>
                  $100,000
                </div>
                <div className='user_card_label'>
                Sales
                </div>
              </div>
            </div>

          </div>

          <div className='user_graphs card'>
            <Line options={options} data={data}/>
          </div>

          <div className='user_table'>
            tables
          </div>


        </div>
      </div>
    </>
  )

}


function Homepage() {
  return (
    <div><Biolerplate content={content()} /></div>
  )
}

export default Homepage