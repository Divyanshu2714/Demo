# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

### Admission enquiry emails

Admission form submissions are sent through [Resend](https://resend.com) to
`mishradivyanshu0005@gmail.com`. Create a Resend API key, then set it in the
server environment before starting the app. In PowerShell:

```powershell
$env:RESEND_API_KEY = "re_your_api_key"
npm run dev
```

The default sender is Resend's test address, which can only deliver to an
address verified in your Resend account. For production, verify a domain with
Resend and set `RESEND_FROM_EMAIL` to an address on that domain, for example:

```powershell
$env:RESEND_FROM_EMAIL = "ABC School Admissions <admissions@your-verified-domain>"
```

Keep the API key private and configure it as a server-side environment variable
in your deployment platform. Do not use a `VITE_` prefix.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
