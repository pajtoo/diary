// httpClient.js

const BASE_URL = 'http://diary-backend:8080'; // Nastav svou základní URL

/**
 * Funkce pro GET požadavek.
 * @param {string} endpoint - Cíl požadavku (např. "/data").
 * @returns {Promise<any>} - Data z odpovědi.
 */
export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Funkce pro POST požadavek.
 * @param {string} endpoint - Cíl požadavku (např. "/data").
 * @param {object} body - Tělo požadavku.
 * @returns {Promise<any>} - Data z odpovědi.
 */
export const postRequest = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`POST ${endpoint} failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Funkce pro PUT požadavek.
 * @param {string} endpoint - Cíl požadavku (např. "/data").
 * @param {object} body - Tělo požadavku.
 * @returns {Promise<any>} - Data z odpovědi.
 */
export const putRequest = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`PUT ${endpoint} failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Funkce pro DELETE požadavek.
 * @param {string} endpoint - Cíl požadavku (např. "/data").
 * @returns {Promise<any>} - Data z odpovědi.
 */
export const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`DELETE ${endpoint} failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
