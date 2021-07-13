// Generic prompt object.
export const buildMakePrompt = ({ prompt }) => {
    // If prompt not provided throw error.
    if(!prompt) throw new Error("Prompt must not be empty");

    // Build generic return object for prompt.
    return Object.freeze({
        promptQuestions
    })
    
    // PromptQuestions: Which displays questions in command prompt and 
    // Returns the answers for the same.
    async function promptQuestions({ questions = [] }) {
        // If questions are empty or not an array throw error.
        if(!(questions instanceof Array) || questions.length == 0) return;

        // Check whether implemention is having method to promptQuestions.
        if(!prompt.promptQuestions) {
            throw new Error("Prompt Questions method not implemented in the prompt implementation");
        }

        // Return the answers
        return await prompt.promptQuestions({questions});
    }
}

export default buildMakePrompt;
