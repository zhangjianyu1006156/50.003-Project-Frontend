import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";

  import Rating from "./Rating";
  import { useNavigate } from "react-router-dom";

  const BookingCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/packageinfo", { state: props.my });
      };
  }