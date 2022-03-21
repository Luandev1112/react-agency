import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion, } from 'react-bootstrap';
	
const defaultAccordion = [
	{
	  title: '1. Web design aorem apsum dolor sit amet?',
	  text:
		'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	},
	{
	  title: '2. Graphic design aorem apsum dolor ?',
	  text:
		'Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	},
	{
	  title: '3. Developement aorem apsum dolor sit amet ?',
	  text:
		'Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	},
	{
	  title: '4. True Responsiveness consectetuer adipiscing ?',
	  text:
		'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	},
	{
	  title: '5. Claritas est etiam processus ?',
	  text:
		'Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
	},
		
]	
const AccordionBlog = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion dlab-accordion faq-1 box-sort-in m-b30"  defaultActiveKey="-1">
			{defaultAccordion.map((d, i) => (
			   <div className="panel">
					<div className="acod-head">
						<h6 className="acod-title">
							<Accordion.Toggle as={Link} variant="link"
								className={` ${ activeDefault === i ? '' : 'collapsed'}`}
								onClick={() =>
									setActiveDefault(activeDefault === i ? -1 : i)
								} eventKey={`${i}`}>	
								 {d.title}		
							</Accordion.Toggle>
						</h6>	
					</div>
						
				<Accordion.Collapse eventKey={`${i}`} className="acod-body">
				  <div className="acod-content">
					{d.text}
					</div>
				</Accordion.Collapse>
			  </div>
			))}
		</Accordion>	
	)
}
export {defaultAccordion};
export default AccordionBlog;