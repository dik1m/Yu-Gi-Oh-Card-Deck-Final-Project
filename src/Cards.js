// TODO: answer here
import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Card({ card }) {
  return (
    <Link to={`/card/${card?.id}`}>
      <Box className='yugioh-card' w='100%'>
        <Image src={card?.card_images[0]?.image_url} />
        <Heading as="h2" size="sm">{card?.name}</Heading>
      </Box>
    </Link>
  ) // TODO: replace this
}

export default Card;
