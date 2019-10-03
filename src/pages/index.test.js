import React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import Index from "./index"

describe("IndexPage", () => {
  it("renders correctly", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    useStaticQuery
      .mockImplementationOnce(() => ({
        allFeaturedProjectsJson: {
          edges: [
            {
              node: {
                id: "2aab3fe4-1e52-5156-8e41-fe236f1dc8c2",
                name: "Megradraft",
                slug: "megadraft",
                owner: "globocom",
                repoURL: "https://github.com/globocom/megadraft",
                siteURL: "http://megadraft.io",
                docsURL: "http://megadraft.io/#/docs/overview",
                description: null,
                shortDescription:
                  "Megadraft is a Rich Text editor built on top of Facebook's Draft.JS featuring a nice default base of components and extensibility.",
                image: {
                  publicURL:
                    "/static/megadraft-248fcf33da48da3d147aeaf9ab385eaa.svg",
                },
              },
            },
          ],
        },
      }))
      .mockImplementationOnce(() => ({
        site: {
          siteMetadata: {
            title: "Globo.com - Open Source",
            description: "Globo.com - Por que ❤️ Open Source?",
            author: "Globo.com",
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

    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
