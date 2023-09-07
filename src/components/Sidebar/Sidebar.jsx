import React from "react";
import './Sidebar.css';
import logo from '../../assets/Navbar.png';
import iconHome from '../../assets/Home.png';
import iconBJ from '../../assets/Vector-4.png';
import iconStd from '../../assets/ph_student-duotone.png';
import iconTA from '../../assets/Tuition.png';
import iconP from '../../assets/Vector-P.png';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {PowerIcon} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="font-sans bg-sky left-0 rounded-r-lg h-[calc(100vh)] w-full max-w-[18rem] p-4">
      <div className="mx-auto p-5">
      <a href="index.html" className="">
            <img src={logo} alt="" className="mt-200 h-100px"></img>
          </a>
      </div>
      <List color="white">
        <ListItem>
          <ListItemPrefix>
            <img src={iconHome} className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <img src={iconBJ} className="h-5 w-5" />
          </ListItemPrefix>
          Buat Janji
        </ListItem>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
               <img src={iconStd} className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Konsultasi
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-3">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Academy
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Goverment
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Profesional
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <ListItem>
          <ListItemPrefix>
            <img src={iconTA} className="h-5 w-5" />
          </ListItemPrefix>
          Tes Akademik
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <img src={iconP} className="h-5 w-5" />
          </ListItemPrefix>
          Pesanan
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}