import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("scores")) || [];

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addPlayer(state, action) {
      const { name } = action.payload;
      const id = nanoid();
      const newState = [...state, { id, name, score: 0 }];
      localStorage.setItem("scores", JSON.stringify(newState));
      return newState;
    },
    removePlayer(state, action) {
      const newState = state.filter(player => player.id !== action.payload);
      localStorage.setItem("scores", JSON.stringify(newState));
      return newState;
    },
    incrementScore(state, action) {
      const playerId = action.payload;
      const newState = state.map(player =>
        player.id === playerId ? { ...player, score: player.score + 1 } : player
      );
      localStorage.setItem("scores", JSON.stringify(newState));
      return newState;
    },
    decrementScore(state, action) {
      const playerId = action.payload;
      const newState = state.map(player =>
        player.id === playerId ? { ...player, score: Math.max(player.score - 1, 0) } : player
      );
      localStorage.setItem("scores", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { 
  addPlayer, removePlayer, incrementScore, decrementScore 
} = scoresSlice.actions;

export default scoresSlice.reducer;