import { buildMakeQuestion } from './question';
import { questionHasChoices, typeValidator } from '../../_helpers';

export const makeQuestion = buildMakeQuestion({ questionHasChoices, typeValidator }); 
export default makeQuestion;
