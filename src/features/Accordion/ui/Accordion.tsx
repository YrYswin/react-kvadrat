import React from "react";
import { useState } from "react";
import Container from "../../../shared/helpers/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel: string) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  const backgroundColor = "rgba(38, 38, 38, 1)";
  const icon = (isExpanded) => <span style={{ color: "white" }}>{isExpanded ? "-" : "+"}</span>;

  return (
    <Container>
      <div className="w-full m-auto mt-20" style={{ backgroundColor, padding: "16px", borderRadius: "8px" }}>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ color: "white" }}
            expandIcon={icon(expanded === "panel1")}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            А как у вас консультироваться?
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel2")}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            А как у вас консультироваться?
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel3")}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            А как у вас консультироваться?
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel4")}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            А как у вас консультироваться?
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4"
          style={{ backgroundColor, color: "white" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            style={{ backgroundColor, color: "white" }}
            expandIcon={icon(expanded === "panel5")}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            А как у вас консультироваться?
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}
