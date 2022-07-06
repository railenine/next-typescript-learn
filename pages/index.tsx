import { useState } from 'react';

import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  
  const [rating, setRating] = useState<number>(4);
  
  return (
    <>
      <Htag tag='h1'>asdasdadadsd</Htag>
      <Button appearance='primary'>BTN</Button>
      <Button appearance='ghost' arrow='right'>BTN</Button>
      <P size='l'>sdfsdfdsfsdfsdfsdfsdfdsfsdfsf</P>
      <P>dfhdthfhjfghfh</P>
      <P size='m'>dfgdfhfgjfhgj</P>
      <P size='s'>dfhfgjfjgfgjj</P>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color='red'>red med</Tag>
      <Tag size='s' color='primary'>primary</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Tag size='s' color='grey'>grey</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);