export const searchByID = (array, id) => {
    return array.find(item => item.id === id) || null;
};
