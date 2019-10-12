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

  const user = {
    id: "f2e49b66-f584-4189-ad66-f2f73989a707",
    name: "Artur Felipe Sousa",
    email: "arturfelipe.sousa@gmail.com",
    avatarURL: "https://avatars0.githubusercontent.com/u/1333599?v=4",
    githubUser: "arturfsousa",
    githubID: "1333599",
    // edition: 2019,
    // totalMergeRequests: 1,
    // totalMergeRequestsMerged: 1,
    hacktoberfest: {
      edition: 2019,
      progress: {
        opened: 1,
        merged: 1,
        achievements: {
          opened: true,
          merged: true,
          firsts: false,
          completed: false,
        },
      },
    },
  }

  return user
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
