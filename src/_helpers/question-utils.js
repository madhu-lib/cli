// TODO: Move this to config folder.
const VALID_QUESTION_TYPES = [
    ['checkbox', true],
    ['list', true],
    ['raw_list', true],
    ['expand', false],
    ['confirm', false],
    ['input', false],
    ['number', false],
    ['password', false]
];

export const typeValidator = (type) => {
    return type && VALID_QUESTION_TYPES.findIndex(q => q[0] === type) !== -1;
}

export const questionHasChoices = (type) => {
    if(!type && !typeValidator(type)) return false;

    const typeInfo = VALID_QUESTION_TYPES.find(q => q[0] === type);
    return typeInfo && typeInfo.length === 2 ? typeInfo[1] : false;
}

export default Object.freeze({
    typeValidator,
    questionHasChoices
})
