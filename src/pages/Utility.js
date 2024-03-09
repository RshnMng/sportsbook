const util = {
  createRandomNumber: (lessThanVar) => {
    let randomNum = Math.floor(Math.random() * lessThanVar);
    return randomNum;
  },
  saveToLocalStorage: (name, data) => {
    let inputJSON = JSON.stringify(data);
    localStorage.setItem(name, inputJSON);
  },
  getLocalStorage: (name) => {
    let outputJSON = localStorage.getItem(name);
    let data = JSON.parse(outputJSON);
    return data;
  },
};

export { util };
