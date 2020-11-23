import env from "../env";
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
const formatQueryUrl = (url, query)=>{
  let arr=[];
  for (const key in query) {
      const element = query[key];
      arr.push(`${key}=${encodeURIComponent(element)}`)
  }
  if (url.indexOf("?") === -1) {
    return url+"?"+arr.join("&")
  }else{
    return url+"&"+arr.join("&")
  }
}

const login = async (username, password) => {
  const headers = new Headers();
  headers.append("Authorization", `Basic ${env.BasicCode}`)
  var url = formatQueryUrl(env.AuthUrl,{username,password,scope:"server",grant_type:"password"})
  const option = {
    headers,
    method:"POST"
  }
  var res = await fetch(url,option)
  var content = res.json()
  return content;
}
export { http,login };
