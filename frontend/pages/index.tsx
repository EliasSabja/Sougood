import type {ReactElement} from 'react';
import { useRouter } from 'next/router';
import CatalogLayout from '../components/catalog/catalogLayout';

const Index: ReactElement = () => {

  return(
    <CatalogLayout />  
  ); 
};

export default Index;
