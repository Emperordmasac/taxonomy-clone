# Pavilion

An open source application built using the new router, server components and everything new in Next.js 13 (a clone of shadcn-ui Taxonomy Project)

> **Warning**
> This app is a work in progress. 
> See the roadmap below.


## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups.
- Data fetching, Caching and Mutation.
- Loading UI,
- Server and Client Components.
- API Routes and Middlewares.
- Authentication using **NextAuth.js**.
- ORM using **Prisma**.
- UI Components built using **Radix UI**.
- Documentation and blog using **MDX** and **Contentlayer**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**.
- Validations using **Zod**.
- Written in **TypeScript**.


## Roadmap

> **Warning**
> This app is a work in progress

- [x] ~Add MDX support for basic pages.~
- [ ] Responsive styles.
- [ ] Subscriptions using Stripe.
- [ ] Add Media Library.
- [ ] Add Pages.
- [ ] Build the front-end for blogs.
- [ ] Add support for custom domains for blogs.
- [ ] Build marketing pages (use a headless CMS?)
- [ ] Add OG image for blog using @vercel/og.
- [ ] Dark mode.

## Known Issues

A list of things not working right now:
1. ~GitHub authentication (use email)~

2. ~[Prisma: Error: ENOENT: no such file or directory, open '/var/task/.next/server/chunks/schema.prisma'](https://github.com/prisma/prisma/issues/16117)~
3. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~


## Running Locally

1. Install dependencies using Yarn:

```sh
yarn
```

2. Copy `.env.example` to `.env.local` and update the variables.

3. Start the development server:

```sh
yarn dev
```

## License

Licensed under the [MIT license](https://github.com/reflexjs/reflex/blob/master/LICENSE).