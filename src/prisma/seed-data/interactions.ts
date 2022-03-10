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
        name: "Github",
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
        name: "Codepen",
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
        name: "Reminders",
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
        name: "Spotify",
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
        name: "Instagram",
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
