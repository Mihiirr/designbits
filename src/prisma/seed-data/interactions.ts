import { UserRole } from "@prisma/client"

const usersData = {
  Tirth: {
    connectOrCreate: {
      create: {
        email: "tirth@designbits.io",
        name: "Tirth Gajjar",
        profilePicture: "tirth.jpeg",
        profileSlug: "tirth-gajjar",
        role: UserRole.ADMIN,
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
        profilePicture: "Shreyas.jpeg",
        profileSlug: "shreyas-chaudhary",
        role: UserRole.ADMIN,
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
            imageSrc:
              "https://github.githubassets.com/favicons/favicon-dark.svg",
            name: "Github",
            url: "https://github.com/",
          },
          where: {
            name: "Github",
          },
        },
      },
      media: {
        videoMp4: "github-watch-dropdown.mp4",
        videoWebM: "github-watch-dropdown.webm",
        preview: "github-watch-dropdown.webm",
      },
      description:
        "Platformas like Github that handles complex and large amount of data often need to keep that interface compact with more nested approach. Eg., Photoshop, After effects, editors, etc. In such scarios, github's nested dropdown aviation is quite smooth and clean. Cognitively easy. Is this pattern actually good? Or such complexity can be avoided/handled in a better way.",
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
        videoMp4: "codepen-pane-expand-collapse.mp4",
        videoWebM: "codepen-pane-expand-collapse.webm",
        preview: "codepen-pane-expand-collapse.webm",
      },
      description:
        "Most unique way of expanding and collapsing panes. That transition of title is really brave. Love when tools still try to break the ideal design.",
    },
    {
      title: "Reminders - more options within a dropdown menu",
      slug: "reminders-more-options-within-a-dropdown-menu",
      CreatedBy: usersData.Shreyas,
      Source: {
        connectOrCreate: {
          create: {
            imageSrc:
              "https://cdn.jim-nielsen.com/macos/1024/reminders-2021-05-28.png",
            name: "Reminders",
            url: "https://apps.apple.com/us/app/reminders/id1108187841",
          },
          where: {
            name: "Reminders",
          },
        },
      },
      media: {
        videoMp4: "codepen-pane-expand-collapse.mp4",
        videoWebM: "codepen-pane-expand-collapse.webm",
        preview: "codepen-pane-expand-collapse.webm",
      },
      description: "To be added",
    },
    {
      title: "Spotify - Profile filter",
      slug: "spotify-profile-filter",
      CreatedBy: usersData.Shreyas,
      Source: {
        connectOrCreate: {
          create: {
            imageSrc: "https://www.scdn.co/i/_global/touch-icon-144.png",
            name: "spotify",
            url: "https://apps.apple.com/us/app/reminders/id1108187841",
          },
          where: {
            name: "Spotify",
          },
        },
      },
      media: {
        videoMp4: "codepen-pane-expand-collapse.mp4",
        videoWebM: "codepen-pane-expand-collapse.webm",
        preview: "codepen-pane-expand-collapse.webm",
      },
      description: "To be added",
    },
    {
      title: "Instagram - Search and suggestions",
      slug: "instagram-search-and-suggestions",
      CreatedBy: usersData.Shreyas,
      Source: {
        connectOrCreate: {
          create: {
            imageSrc: "https://www.scdn.co/i/_global/touch-icon-144.png",
            name: "spotify",
            url: "https://apps.apple.com/us/app/reminders/id1108187841",
          },
          where: {
            name: "instagram",
          },
        },
      },
      media: {
        videoMp4: "codepen-pane-expand-collapse.mp4",
        videoWebM: "codepen-pane-expand-collapse.webm",
        preview: "codepen-pane-expand-collapse.webm",
      },
      description: "To be added",
    },
  ]
}
