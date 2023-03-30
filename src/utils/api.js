import axios from "axios";
import { SERVER_ADDRESS } from './constants'

export const verifyCaptcha = async (token) => {
  try {
    const resp = await axios.post(`${SERVER_ADDRESS}/api/verify-recaptcha`, { recaptchaToken: token })
    return resp.data
  } catch (e) {
    return { success: false, message: e.response?.data?.message || 'An error occurred while verifying captcha' }
  }
}

export const postForm = async (data) => {
  try {
    const resp = await axios.post(`${SERVER_ADDRESS}/api/form`, data)
    return resp.data
  } catch (e) {
    return { success: false, message: e.response?.data?.message || 'An error occurred while posting form' }
  }
}
