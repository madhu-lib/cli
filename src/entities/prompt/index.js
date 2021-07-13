import { buildMakePrompt } from './prompt';
import { inquirerPromptImpl } from './inquirerPrompt';

// Build Generic Inquirer Prompt Object.
export const makePrompt = buildMakePrompt({ prompt: inquirerPromptImpl() });
export default makePrompt;