const selectLamps = (reduxState) => {
  return reduxState.lamps.lamps.map((lamp) => ({ ...lamp }));
};
export { selectLamps };
