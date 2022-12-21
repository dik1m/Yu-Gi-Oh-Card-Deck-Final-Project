// TODO: answer here

import { Container, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Cards from './Cards';

function Home() {
  // TODO: answer here
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const fecthCards = useCallback( async() => {
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";

    const response = await fetch(url);
    const data = await response.json();
    setCards(data?.data);
    setLoading(false);
  }, []);

  const compareStringForSort = (a, b)  => {
    return a.name < b.name ? -1  : a.name > b.name ? 1 : 0;
  }
  function sortData(type) {
    // TODO: answer here
    let cards_temp = [];
    if(type === 'Name'){
      cards_temp = cards.sort(compareStringForSort);
      setCards([...cards_temp]);
    }else if(type === 'Attack'){
      cards_temp = cards.sort((a,b) => a.atk - b.atk);
      setCards([...cards_temp]);
    }else if(type === 'Defence'){
      cards_temp = cards.sort((a,b) => a.def - b.def);
      setCards([...cards_temp]);
    }
  }


  useEffect(() => {
    fecthCards();
  }, [])
  return (
    <Container maxW='container.sm' centerContent>
      <Select name="sort" my={10} onChange={(e) => sortData(e.target.value)}>
      <option value='Name'>Sort By</option>
        <option value='Name'>name</option>
        <option value='Attack'>attack</option>
        <option value='Defence'>defence</option>
      </Select>
      {loading ? (
      <Heading as="h1">Loading...</Heading>
      ) : (
        <SimpleGrid columns={4} spacing={10}>
          {cards.map((card, index) => (
            <Cards card={card} key={index} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  ) // TODO: replace this
}

export default Home;
