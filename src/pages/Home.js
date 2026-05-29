import FoodCard from '../components/FoodCard';

function Home({ addToCart }) {

  const foods = [
    {
      id: 1,
      name: 'Burger',
      price: 120,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    {
      id: 2,
      name: 'Pizza',
      price: 250,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
    },
    {
      id: 3,
      name: 'Pasta',
      price: 180,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
    },
    {
      id: 4,
      name: 'Sandwich',
      price: 100,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
    }
  ];

  return (
    <div className='container'>

      <h1>Available Food Items</h1>

      <div className='food-grid'>

        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;