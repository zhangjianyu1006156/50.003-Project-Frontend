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
   
const ComparisonCard  = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/packageinfo", { state: props.my });
      };
      console.log("props.my");
      console.log(props.my);
    return (
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={props.my.image}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {props.my.placename}
            </Typography>
            <Rating rating={props.my.rating} />
          </div>

          <Typography color="gray">
            from {props.my.sourcewebsite}
          </Typography>

          <Typography color="gray">
            {props.my.bookingmode}
          </Typography>

          <Typography color="gray">
            S${props.my.bookingprice}
          </Typography>

          <Typography color="gray">
            {props.my.bookingprice < props.other.bookingprice ? (
                <p>Lower price</p>
            ) : (
                <p>.</p>
            )}
          </Typography>

          <Typography color="gray">
            {props.my.rating > props.other.rating ? (
                <p>Highest rated</p>
            ) : (
                <p>.</p>
            )}
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-3">
          <Button color="green"  size="lg" fullWidth={true} onClick={handleClick}>
            View
          </Button>
        </CardFooter>
      </Card>
    );
  }

  export default ComparisonCard;