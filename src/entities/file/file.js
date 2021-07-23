export const buildMakeFile = ({ templateBuilder, renderTemplateData }) => {

    if(!templateBuilder) throw new Error("templateBuilder not found");
    

    return Object.freeze({
        createTemplate
    })

    async function createTemplate({ targetDir = __dirname, templateDir, templateData = {} }) {
        if(!templateDir) throw new Error("Template directory path should not be empty");

        //TODO: Render data and pass it down to templateBuilder.
        templateBuilder({
            targetDir,
            templateDir,
            templateData,
            renderTemplateData
        });
    }
}

export default buildMakeFile;