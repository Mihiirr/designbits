# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a
deployment target, you only need to
[import your Git repository](https://vercel.com/new) into Vercel, and it will be
deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory
by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will
then automatically be deployed by Vercel, through its
[Git Integration](https://vercel.com/docs/concepts/git).

# Install PlanetScale CLI - Windows

`Step:3`

```sh
https://docs.planetscale.com/concepts/planetscale-environment-setup
```

# Connect database

`Step:4` Generate prisma client:

```sh
yarn prisma:generate
```

If this throws error run:

```sh
npx prisma generate
```

`Step:5` Connect database using:

```sh
yarn connect:database:develop
```

# Run locally

```sh
yarn dev
```
