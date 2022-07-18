import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  
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
      <Input placeholder='test' />
      <Textarea placeholder='asas' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}