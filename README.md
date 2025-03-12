![Ether Guild](public/image/ether-guild-heading.png)

Next.js app for [etherguild.xyz](https://etherguild.xyz). Hidden protoype section: [demo](https://etherguild.xyz/demo)

Also see
[etherguild-contracts](https://github.com/its-everdred/etherguild-protocol) and
[etherguild-agent](https://github.com/its-everdred/etherguild-agent).

## Development

Running the app locally requires [bun](https://bun.sh/docs/installation) and [docker](https://www.docker.com/get-started/).

### Initial set up:

```bash
# Install dependencies
bun install

# Setup environment
cp .env.example .env.development

# Start Postgres
docker compose up -d

# Setup database
bun prisma migrate dev
bun prisma generate

# Generate example quests
bun prisma db seed
```

### Run the App:

```
bun install
bun run build
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Join us!

Ether Guild is a Wyoming Non-Profit Corporation applying for 501(c)(3) status. We are a group of hyper-focused ETH supporters, working to elevate ETH, the money, in service of Ethereum, the computer.

Volunteers interested in executing this mission can reach out at [info@etherguild.xyz](mailto:info@etherguild.xyz).

Donors interested in funding this mission can reach out at [donate@etherguild.xyz](mailto:donate@etherguild.xyz).
