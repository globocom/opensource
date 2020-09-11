import React from "react"
import * as Gatsby from "gatsby"
import { render } from "@testing-library/react"
import * as github from "../services/github"
import IndexPage from "./index"

jest.mock("../services/github")

describe("IndexPage", () => {
  it("renders correctly", () => {
    github.getRepoStats.mockResolvedValue = {
      repository: {
        object: { history: { totalCount: 10 } },
        issues: { totalCount: 2 },
        pullRequests: { totalCount: 1 },
        stargazers: { totalCount: 32 },
      },
    }

    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    useStaticQuery
      .mockImplementationOnce(() => ({
        allFeaturedProjectsJson: {
          edges: [
            {
              node: {
                id: "2aab3fe4-1e52-5156-8e41-fe236f1dc8c2",
                name: "Project",
                slug: "project",
                owner: "globocom",
                repoURL: "https://github.com/globocom/project",
                siteURL: "http://project.io",
                docsURL: "http://project.io/docs",
                description: "This is a nice a really nice project.",
                shortDescription: "This is a nice project.",
                image: {
                  publicURL: "/static/project.svg",
                },
              },
            },
          ],
        },
      }))
      .mockImplementationOnce(() => ({
        site: {
          siteMetadata: {
            title: "Globo - Open Source",
            description: "Globo - Por que ❤️ Open Source?",
            author: "Globo",
            url: "https://opensource.globo.com",
            images: {
              opengraph: {
                type: "image/png",
                url: "images/opengraph.png",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      }))

    const { getByTestId } = render(<IndexPage />)

    expect(useStaticQuery).toHaveBeenCalledTimes(2)
    expect(github.getRepoStats).toHaveBeenCalledTimes(1)

    // Header is in dark mode
    expect(getByTestId("header")).toHaveStyle("background-color: #000")

    expect(getByTestId("hero-text")).toHaveTextContent(
      "Addicted Developersunidos pelo código_"
    )
  })
})
