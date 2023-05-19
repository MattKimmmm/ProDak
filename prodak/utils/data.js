import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jaehun',
      email: 'iamjaehunjeong@gmail.com',
      password: bcrypt.hashSync('Jaehun0921!'),
      isAdmin: true,
    },
    {
      name: 'test_bot',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('test123'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Classic Chicken Breast',
      slug: 'classic-chicken-breast',
      category: 'Sous-Vide Chicken',
      image: '/images/classic.jpg',
      price: 6.99,
      rating: 4.5,
      numReviews: 8,
      countInStock: 5,
      description: 'Best Seller',
    },
    {
      name: 'Classic Cubed',
      slug: 'classic-cubed',
      category: 'Sous-Vide Chicken',
      image: '/images/classic_cubed.jpg',
      price: 7.99,
      rating: 4.5,
      numReviews: 8,
      countInStock: 15,
      description: 'Cubed Sous-Vide Chicken Breast',
    },
    {
      name: 'Classic Sliced',
      slug: 'classic-sliced',
      category: 'Sous-Vide Chicken',
      image: '/images/classic_sliced.jpg',
      price: 7.99,
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: 'Sliced Sous-Vide Chicken Breast',
    },
  ],
};

export default data;
