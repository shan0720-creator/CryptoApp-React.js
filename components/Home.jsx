import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react";
import btcSrc from "../assets/bitcoin2.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgcolor={"blackalpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height: "80vh",
      }}
      animate={{
        translateY:"10px"
      }}
      transition={{
        duration:1,
        repeat:Infinity,
        repeatType:"reverse",
      }}>
      <Image w={"full"} h={"full"} objectFit = {"contain"} src={btcSrc} filter={"grayscale(1)"} />
      </motion.div>
      <Text fontSize ={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-40"}>Xcrypto</Text>
    </Box>
  )
}

export default Home