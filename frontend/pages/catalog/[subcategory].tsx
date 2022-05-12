import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles  from '../../assets/styles/catalog.module.css';

const SubcategoryCatalog: ReactElement = () => {
  const router = useRouter();
  const { subcategory } = router.query;

  console.log(subcategory)

  useEffect(() => {
    // Load Subcategory products
    //
    // Render Subcategory products
  });

  return (
  <div className={styles.catalogContainer}>
    <h4>{subcategory}</h4>
  </div>
  );
}

export default SubcategoryCatalog;
