const getPeliculas = async () => {
  const tokens = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2E3NjI2MmM4YmI0ZDU3MmJiNzVmZmZhYzBlNThiZSIsInN1YiI6IjYxZjAxNTZlZTQ4ODYwMDA0MjkzMTE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LkB__cJ6ykkfBwovGjKaZQbOtY5mm6T7KKUOgWzvlwA";
  const url = "https://api.themoviedb.org/4/discover/movie?language=es";
  try {
      const resp = await fetch(url, {
      headers: {
          Authorization: "Bearer " + tokens,
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await resp.json();
      return data;
  } catch (error) {
      console.log(error);
  }
};

export default getPeliculas;