import React from 'react'
import { NavDropdown } from 'react-bootstrap';

interface Props {
    category: string,
    subcategories: string[],
    componentStyle: string,
}

function CategoryItem({ category, subcategories, componentStyle }: Props) {

  const listSubcategories = subcategories.map(subcategory => <NavDropdown.Item href={"/catalog/category/" + subcategory}>{subcategory}</NavDropdown.Item>);

  return (
    <NavDropdown title={<span className={componentStyle}>{category}</span>}>
        {listSubcategories}
    </NavDropdown>
  )
}

export default CategoryItem
