import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BarChartIcon from '@material-ui/icons/BarChart';
import PersonIcon from '@material-ui/icons/Person';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Clientes",
        icon: <PersonIcon />,
        link: "/clientes"
    },
    {
        title: "Status1",
        icon: <AssignmentIcon />,
        link: "/status1"
    },
    {
        title: "Status2",
        icon: <AssignmentIcon />,
        link: "/status2"
    },
    {
        title: "Status3",
        icon: <AssignmentIcon />,
        link: "/status3"
    },
    {
        title: "Status4",
        icon: <AssignmentIcon />,
        link: "/status4"
    },
    {
        title: "Status5",
        icon: <AssignmentIcon />,
        link: "/status5"
    },
    {
        title: "Gráficos",
        icon: <BarChartIcon />,
        link: "/graficos"
    },

];

