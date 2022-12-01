### Set Environment Variables

The repository has an `.env.example` file that shows the necessary variables for the tutorial. Create a new file in the project named `.env.local` and fill the values accordingly based on your business requirements. Here is an example configuration:

```
STRIPE_API_SECRET=sk_test_asdkjqwklejqwklejkasljdkljasdklj
NEXT_PUBLIC_STRIPE_API_PUBLIC=pk_test_asldksalaksdjjkasdhjaksdhjkhasd
NEXT_PUBLIC_APP_SCHEME=pandagums
NEXT_PUBLIC_HOST=http://localhost:3000
STRIPE_APP_FEE=1.23
```

The `NEXT_PUBLIC_APP_SCHEME` is used for deeplinks, the `NEXT_PUBLIC_HOST` is used within the React View pages for API calls (not for flutter, but for the Web Tutorial), and the `STRIPE_APP_FEE` is what is deducted as a fee for your brand on each transaction.

Once the configuration is done, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/\*](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.