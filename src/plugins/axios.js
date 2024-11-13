import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmRmM2U2YTY0YmU2ZThmM2I5OWFmZDM0MzkyYWU5YiIsIm5iZiI6MTczMTUxNDUwMy4xMzUxNTkzLCJzdWIiOiI2NzM0YjY2YzNlODJiYTc5ZmNjZjJmYmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NsKvwwtzfBrYjROwC0a6MZqh6xWXu9N6ZhLbL9iISG4`,
  },
});

export default api;