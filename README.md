# ShoppingCart Gate 6 Pilot

This repository is the controlled external-repository pilot for the coding-agent workflow. It is a deterministic React and TypeScript application with no runtime dependency on Firebase or other external services.

## Commands

```bash
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
npm run test:migrations
npm run check:licenses
```

All verification commands run without network access after the lockfile-pinned dependency cache has been built. The Gate 6 worker invokes these commands through a server-owned quality profile; an agent cannot replace them.

The first coding-agent task will add a tested, accessible empty-cart state. That behavior is intentionally absent from this baseline.
