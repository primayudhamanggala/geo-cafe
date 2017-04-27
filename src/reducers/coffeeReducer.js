import { ADD_COFFEE, EDIT_COFFEE, REMOVE_COFFEE } from '../actions/constants';

const initialState = [
  {
    id: 1,
    name: 'Celebes Kalossi Toraja',
    image: 'https://images-na.ssl-images-amazon.com/images/I/412KIMitneL._SY445_.jpg',
    flavour: 'RICH & FULL BODIED',
    description: `Grown on the Rante Karua mountain range in S.W. Sulawesi.
                  The beans are hand picked and sun dried.
                  The coffee produces a heavy smooth liquor and a rich flavour.`,
  },
  {
    id: 2,
    name: 'Old Brown Java',
    image: 'http://www.teasandcoffees.co.uk/wp-content/uploads/Old-Brown-Java-Indonesian57DST5.jpg',
    flavour: 'RICH & FRUITY / SWEET',
    description: `Accidentally 'invented' when this Javanese coffee was used as ballast in trading cutters on their way to the New World.
                  The coffee matured with the bean changing colour from a light green to pale brown.
                  This results in the loss of some acidity and an enhanced, heavy body and sweetness.
                  This coffee is left for two years to mature these days.`,
  },
  {
    id: 3,
    name: 'Organic & Fairtrade Papua New Guinea',
    image: 'https://happytribeorganics.com/wp-content/uploads/2014/08/clipper_gound_brown.jpg',
    flavour: 'RICH & NUTTY',
    description: `Produced in the mountainous Eastern Highlands where the soil is rich and dark in colour with volcanic origins.
                  The coffee is produced by traditional methods, the trees have never seen chemical fertilizers or pesticides.
                  The coffee has a chocolate, nutty flavour with a slightly fruity finish.`,
  },
];

const addCoffee = (state, newCoffee) => {
  const { name, image, flavour, description } = newCoffee;
  const ids = state.map(coffee => coffee.id);
  const uniqueId = Math.max(...ids) + 1;
  const addedCoffee = {
    id: uniqueId,
    name,
    image,
    flavour,
    description,
  };
  const newState = [...state, addedCoffee];
  return newState;
};

const editCoffee = (state, editedCoffee) => {
  const newState = state.map((coffee) => {
    if (coffee.id === editedCoffee.id) {
      return {
        ...coffee,
        name: editedCoffee.name,
        image: editedCoffee.image,
        flavour: editedCoffee.flavour,
        description: editedCoffee.description,
      };
    }
    return coffee;
  });
  return newState;
};

const removeCoffee = (state, coffeeId) => {
  const newState = state.filter(coffee => coffee.id !== coffeeId);
  return newState;
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COFFEE : return addCoffee(state, action.payload);
    case REMOVE_COFFEE : return removeCoffee(state, action.payload);
    case EDIT_COFFEE : return editCoffee(state, action.payload);
    default: return state;
  }
};


export default coffeeReducer;
