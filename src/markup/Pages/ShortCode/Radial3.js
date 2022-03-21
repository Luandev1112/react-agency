import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Radial3 extends React.Component {
        constructor(props) {
			super(props);
			this.state = {
          
				series: [65],
				options: {
					chart: {
						height: 350,
						type: 'radialBar',
					},
					plotOptions: {
						radialBar: {
							track: {
								background: "rgba(108,192,0,0.25)",
							},
							hollow: {
								size: '50%',
							},
							dataLabels: {
								show: true,
								name: {
								  offsetY: -10,
								  show: false,
								  color: '#888',
								  fontSize: '17px'
								},
								value: {
								  color: '#111',
								  fontSize: '30px',
								  show: true,
								}
							  }
						  },
						},
					labels: [''],
					colors: [
					   "rgba(108,192,0,1)",
					],
				},
          
          
			};
        }
	render() {
		return (
			<div id="chart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={240} />
			</div>


		);
	}
}
export default Radial3;