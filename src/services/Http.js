import { BaseCode } from "@/env.js";
const baseUrl = "/api/"
const delay = (seconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })
}
const abort = async (controller, seconds) => {
  await delay(seconds);
  controller.abort();
}
const baseHeaders = new Headers();
baseHeaders.append("Content-type", "application/json")

const http = async (apiPath, body) => {
  const url = `${baseUrl}${apiPath}`;
  const headers = new Headers();
  headers.append("Content-type", "application/json")
  const option = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  }
  const controller = new AbortController()
  option.signal = controller.signal
  const response = await Promise.race([fetch(url, option), abort(controller, 30)])
  if (response != null) {
    return response.json();
  }
  return null
}
const formatQueryUrl = (url, query){
  
  for (const key in query) {
    if (query.hasOwnProperty(key)) {
      const element = query[key];
      
    }
  }
  if (url.indexOf("?") > -1) {

  }
}

const login = async (username, password) => {
  const headers = new Headers();
  headers.append("Authorization", `Basic ${BaseCode}`)
}

export { http };
