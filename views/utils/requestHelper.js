export function returnResult(url, options) {
  return fetch(url, options)
    .then(function handleErrors(res) {
      if (!res.ok) {
        return res.text().then(text => {
          return { error: JSON.stringify(text) }
        })
      }
      else {
        return res.json().then(json => {
          return json
        });
      }
    }).catch(error => {
      return { error: error }
    })
}

export function requestApi(url, method = "GET", body) {
  const headers = new Headers();
  if (method === "GET") {
    return returnResult(url, {
      method,
      headers,
    });
  }
  return returnResult(url, {
    method,
    headers,
    body
  });
}