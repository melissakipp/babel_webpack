/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 *
**/

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData
  }
  // Make a HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }
  // Make a HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      header: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  }
  // Make a HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      header: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource Deleted...';
    return resData
  }
}

export const http = new EasyHTTP();