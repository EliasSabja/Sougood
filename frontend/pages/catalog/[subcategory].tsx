import type { ReactElement } from "react";
import { useRouter } from 'next/router';
import CatalogLayout from '../../components/catalog/catalogLayout';

const CategoryCatalog = (): ReactElement => {
  const router = useRouter();
  const { category } = router.query;

  console.log(category);
  return <CatalogLayout category={category} />
}

export default CategoryCatalog;
