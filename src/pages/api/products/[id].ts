import { NextApiRequest, NextApiResponse } from 'next';
import db from '../connection';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { id },
      method,
    } = req;
  
    if (method === 'GET') {
      // Obter detalhes de um produto específico
      try {
        const product = await db.one('SELECT * FROM products WHERE id = $1', [id]);
        res.status(200).json(product);
      } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else if (method === 'PUT') {
      // Editar um produto existente
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
    } else if (method === 'DELETE') {
      // Excluir um produto
      try {
        await db.none('DELETE FROM products WHERE id = $1', [id]);
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };