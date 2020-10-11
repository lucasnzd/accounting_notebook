import React, { Component } from "react";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './styles';

class SimpleAccordionRaw extends Component {
  render = () => {
    const { data, classes } = this.props;

    return (
      <div className={classes.accordionWrapper}>
        {
          data.length > 0 && data.map((item, index) => {
            return (
              <Accordion key={item.id} className={classes[item.type]}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <div>
                    <Typography className={classes.heading}>Type: {item.type}</Typography>
                  </div>
                  <div>
                    <Typography className={classes.heading}>Amount: {`$${item.amount}`}</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Typography>Transaction ID: {item.id}</Typography>
                  </div>
                  <div>
                    <Typography>Created At: {item.created_at}</Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })
        }
      </div>
    );
  }
}

export const SimpleAccordion = withStyles(styles)(SimpleAccordionRaw);
