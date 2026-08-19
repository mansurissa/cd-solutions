# CD Solutions Landing Page (Next.js)

An editorial, responsive company site for CD Solutions covering construction, materials, equipment, and logistics services.

## Project Structure

- `src/app/` – Next.js app routes and global styles
- `src/components/` – reusable sections and layout pieces
- `src/data/` – content-driven arrays (services, projects, process, testimonials)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy with Dokploy and Docker

The production image uses Next.js standalone output and runs as a non-root user on port `3000`.

1. Create a Compose service in Dokploy and connect this repository.
2. Set `WEB_HOST` in the Dokploy environment settings to the domain serving the website, for example `www.cdsolutions.rw`.
3. Set `CONTACT_EMAIL`, `CONTACT_PHONE`, and `CONTACT_ADDRESS`. The email is displayed in the footer and used by the contact form's `mailto:` link.
4. Optionally set `VERSION` and `REVISION` to a release name and commit SHA.
5. Make sure the domain DNS record points to the Dokploy server, then deploy `docker-compose.yml`.

Dokploy's external `dokploy-network` and Traefik handle public routing and TLS. The application itself is only exposed internally on port `3000`.

To build and run the same production setup locally:

```bash
docker compose up --build
```
