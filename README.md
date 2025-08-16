# Vite Issue

Regarding an edge case in `resolve.alias`.

## Reproducing the problem

Seeing the issue in dev;

1. Open up a terminal
2. `vite dev`
3. Open the page, open the console
4. Observe that the second import fails

Seeing that the issue is not present in prod;

1. Open up a terminal
2. `vite build`, then `vite preview`
3. Open the page, open the console
4. Observe that both imports succeed
