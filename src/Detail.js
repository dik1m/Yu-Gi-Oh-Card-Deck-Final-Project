// TODO: answer here
import { useState } from 'react';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Box, Image, Heading, Button, Text, Center, Flex} from '@chakra-ui/react';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fecthDetailCards = useCallback( async() => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;

    const response = await fetch(url);
    const data = await response.json();
    setCard(data?.data[0]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fecthDetailCards();
  }, [])
  return (
  <>
    <Button onClick={() => navigate('/')}>Back</Button>
    {loading ? 
      (<h1>Loading...</h1>) : 
      (
        <>
          <Box w='100%' px={20}>
              <Image src={card?.card_images[0]?.image_url}maxW='200px'/>
              <Heading as="h2" size="sm">{card?.name}</Heading>
              <Text>Level: {card?.level}</Text>
              <Text>{card?.attribute}</Text>
              <Text>ATK/{card?.atk} DEF/{card?.def}</Text>
              <Text>{`[ ${card?.type} / ${card?.race} ]`}</Text>
              <Text>{card?.desc}</Text>
          </Box>
         
          <Center>
            <Heading as="h2">Card Set</Heading>
          </Center>
          <Flex wrap="wrap" px={20}>
            {card?.card_sets.map((card_set, index) => (
              <Box w='auto' borderWidth='1px' key={index} my={2} p={2} mr={2}>
                <Text>Name: {card_set?.set_name}</Text>
                <Text>Code: {card_set?.set_code}</Text>
                <Text>Rarity: {card_set?.set_rarity}</Text>
                <Text>Price: {card_set?.set_price}</Text>
              </Box>
            ))}
          </Flex>
        </>
      )
    }
  </>) // TODO: replace this
}

export default Detail;
