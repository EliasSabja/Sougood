import type { ReactElement } from "react";
import {useRouter} from 'next/router';
import CatalogLayout from '../../components/catalog/catalogLayout';

const SubcategoryCatalog = (): ReactElement => {
  const router = useRouter();
  const {subcategory} = router.query;

  console.log(subcategory);
  return <CatalogLayout subcategory={subcategory}/>
}

export default SubcategoryCatalog;
