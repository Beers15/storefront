import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const ProductPage = (props) => {
  const { id } = useParams();

  /* inefficient work around for not being able to pass id into mapStateToProps
     with react-router-dom v6 to get correct product as prop */
  const getProduct = () => {
    let match = props.products.find(entry => {
      return entry.id.toString() === id;
    });
    console.log(match)
    return match;
  }

  return (
    <div>
      <h1>{getProduct(id) && getProduct(id).id}</h1>
      <h1>{getProduct(id) && getProduct(id).name}</h1>
      <h1>{getProduct(id) && getProduct(id).price}</h1>
      <h1>{getProduct(id) && getProduct(id).imageUrl}</h1>
      <h1>{getProduct(id) && getProduct(id).inventoryCount}</h1>
      <h1>{getProduct(id) && getProduct(id).description || 'Oh dear... No description for this product is available.'}</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const mapStateToProps = state => {  
  return {
    products : state.products.products
  };
}

export default connect(mapStateToProps)(ProductPage);
