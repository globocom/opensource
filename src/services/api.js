async function getUser() {
  // let resp
  // try {
  //   resp = await fetch("/user", {
  //     credentials: "include",
  //   })
  // } catch (error) {
  //   console.error(`[API_ERROR] Failed to fetch user`, error)
  //   return null
  // }

  // if (resp.status !== 200) {
  //   return null
  // }

  // let user
  // try {
  //   const data = await resp.json()
  //   user = data.result
  // } catch (error) {
  //   console.error(`[API_ERROR] Invalid response format`, error)
  //   return null
  // }

  return null
}

async function updateUser(user) {
  let resp

  try {
    resp = await fetch("/subscribe", {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
    })
  } catch (error) {
    console.error("[OPENSOURCE] Fail to post", error)
  }

  if (resp.status !== 201) {
    return null
  }

  const data = await resp.json()
  return data.result
}

export { getUser, updateUser }
