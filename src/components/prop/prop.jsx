import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";


function Prop({title}) {
  const [counter, setCounter]  = useState(0);
 
  
  const onClickHandler = ()=>{
    setCounter(counter + 1)
  }

  return (
    <div>
      <h3>Counter</h3>
      counter &nbsp; {counter}
      <p>{title}</p>
      <Button onClick={onClickHandler} variant={"outline"}>
        {" "}
        +{" "}
      </Button>
      <Button> - </Button>
      <div>
        <Button variant={"outline"} leftIcon={<FaPhoneAlt />}>
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Prop