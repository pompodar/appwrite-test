// src/auth.js
import { account, OAuthProvider } from '../appwrite'

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session("google", "http://localhost:3000/", "http://localhost:3000/failure")

    console.log("success");
    
  } catch (error) {
    console.error(error)
  }
}

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    return await account.get()
  } catch (error) {
    console.error(error)
  }
}

