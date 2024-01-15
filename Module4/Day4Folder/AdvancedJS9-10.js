//Advanced JS question 9

// const randomDelay = new Promise((resolve, reject) => {
//     let randomTime = parseInt(Math.random()*20000)
//     setTimeout(() => {
//         if (randomTime % 2){
//             resolve(`Promise resolved after ${randomTime}ms`)
//         } else {
//             reject(`Promise rejected after ${randomTime}ms`)
//         }
//     }, randomTime)
// })

// randomDelay.then((message) => 
// console.log(`There appears to have been a delay. \n${message}`))
// .catch((message) => 
// console.log(`There appears to have been a delay. \n${message}`))

//Advanced JS question 10

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

import fetch from 'node-fetch'
globalThis.fetch = fetch

async function fetchURLData(url) {
    try {
      const response = await fetch(url);
  
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
  
  (async () => {
    try {
      const data = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
    try {
        const invalidData = await fetchURLData('https://jsonplaceholder.typicode.com/invalid');
        console.log('Invalid URL:', invalidData);
      } catch (error) {
        console.error('Invalid URL Error:', error.message);
      }
  })();

  async function fetchMultipleURLsData(urls) {
    try {
      const fetchPromises = urls.map(url => fetchURLData(url));
      const responseData = await Promise.all(fetchPromises);
      return responseData;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
  
  // Example usage:
  const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
  
  (async () => {
    try {
      const responseDataArray = await fetchMultipleURLsData(urlsToFetch);
      console.log('Multiple URLs Data:');
      responseDataArray.forEach((data, index) => {
        console.log(`URL ${index + 1}:`, data);
      });
    } catch (error) {
      console.error('Multiple URLs Error:', error.message);
    }
  })();