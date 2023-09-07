import React from "react";
import './Header.css';
import {
    Navbar,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function NavbarWithSearch() {
    return (
        <Navbar className="mx-auto w-[1075px] px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <Typography
                    variant="h6"
                    className="mr-4 ml-2 py-1.5"
                >
                    Hello, User
                </Typography>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text" color="blue-gray">
                        <Cog6ToothIcon className="h-4 w-4" />
                    </IconButton>
                    <IconButton variant="text" color="blue-gray">
                        <BellIcon className="h-4 w-4" />
                    </IconButton>
                </div>
                <div className="relative flex w-full gap-2 md:w-max pr-20 mb-10">
                    <Button color="yellow" size="sm" className="!absolute right-1 rounded">
                        LOGIN
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}
