"use client"
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import {Bar,Doughnut,Scatter} from "react-chartjs-2";

const AboutPage = () => {
  return (
    <div className=' grid gap-3 grid-cols-4 h-[100%] mt-[50px]'>
      <div className=' bg-[#3D1466] h-[100px] rounded-md'><p className=' font-semibold'>Mean</p>
      <div className=' flex justify-center items-center mt-[20px] text-xl'>371.68</div>
      </div>
      <div className=' bg-[#3D1466] h-[100px] rounded-md'><p className=' font-semibold'>
        standard deviation</p>
        <div className=' flex justify-center items-center mt-[20px] text-xl'>389.5</div>
        </div>
        <div className=' bg-[#3D1466] h-[100px] rounded-md '><p className=' font-semibold'>
        Max</p>
        <div className=' flex justify-center items-center mt-[20px] text-xl'>1803.0</div>
        </div>
        <div className=' bg-[#3D1466] h-[100px] rounded-md '><p className=' font-semibold'>
        MIN</p>
        <div className=' flex justify-center items-center mt-[20px] text-xl'>9.43</div>
        </div>

      <div className='bg-[#3D1466] col-span-3 h-[300px] rounded-md'>
      <Bar
        data={{
          labels: ['Linear', 'Decision Tree', 'SVR', 'SMO'],
          datasets: [
            {
              label : 'R2 Score',
              data : [0.436, 0.661, 0.213, 0.986 ],
              color: ['rgba(255, 255, 255, 1)'],
              backgroundColor: [  'rgba(255, 179, 22, 1)',],
              borderRadius: 10,
              
            }
          ]
        }}
        options={{
          scales: {
            x: {
              ticks: {
                color: 'white' // change the font color of x-axis labels
              }
            },
            y: {
              ticks: {
                color: 'white' // change the font color of y-axis labels
              }
            }
          },
          legend: {
            labels: {
              color: 'rgb(255,255,255)' // change the font color of legend labels
            }
          }
        }}
      />
      </div>
      <div className='bg-[#3D1466] rounded-md '>
        <div>Best model</div>
       <div className=' flex flex-col justify-center h-[100%]'>
       <Doughnut
        data={{
          labels: ['accuracy', 'error'],
          datasets: [
            {
              label : 'accuracy percentage',
              data : [98, 2],
              color: ['rgba(255, 255, 255, 1)'],
              backgroundColor: [  'rgba(255, 179, 22, 1)',
              'rgba(255, 255, 255, 0)'],
            
              
            }
          ]
        }}
        />
       </div>
      </div>
      <div className='bg-[#3D1466] rounded-md col-span-5  '>
         <div className=' ml-3'>Scatter Chart</div>
     <div className=' mt-3 h-[400px] mb-4 text-white'>
     <Scatter
      data = {{
        labels: ['Linear', 'Decision Tree'],
        datasets: [{
          label: 'Actual Values vs Predicted Values',
          data: [{
            x: 180.00,
            y: 243.25
          }, {
            x: 1083.00,
            y: 913.87
          }, {
            x: 36.61,
            y:  37.41
          }, 
          {
            x: 71.13,
            y: 48.72
          },
          {
            x:  481.00,
            y: 566.92
          },
          {
            x: 29.83,
            y: 32.70
          },
          {
            x: 9.43,
            y: 31.64
          },
          {
            x: 680.00,
            y: 611.20
          },
          {
            x: 45.66,
            y: 44.40
          },
          {
            x: 81.18,
            y: 79.05
          },
          {
            x: 71.48,
            y:  57.321
          },
          {
            x:  356.00,
            y: 329.23
          },
          {
            x: 286.00,
            y: 392.33
          },
          {
            x: 601.00,
            y: 601.00
          },
          {
            x: 851.0,
            y: 863.90
          }],
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgba(255, 255, 255, 1)',
        }],
      }}
      options={{
        scales: {
          x: {
            ticks: {
              color: 'white' // change the font color of x-axis labels
            }
          },
          y: {
            ticks: {
              color: 'white' // change the font color of y-axis labels
            }
          }
        },
        legend: {
          labels: {
            fontColor: 'red' // change the font color of legend labels
          }
        }
        
      }}
      />
     </div>
      </div>
      

    </div>
  );
}

export default AboutPage;