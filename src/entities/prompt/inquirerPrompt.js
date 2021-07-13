import { prompt } from 'inquirer';

// Transforming inquirer to generic prompt object format.
export const inquirerPromptImpl = () => {
    
    const promptQuestions = async ({ questions = [] }) => await prompt(questions)

    return Object.freeze({
        promptQuestions
    })
}

export default inquirerPromptImpl;