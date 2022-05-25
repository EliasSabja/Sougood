import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import CatalogLayout from '../components/catalog/catalogLayout';
import { Drawer } from '@mui/material';
const Index: ReactElement = () => {

  return (
    <Drawer>
      <CatalogLayout />
    </Drawer>
  );
};

export default Index;
