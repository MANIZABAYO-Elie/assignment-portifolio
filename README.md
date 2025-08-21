# Manizabayo Elie — Portfolio

This is a scaffold for a portfolio using React + TypeScript + Tailwind CSS and Vite. It includes a floating chatbot with a local FAQ backend and a simple `chatService` abstraction that can be switched to an external LLM by adding an API key to `.env`.

## Run locally

1. `npm install`
2. `npm run dev`

## Notes
- Replace placeholder repo/demo links in `src/data/projects.ts`.
- Add your profile photo and social links in the components.
- To enable OpenAI: set `VITE_OPENAI_API_KEY` in `.env` and toggle the AI checkbox in the chat widget.