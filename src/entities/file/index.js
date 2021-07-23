import { buildMakeFile } from './file';
import { render } from 'ejs';
import { templateBuilder } from './templateBuilder';

export const makeFile = buildMakeFile({
    templateBuilder,
    renderTemplateData: render
});

export default makeFile;