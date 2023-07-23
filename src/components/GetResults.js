async function GetResults() {

  try{
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default GetResults;