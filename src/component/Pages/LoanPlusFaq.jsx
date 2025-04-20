import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function LoanPlusFaq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">
            For what purpose I can avail Personal Loan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The passages of Lorem Ipsum available but the majority ave suffer
            alteration embarrased the point of using Lorem sum is that it has a
            more-or-less normal distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span"> How interest is charged?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The passages of Lorem Ipsum available but the majority ave suffer alteration embarrased the point of using Lorem sum is that it has a more-or-less normal distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span"> What is the rate of interest?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The passages of Lorem Ipsum available but the majority ave suffer alteration embarrased the point of using Lorem sum is that it has a more-or-less normal distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">Can I pay off my loan early?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The passages of Lorem Ipsum available but the majority ave suffer alteration embarrased the point of using Lorem sum is that it has a more-or-less normal distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">Do you offering refinancing ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The passages of Lorem Ipsum available but the majority ave suffer alteration embarrased the point of using Lorem sum is that it has a more-or-less normal distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
