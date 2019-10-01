import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { getUserProgress } from "../services/github"

const UserProgressWrapper = styled.div`
  color: #cfd3d4;
  line-height: 1.75rem;
  text-align: left;

  strong {
    font-weight: 700;
  }

  i {
    font-family: Hack, monospace;
    display: block;
    margin-top: 1rem;
  }
`

function UserProgress({ user }) {
  const userName = user.Name ? user.Name.split(" ")[0] : user.GithubUser

  return (
    <UserProgressWrapper>
      Olá <strong>{userName}</strong>!<br />
      Você está participando da <strong>Hacktoberfest</strong> na Globo.com. Em
      breve estaremos disponibilizando informações sobre o seu progresso.
      Enquanto isso...
      <i>Let's hack_</i>
    </UserProgressWrapper>
  )
}

UserProgress.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserProgress
