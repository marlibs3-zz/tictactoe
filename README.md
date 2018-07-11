TODO:

- Why is this.state.player === '' && this.props.winner === null necessary in order not to be able to do further clicks once a winner has been set?
- Implement undo function (MVP: undo last action, no redo; Extension: undo up to all actions, redo up to all actions, allow a playthrough when the game has been won???)
- Allow "It's a tie!" message if by the 9th move there is no winner without overwriting a winner on the 9th move
- Testing with https://jestjs.io/
- To display the grid without double borders for the inside ones, use right border on every cell except first child
