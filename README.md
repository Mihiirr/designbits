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

# Install yarn

`Step:1` We are using yarn package manager so install yarn using. if you're
using it already then skip this step:

```sh
npm install -g yarn
```

`Step:2` Install all dependencies:

```sh
yarn install
```

# Install PlanetScale CLI - Windows

`Step:3` Make sure PowerShell 5 (or later, include PowerShell Core) and .NET
Framework 4.5 (or later) are installed. Then run:

```sh
Invoke-Expression (New-ObjectSystem.Net.WebClient).DownloadString('https://get.scoop.sh')
```

Note: if you get an error you might need to change the execution policy (i.e.
enable Powershell) with below code and run again step:1

```sh
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

`Step:4` Scoop installs the tools you know and love:

```sh
scoop install curl
```

`Step:5`

```sh
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
```

`Step:6` Install pscale:

```sh
scoop install pscale
```

To upgrade to the latest version:

```sh
scoop update pscale
```

`Step:7` Verify that you're using the latest version:

```sh
pscale version
```

# Connect database

`Step:8` Generate prisma client:

```sh
yarn prisma:generate
```

If this throws error run:

```sh
npx prisma generate
```

`Step:9` Connect database using:

```sh
yarn connect:database:develop
```

# Run locally

```sh
yarn dev
```
