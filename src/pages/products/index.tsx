import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Autocomplete,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
}


const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    id: 0,
    name: '',
    type: '',
    price: 0,
  });  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilterChange = async (event: React.ChangeEvent<{}>, newValue: string | null) => {
    if (newValue) {
      try {
        const response = await fetch(`/api/products?search=${newValue}`);
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching filtered products:', error);
      }
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.id === 0) {
      // Criação de produto
      try {
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
      } catch (error) {
        console.error('Error creating product:', error);
      }
    } else {
      // Edição de produto
      try {
        const response = await fetch(`/api/products/${formData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const updatedProduct = await response.json();
        const updatedProducts = products.map((product) =>
          product.id === formData.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }

    setFormData({ id: 0, name: '', type: '', price: 0 });
    
    handleCloseModal();
  };
  

  const handleDelete = async (productId: number) => {
    try {
      await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
  
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  
  const handleEdit = (product: Product) => {
    setFormData(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({ id: 0, name: '', type: '', price: 0 });
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      <Box>
        <Autocomplete
          freeSolo
          options={filteredProducts.map((product) => product.name)}
          onInputChange={handleFilterChange}
          renderInput={(params) => (
            <TextField {...params} label="Filter by ID or Name" />
          )}
        />
        <Button variant="outlined" onClick={() => setOpenModal(true)}>Criar Novo Produto</Button>
      </Box>


      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(product)} startIcon={<EditIcon />}>Edit</Button>
                  <Button onClick={() => handleDelete(product.id)} startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductModal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Fade in={openModal}>
          <ProductForm onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Product Type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Product Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="primary">Salvar</Button>
          </ProductForm>
        </Fade>
      </ProductModal>
    </Container>
  );
}