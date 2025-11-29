# UIU Data Science Club Website

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository to your local machine:
   git clone <repository-url>
   cd <project-directory>

2. Install dependencies:
   npm install
   
   or if you're using yarn:
   yarn install

## Running Locally

1. Start the development server:
   npm run dev
   
   or with yarn:
   yarn dev

2. Open your browser and navigate to:
   http://localhost:3000

   The application will automatically reload when you make changes to the code.

## Building for Production

1. Build the project:
   npm run build
   
   or with yarn:
   yarn build

2. Start the production server:
   npm start
   
   or with yarn:
   yarn start

## Project Structure

- /app - Next.js application pages and layout
- /components - React components used throughout the application
- /public - Static assets (images, logos, etc.)
- /app/globals.css - Global styles and design tokens

## Available Routes

- / - Homepage
- /team - Team members page
- /partners - Partners and collaborations page
- /questions-bank - Questions bank page
- /track-application - Track application page

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modern UI with Tailwind CSS
- Next.js App Router for efficient routing
- Interactive components with hover effects

## Troubleshooting

If you encounter any issues:
1. Clear the node_modules folder and reinstall: rm -rf node_modules && npm install
2. Clear the Next.js cache: rm -rf .next
3. Make sure you're using a compatible Node.js version (v18+)

## Support

For more information about Next.js, visit: https://nextjs.org/docs
