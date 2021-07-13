import { makePrompt } from './prompt';
import { inquirerPromptImpl } from './inquirerPrompt';

// Build Generic Inquirer Prompt Object.
export const inquirerPrompt = makePrompt({ prompt: inquirerPromptImpl() });
export default inquirerPrompt;