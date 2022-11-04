import { LoginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/provider";
import { chekingCredentials, login, logout, startGoogleSignIn } from "../../../src/store/auth";
import { checkingAuthentication, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";
jest.mock("../../../src/firebase/provider");

describe("pruebas con los thunks auth", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("debe llamar el CheckingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
  });

  test("login con google", async() =>{
    const loginDate = {ok:true,...demoUser}
    await singInWithGoogle.mockResolvedValue(loginDate)
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginDate))

  })

  test("login con google + logout con mensaje de error", async() =>{
    const loginDate = {ok:false ,errorMessage: 'error en Google'}
    await singInWithGoogle.mockResolvedValue(loginDate)
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginDate.errorMessage))

  })

  test("login con email y password + checkingCredentiasl y login exitoso", async() =>{
    const loginData = {ok:true,...demoUser}
    const formData = {email: demoUser.email, password:"123456"}
    await LoginWithEmailPassword.mockResolvedValue(loginData)
    await startLoginWithEmailPassword(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(chekingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))

  })

  test("logout debe llamar logoutFireBase, crelarNotes y logout",async()=>{
    await startLogout()(dispatch)
    expect(logoutFirebase).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())

  })
});
