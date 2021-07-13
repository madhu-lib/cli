export const buildMakeQuestion = ({ typeValidator, questionHasChoices }) => {
    return function makeQuestion({ name, message = '', description = '', choices, type, defaultValue  }){

        if(!name) throw new Error("Question must have name property");

        if(!type) throw new Error("Question must have type property");

        if(!typeValidator(type)) throw new Error("Not a valid question type");

        const isQuestionHasChoices = questionHasChoices(type);
        if(isQuestionHasChoices && !choices) throw new Error("Question type expects choices");
        if(isQuestionHasChoices && !(Array.isArray && choices.length)) throw new Error("Invalid choices or empty");

        if(!message) message = name;

        // Build object.
        let obj = {name, message, description, type, hasOptions: isQuestionHasChoices};
        // Insert if default value is there
        if(defaultValue) obj.defaultValue = defaultValue;
        // Insert options if type has options
        if(isQuestionHasChoices) obj.choices = choices;

        return Object.freeze(obj);
    }
}

export default buildMakeQuestion;