/* This is the route file for the basic OpenAI chat API */

import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
  });

  const stream = result.toAIStream();

  return new StreamingTextResponse(stream);
}