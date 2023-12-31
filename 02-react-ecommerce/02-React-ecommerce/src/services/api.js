const BASE_URL = 'https://mushy-getup-ox.cyclic.app'

async function postData (endpoint, data) {
  console.log(data)
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

export { postData }
