class DataService {
  static getData() {
    console.log('get data call');
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .catch(error => window.console.log('Error:', error));
  }
}

export default DataService;
