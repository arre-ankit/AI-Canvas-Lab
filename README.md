
# AI Canvas Lab
A infinite canvas for creating AI workflows and experimenting with different LLM,Image Generation,Audio Generation models
 
Contributions welcome!✨

## 👀 What is this?

## Key Features
- Infinite Canvas for creating AI workflows
- Experiment with different LLM, Image Generation, Audio Generation models
- Drag and drop nodes to create workflows
- Connect nodes to create a workflow
- Execute workflows and see the results


## How do I use this?

Just go to [ai-canvas-lab](https://ai-canvas-lab.pages.dev/)

Click on `Get Started` to reach the main page.



## What's under the hood?
#### `src/apps`: The main web UI.

Built with:

- Nextjs 14
- [TailwindCSS](https://tailwindcss.com)
- [shadcn-ui](https://ui.shadcn.com)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

#### `apps/cf-ai-backend`: This module handles AI response generation

This is where the magic happens!💫

Built with:

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare AI](https://ai.cloudflare.com)


## How can I contribute?

1. Fork this repo
2. Clone your forked repo
3. Create a new branch
4. Make your changes
5. Push your changes to your branch
6. Create a pull request

## Setup Instructions

1. Clone the repo

```bash
git clone git@github.com:arre-ankit/speechsync-ai.git
```

2. Set up the Next.js app

```
npm install @cloudflare/next-on-pages
npm run dev
```

3. Set up the Cloudflare Worker Backend

```
cd cf-backend-worker
npm run dev
```

4. Create `.env` file in the root of the project and add the following:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```


