import { mockPosts } from "../data/mock/posts";
import { mockProducts } from "../data/mock/products";
import { mockUsers } from "../data/mock/users";

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function simulateRequest(data, options = {}) {
  const {
    delay = 800,
    shouldFail = false,
    failRate = 0,
    errorMessage = "Something went wrong.",
  } = options;

  await wait(delay);

  const randomFailure = failRate > 0 && Math.random() < failRate;

  if (shouldFail || randomFailure) {
    throw new Error(errorMessage);
  }

  return clone(data);
}

export function fetchUsers(options = {}) {
  return simulateRequest(mockUsers, options);
}

export function fetchProducts(options = {}) {
  return simulateRequest(mockProducts, options);
}

export function fetchPosts(options = {}) {
  return simulateRequest(mockPosts, options);
}

export async function searchProducts(searchTerm = "", options = {}) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = mockProducts.filter((product) => {
    return product.name.toLowerCase().includes(normalizedSearch);
  });

  return simulateRequest(filteredProducts, options);
}

export async function filterProductsByCategory(category = "All", options = {}) {
  const filteredProducts =
    category === "All"
      ? mockProducts
      : mockProducts.filter((product) => product.category === category);

  return simulateRequest(filteredProducts, options);
}

export async function fetchUserById(userId, options = {}) {
  const user = mockUsers.find((item) => item.id === userId);

  if (!user) {
    return simulateRequest(null, {
      ...options,
      shouldFail: true,
      errorMessage: "User not found.",
    });
  }

  return simulateRequest(user, options);
}
