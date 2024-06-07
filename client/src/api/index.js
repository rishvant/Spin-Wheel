import { PRIZES } from '../constants/constant'

function callApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * PRIZES.length)
      resolve(randomNumber)
    }, 3000)
  })
}

export async function delayedApiCall() {
  try {
    const result = await callApi()
    return result
  } catch (error) {
    throw error
  }
}
