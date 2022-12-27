import { Button,HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} backgroundColor={"whiteAlpha.200"}>
     <Button Variant ={"unstyled"} backgroundColor={"black"} color={"white"}>
        <Link to="/">Home</Link>
     </Button>
     <Button Variant ={"unstyled"} color={"black"}>
        <Link to="/exchanges">Exchanges</Link>
     </Button>
     <Button Variant ={"unstyled"} color={"black"}>
        <Link to="/coins">Coins</Link>
     </Button>
    </HStack>
  )
}

export default Header