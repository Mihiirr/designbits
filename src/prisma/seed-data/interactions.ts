const usersData = {
  Tirth: {
    connectOrCreate: {
      create: {
        email: "tirth@designbits.io",
        name: "Tirth Gajjar",
      },
      where: {
        email: "tirth@designbits.io",
      },
    },
  },
  Shreyas: {
    connectOrCreate: {
      create: {
        email: "shreyas@designbits.io",
        name: "Shreyas Chaudhary",
      },
      where: {
        email: "shreyas@designbits.io",
      },
    },
  },
}

export default function getPosts() {
  return [
    {
      title: "Github - Navigation within a dropdown",
      slug: "github-navigation-within-a-dropdown",
      CreatedBy: usersData.Tirth,
      Source: {
        connectOrCreate: {
          create: {
            imageSrc: "https://github.githubassets.com/favicons/favicon.svg",
            name: "Github",
            url: "https://github.com/",
          },
          where: {
            name: "Github",
          },
        },
      },
      media: {
        video: "github-watch-dropdown.mp4",
        preview: "github-watch-dropdown.gif",
      },
    },
    {
      title: "Codepen - expand/collapse panes (brave)",
      slug: "codepen-expand-collapse-panes",
      CreatedBy: usersData.Shreyas,
      Source: {
        connectOrCreate: {
          create: {
            imageSrc:
              "https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png",
            name: "Codepen",
            url: "https://codepen.io/",
          },
          where: {
            name: "Codepen",
          },
        },
      },
      media: {
        video: "codepen-pane-expand-collapse.mp4",
        preview: "codepen-pane-expand-collapse.gif",
      },
    },
  ]
}
