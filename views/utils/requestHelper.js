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

export function apiRequestGet(url, access_token = "") {
  const headers = new Headers();
  const method = "GET"
  headers.append("Accept", "application/json");
  if (access_token !== "") {
    headers.append("access_token", access_token)
  }
  const options = {
    method,
    headers
  };
  return returnResult(url, options)
}

export function apiRequestPost(url, body, access_token = "", method = "POST") {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("access_token", access_token)
  //headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));

  const options = {
    method,
    headers,
    body
  };

  return returnResult(url, options)
}

export function apiRequestFilePost(url, file, body, method = "POST") {
  const formData = new FormData();
  const headers = new Headers();
  formData.append('img', file, file.name);
  for (let key in body) {
    formData.append(key, body[key])
  }

  const options = {
    method,
    headers,
    body: formData
  };
  return returnResult(url, options)
}

export function apiRequestDelete(url, body, method = "DELETE") {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));

  const options = {
    method,
    headers,
    body
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}

export function apiRequestPut(url, body, method = "PUT") {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  // headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));
  const options = {
    method,
    headers,
    body,
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}