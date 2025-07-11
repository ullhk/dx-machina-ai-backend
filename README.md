# Dx Machina AI Backend (Vercel)

This is the backend for Dx Machina. It provides two endpoints:
- `/api/followup`: For general follow-up reasoning
- `/api/breakdown`: For breaking down clinical questions

## Environment Variables

Add your OpenAI key in Vercel:
```
OPENAI_API_KEY=your_openai_key_here
```

## How to Deploy

1. Push this repo to GitHub
2. Import it into Vercel
3. Set `OPENAI_API_KEY` in Vercel settings
4. Done 🎉
