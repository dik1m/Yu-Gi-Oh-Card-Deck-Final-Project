// TODO: answer here
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import { Box, Center, Heading, Text } from "@chakra-ui/react";

const App = () => {
  const MyRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />} />

        <Route path="*" element={<Text>404 Page not found!</Text>} />
      </Routes> // TODO: replace this
  )

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
