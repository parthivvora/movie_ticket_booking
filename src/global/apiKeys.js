const BASE_URI = "http://localhost:7000/";

const apiKeys = {
  register: `${BASE_URI}api/register`,
  login: `${BASE_URI}api/login`,

  // Contact
  addContactUs: `${BASE_URI}api/add-contact-information`,

  // Subscribe
  addSubscribe: `${BASE_URI}api/add-subscribe`,

  // Blogs
  getAllBlogs: `${BASE_URI}api/get-blog-user`,
};

export { BASE_URI, apiKeys };
