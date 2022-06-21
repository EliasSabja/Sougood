import { useState, useEffect} from 'react';
import { Form, Container, Row} from 'react-bootstrap';
import { getCategories } from '../../../lib/categories';
import Category from '../../../types/category';
import Subcategory from '../../../types/subcategory';
import { CreateProduct } from '../../../types/product';

interface ICategory extends Category {
  subcategories: Subcategory[];
}

const AddProduct = () => {
  const [error, setError] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [product, setProduct] = useState<CreateProduct>({
    "name": "",
    "description": "",
    "category": "",
    "subcategory": "",
    "seller": "",
    "price": 0,
    "stock": 0,
    "size": "",
    "tags": []
  });

  useEffect(() => {
    console.log(product);
    setSubcategories(getSubcategory(product.category));
  }, [product]);

  useEffect(() => {
    getCategories().then(cats => {console.log(cats); setCategories(cats);}).catch(e => console.log(e));
  }, []);

  const getSubcategory = (categoryId: string): Subcategory[] => {
    let currCategory: ICategory = categories[0];
    categories.forEach(((category: ICategory) => {
      if (categoryId == category._id) currCategory = category;
    }))
    return categories[categories.indexOf(currCategory)].subcategories;
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({...product, [event.target.name]: event.target.value});
  }

  const categoryOptions = categories.map((category, index) => <option key={index} value={category._id}>{category.name}</option>);
  return (
    <Container fluid>
      <Row xl={3} lg={2} md={2}>
        <Form className={`border p-4 m-5 mx-auto`} onSubmit={() => console.log("Sending form")}>
            <h1 className='text-center m-3'>Crear Producto</h1>
            { error && <div className="alert alert-danger" role="alert"> Datos de usuario inválidos</div>}
          
            <div className='mt-2'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" onChange={(e: any) => handleOnChange(e)} type="text" required={true}/>
            </div>

            <div className='mt-2'>
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="description" onChange={(e: any) => handleOnChange(e)} type="text" required={true}/>
            </div>

            <div className='mt-2'>
              <Form.Label>Precio</Form.Label>
              <Form.Control name="price" onChange={(e: any) => handleOnChange(e)} type="text" required={true}/>
            </div>

            <div className='mt-2'>
              <Form.Label>Stock</Form.Label>
              <Form.Control name="stock" onChange={(e: any) => handleOnChange(e)} type="text" required={true}/>
            </div>

            <div className='mt-2'>
              <Form.Label>Categoría</Form.Label>
              <Form.Select name="category" onChange={(e: any) => handleOnChange(e)} required={true}>
                {categories.map((category, index) => <option key={index} value={category._id}>{category.name}</option>)}
              </Form.Select>
            </div>

            <div className='mt-2'>
              <Form.Label>Subcategoría</Form.Label>
              <Form.Select name="subcategory" onChange={(e: any) => handleOnChange(e)} required={true}>
                {subcategories && subcategories.map((subcategory, index) => <option key={index} value={subcategory._id}>{subcategory.name}</option>)}
              </Form.Select>
            </div>

          <div className={`text-center mt-3`}>
            <button className={`btn btn-outline-success`}style={{marginTop: 10}} type="submit">
              Añadir producto
            </button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default AddProduct;