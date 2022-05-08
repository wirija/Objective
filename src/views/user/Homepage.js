import Biolerplate from '../../components/boilerplate/Boilerplate'
import './homepage.css'
import faker from '@faker-js/faker';
import { BsArrowRightShort, BsTriangleFill } from 'react-icons/bs'
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
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Sales Month on Month',
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top:15,
      left: 10,
      right: 10,
      bottom: 25
    }
  }
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = {
  labels,
  datasets: [
    {
      label: '2021',
      data: labels.map(() => faker.datatype.number({ min: 100000, max: 1000000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2022',
      data: labels.map(() => faker.datatype.number({ min: 100000, max: 1000000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const options_table_chart = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: false
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
};

const data_table = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};



const topCust = [
  { no: "1", name: 'Lam Chun Kik', sales: "$100,000.00", company: faker.company.companyName() },
  { no: "2", name: 'Ang Boi Chin', sales: "$99,000.00", company: faker.company.companyName() },
  { no: "3", name: 'Bai Chi Di', sales: "$98,000.00", company: faker.company.companyName() },
  { no: "4", name: 'Chu Din En', sales: "$97,000.00", company: faker.company.companyName() },
  { no: "5", name: 'Dan E Fong', sales: "$96,000.00", company: faker.company.companyName() },
  { no: "6", name: 'Ee Fei Gong', sales: "$95,000.00", company: faker.company.companyName() },
  { no: "7", name: 'Fu Goi Hin', sales: "$92,000.00", company: faker.company.companyName() },
  { no: "8", name: faker.name.findName(), sales: "$91,000.00", company: faker.company.companyName() },
  { no: "9", name: faker.name.findName(), sales: "$90,000.00", company: faker.company.companyName() },
  { no: "10", name: faker.name.findName(), sales: "$89,000.00", company: faker.company.companyName() }
]

const topSP = [
  { no: "1", name: faker.name.findName(), sales: "$100,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "2", name: faker.name.findName(), sales: "$99,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "3", name: faker.name.findName(), sales: "$98,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "4", name: faker.name.findName(), sales: "$97,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "5", name: faker.name.findName(), sales: "$96,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "6", name: faker.name.findName(), sales: "$95,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "7", name: faker.name.findName(), sales: "$92,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "8", name: faker.name.findName(), sales: "$91,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "9", name: faker.name.findName(), sales: "$90,000.00", team: faker.random.alpha(1).toUpperCase() },
  { no: "10", name: faker.name.findName(), sales: "$89,000.00", team: faker.random.alpha(1).toUpperCase() }
]




function content() {
  return (
    <div>
      <div className='user_container'>

        <div className='user_header'>
          <div className='user_header_label'>
            Order to Cash
          </div>
        </div>


        <div className='user_content'>
          <div className='user_content_select_period'>
            <select name="Period" id="OTC_Period" className="dropdown_selection">
              <option value="FY21">1 Jan 2021 - 31 Dec 2021</option>
              <option value="FY20">1 Jan 2020 - 31 Dec 2020</option>
              <option value="FY19">1 Jan 2019 - 31 Dec 2019</option>
              <option value="FY18">1 Jan 2018 - 31 Dec 2018</option>
            </select>
          </div>

          <div className='user_header_cards'>

            {/* --- Card 1 --- */}
            <div className='card user_card_container margin_right'>
              <div className='user_card_label'>
                TOTAL SALES
              </div>

              <div className='user_card_content'>
                <div className='user_card_content_data'>
                  <div className='user_card_maincontent'>
                    ${(faker.datatype.number({ min: 100000, max: 10000000 })).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className='user_card_subcontent'>
                    <BsTriangleFill style={{"color":"green"}}/> {faker.datatype.number({min:0, max:100})}% compared to previous year
                  </div>
                </div>
              </div>

              <div className='user_card_link'>
                Details <BsArrowRightShort />
              </div>
            </div>


            {/* --- Card 2 --- */}
            <div className='card user_card_container margin_right '>
              <div className='user_card_label bkgd_violet'>
                NO. OF CUSTOMERS
              </div>

              <div className='user_card_content'>
                <div className='user_card_content_data'>
                  <div className='user_card_maincontent'>
                    {(faker.datatype.number({ min: 100, max: 200 })).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className='user_card_subcontent'>
                    <BsTriangleFill style={{"color":"green"}}/> {faker.datatype.number({min:0, max:100})}% compared to previous year
                  </div>
                </div>
              </div>

              <div className='user_card_link bkgd_violet_light'>
                Details <BsArrowRightShort />
              </div>
            </div>


            {/* --- Card 3 --- */}
            <div className='card user_card_container margin_right '>
              <div className='user_card_label bkgd_purple'>
                NO. OF PRODUCTS SOLD
              </div>

              <div className='user_card_content'>
                <div className='user_card_content_data'>
                  <div className='user_card_maincontent'>
                    {(faker.datatype.number({ min: 1000, max: 13242 })).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className='user_card_subcontent '>
                    <BsTriangleFill style={{"color":"green"}}/> {faker.datatype.number({min:0, max:100})}% compared to previous
                  </div>
                </div>
              </div>

              <div className='user_card_link bkgd_purple_light'>
                Details <BsArrowRightShort />
              </div>
            </div>


            {/* --- Card 4 --- */}
            <div className='card user_card_container'>
              <div className='user_card_label bkgd_green'>
                COLLECTION DAYS
              </div>

              <div className='user_card_content'>
                <div className='user_card_content_data'>
                  <div className='user_card_maincontent'>
                    {(faker.datatype.number({ min: 10, max: 20 })).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Days
                  </div>
                  <div className='user_card_subcontent'>
                    <BsTriangleFill class='rotate_180' style={{"color":"rgb(206, 0, 52)"}} /> {faker.datatype.number({min:0, max:10})} days compared to last year
                  </div>
                </div>
              </div>

              <div className='user_card_link bkgd_green_light'>
                Details <BsArrowRightShort />
              </div>
            </div>

          </div>


          <div className='graphs'>
            <div className='graphs_label'>
              Sales Month on Month
            </div>
            <div className='graphs_content'>
              <Line options={options} data={data} />
            </div>

          </div>


          {/* ---  random shit ----  */}
          {/* --- TODO - React Table --- */}
          <div className='user_stats_cards'>

            {/* ----- Card  1  ----- */}
            <div className='user_stats_card_container margin_right'>
              <div className='user_stats_cards_label'>
                TOP CUSTOMERS (BY SALES)
              </div>
              <div className='user_stats_card_content'>

                <table>
                  <tr>
                    <th className='text_center'>No.</th>
                    <th>Name</th>
                    <th>Company Name</th>
                    <th>Sales Amount</th>
                  </tr>
                  {topCust.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td className='text_center'>{val.no}</td>
                        <td>{val.name}</td>
                        <td>{val.company}</td>
                        <td>{val.sales}</td>
                      </tr>
                    )
                  })}
                </table>

              </div>
            </div>



            <div className='user_stats_card_container '>
              <div className='user_stats_cards_label'>
                TOP SALESPERSON 
              </div>
              <div className='user_stats_card_content'>

                <table>
                  <tr>
                    <th className='text_center'>No.</th>
                    <th>Name</th>
                    <th>Sales Amount</th>
                    <th>Team</th>
                  </tr>
                  {topSP.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td className='text_center'>{val.no}</td>
                        <td>{val.name}</td>
                        <td>{val.sales}</td>
                        <td>{val.team}</td>
                      </tr>
                    )
                  })}
                </table>

              </div>
            </div>


            {/* <div className='user_stats_card_container margin_right'>

              <div className='user_stats_cards_label'>
                TOP SALESPERSON
              </div>
              <div className='user_stats_card_content'>

                <section className='sectionTable'>
                  <div className='sectionTableheader flex1 display_flex'>
                    <div className='text_center flex1'>No.</div>
                    <div className='flex2'> Name</div>
                    <div className='flex2'>Sales Amount</div>
                    <div className='text_center flex2'>Team</div>
                    <div className='text_center flex6'> Trend </div>
                  </div>
                  {topSP.map((val, key) => {
                    return (
                      <div className='sectionTableRow display_flex flex1' key={key}>
                        <div className='text_center flex1'>{val.no}</div>
                        <div className='flex2'>{val.name}</div>
                        <div className='flex2'>{val.sales}</div>
                        <div className='text_center flex2'>{val.team}</div>
                        <div className='text_center flex6 graphs_content_container'>
                        <div className='graphs_content_table'>
                          <Line options={options_table_chart} data={data_table} />  
                            </div>
                        </div>
                      </div>
                    )
                  })}
                </section>

              </div>
            </div> */}

          </div>

        </div>
      </div>
    </div>
  )

}


function Homepage() {
  return (
    <div><Biolerplate content={content()} /></div>
  )
}

export default Homepage