import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  
  return (
    <>
      main
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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