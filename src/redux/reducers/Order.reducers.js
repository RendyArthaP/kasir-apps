import { ADD_ITEM } from '../actions/Order.AddItem.Actions';

const initialState = [
  {
    id: 0,
    namaBarang: "Kursi",
    jumlahBarang: 5,
    hargaBarang: 228000
  }
]

const handleItem = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      console.log(action)
      let lastID = state[state.length - 1].id;
      return [
        ...state,
        {
          id: lastID + 1,
          namaBarang: action.value.namaBarang,
          jumlahBarang: Number(action.value.jumlahBarang),
          hargaBarang: Number(action.value.hargaBarang)
        }
      ]
    default:
      return state;
  }
}

export default handleItem