export const generateId = () => (Math.floor(Math.random() * 100) + 1);

export default {
  books: [
    {
      id: generateId(),
      title: 'Foundation',
      category: 'Sci-Fi',
    },
    {
      id: generateId(),
      title: 'Learn React',
      category: 'Learning',
    },
    {
      id: generateId(),
      title: '1984',
      category: 'Action',
    },
  ],
};
