import {
  authSlice,
  chekingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  initialState,
  demoUser,
  authenticatedState,
} from "../../fixtures/authFixtures";

describe("pruebas en el auth slice", () => {
  test('regresar el estado inicial y llamarse "auth"', () => {
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe("auth");
  });
  test("debe realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });
  test("prueba de logout sin argumentos", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("prueba de logout y mensaje de error", () => {
    const errorMessage = "Credenciales incorrectas";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });
  test("cambiar estado a 'checking'", () => {
    const state = authSlice.reducer(authenticatedState, chekingCredentials());
    expect(state.status).toEqual("checking");
  });
});
