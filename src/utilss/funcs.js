import { createSelector } from "@reduxjs/toolkit";

export const highScore = createSelector(
  state => state.scores,
  scores => Math.max(...scores.map(player => player.score), 0)
);