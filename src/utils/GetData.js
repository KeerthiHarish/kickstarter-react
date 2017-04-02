const baseUrl = 'http://starlord.hackerearth.com/kickstarter'
export const GetData = () => {
  return fetch(baseUrl).then(res =>  res.json())
}
