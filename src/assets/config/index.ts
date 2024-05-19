function generateId(id = 0) {
  return () => `666-${id++}`;
}
const newId = generateId();

export {
  newId
}