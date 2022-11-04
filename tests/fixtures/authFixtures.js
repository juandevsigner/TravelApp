export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "12345asd",
  email: "corre@corre.com",
  displayName: "Demo Name",
  photoURL: "https://imageurl.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "a1654s",
  email: "demo@demo.com",
  displayName: "demoUser",
  photoURL: "demo.jpg",
};
