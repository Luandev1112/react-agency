import React from 'react';
import ReactApexChart from 'react-apexcharts';

class LineChart extends React.Component {
        constructor(props) {
			super(props);

			this.state = {
          
           /*  series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }], */
			series: [
				{ 
					name: "My First dataset",
					data: [70, 40, 95, 60, 70, 80, 59] 
				},
					{	 
						name: "My Second dataset",
						data: [40, 80, 40, 15, 35, 15, 30]  
					}
				],
            options: {
				chart: {
					height: "auto",
					type: 'line',
					zoom: {
						enabled: false
					},
					toolbar: {
						  show: false,
					   },
				},
				legend:{
					position: 'top',
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				colors: ['#ff6384', '#36a2eb'],
				title: {
					text: 'Chart.js Line Chart - X-Axis Filter',
					align: 'center'
				},
				grid: {
					row: {
					  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					  opacity: 0.5
					},
				},
				xaxis: {
						categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				},
				yaxis: {
					show: true,
					labels: {
						show: true,
						align: 'right',
						minWidth: 55,
						maxWidth: 95,
						style: {
							colors: [],
							fontSize: '12px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 400,
							cssClass: 'apexcharts-yaxis-label',
						},
					},
				}
            },
          
          
        };
    }
	render() {
		return (
			<div id="chart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="line" height="auto" />
			</div>


		);
	}
}

export default LineChart;