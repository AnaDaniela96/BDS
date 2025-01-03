async function fetchData() {
    const response = await fetch('movies.json');
    if (!response.ok) {
      throw new Error('Error al cargar los datos');
    }
    return response.json();
  }
  
  async function getItems() {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  