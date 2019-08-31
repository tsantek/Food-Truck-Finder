import { futimes } from "fs";

export function checkUserInfo(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export function userRegister(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export function getAllFoodTrucks(url = "") {
  return fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
}

export function setLocation(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export function getAllLocations(url = "") {
  return fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
}

export function deleteLocation(url = "") {
  return fetch(url, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response);
}
