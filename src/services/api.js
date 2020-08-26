const apiUrl = process.env.GATSBY_API_URL

async function getUser() {
  let resp
  try {
    resp = await fetch(`${apiUrl}/user`, {
      credentials: "include",
    })
  } catch (error) {
    console.error(`[API_ERROR] Fail to fetch user`, error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  let user
  try {
    const data = await resp.json()
    user = data.result
  } catch (error) {
    console.error(`[API_ERROR] Invalid response format`, error)
    return null
  }

  return user
}

async function updateUser(user) {
  let resp

  try {
    resp = await fetch(`${apiUrl}/subscribe`, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
    })
  } catch (error) {
    console.error("[OPENSOURCE] Fail to save user data", error)
    return null
  }

  if (resp.status !== 201) {
    return null
  }

  const data = await resp.json()
  return data.result
}

async function getEdition() {
  let resp

  try {
    resp = await fetch(`${apiUrl}/edition`)
  } catch (error) {
    console.error("[OPENSOURCE] Fail to fetch edition", error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

async function getCoders() {
  let resp

  try {
    resp = await fetch(`${apiUrl}/status`)
  } catch (error) {
    console.error("[OPENSOURCE] Fail to fetch coders", error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

export { getUser, updateUser, getCoders, getEdition }
