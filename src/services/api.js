import { getUserProgress } from "./github"

async function fetchUser() {
  let resp
  try {
    resp = await fetch("/user", {
      credentials: "include",
    })
  } catch (error) {
    console.error(`[API_ERROR] Failed to fetch user`, error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  let data
  try {
    data = await resp.json()
  } catch (error) {
    console.error(`[API_ERROR] Invalid response format`, error)
    return null
  }

  return data.result
}

async function getUser() {
  let progress
  const user = await fetchUser()

  if (!user) return null

  try {
    progress = await getUserProgress(user.GithubUser)
  } catch (error) {
    console.error(`[API_ERROR] Failed to get user progress`, error)
  }

  return mapUser(user, progress)
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

function mapUser(userData, progressData) {
  const userName = userData.Name ? userData.Name : userData.GithubUser

  const { merged = 0, opened = 0 } = progressData || {}
  const achievements = {
    opened: opened >= 2,
    merged: merged >= 1,
  }
  const hasCompleted = achievements.opened && achievements.merged

  const user = {
    name: userName,
    login: userData.GithubUser,
    email: userData.Email,
    hacktober: {
      progress: {
        opened,
        merged,
        achievements,
        hasCompleted,
      },
      shirtsize: userData.shirtsize,
      sendAddress: {
        state: userData.State,
        city: userData.City,
        address: userData.Address,
        postalcode: userData.PostalCode,
      },
    },
  }

  return user
}

export { getUser, updateUser }
