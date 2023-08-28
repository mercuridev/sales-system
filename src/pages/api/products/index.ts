import { NextApiRequest, NextApiResponse } from 'next';
import db from '../connection';

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;

  try {
    let products;

    if (search && typeof search === 'string') {
      // Se o parâmetro "search" estiver presente, filtre os produtos por nome
      products = await db.any('SELECT * FROM products WHERE name ILIKE $1', [`%${search}%`]);
    } else {
      // Caso contrário, obtenha todos os produtos
      products = await db.any('SELECT * FROM products');
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, type, price } = req.body;
    const newProduct = await db.one(
      'INSERT INTO products (name, type, price) VALUES ($1, $2, $3) RETURNING *',
      [name, type, price]
    );
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  try {
    const { name, type, price } = req.body;
    const updatedProduct = await db.one(
      'UPDATE products SET name = $1, type = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, type, price, id]
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  console.log(id)

  try {
    await db.none(`DELETE FROM products WHERE id = ${id}`);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
  
    if (method === 'GET') {
      getProducts(req, res);
    } else if (method === 'POST') {
      createProduct(req, res);
    } else if (method === 'PUT') {
      updateProduct(req, res);
    } else if (method === 'DELETE') {
      deleteProduct(req, res);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };