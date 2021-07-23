import { fstat, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { mkdir } from 'shelljs';

// TODO: readdirSync, statSync, writeFilesync and mkdir should come as params.
export const templateBuilder = async ({
    targetDir,
    templateDir,
    templateData,
    renderTemplateData
}) => {
    console.log(`Copying project from ${templateDir} to ${targetDir}`);
    const files = readdirSync(templateDir);

    // Create directory
    mkdir(targetDir)

    // iterate over all the files and create them in target directory.
    files.forEach(file => {
        const currentFilePath = join(templateDir, file);
        const fileStats = statSync(currentFilePath);
        
        if(fileStats.isFile()) {
            const contents = readFileSync(currentFilePath);
            // const renderedContent = renderTemplateData(contents, templateData);

            // Create file in target directory.
            writeFileSync(join(targetDir, file), contents);

            // Log in UI
            console.log(`Created ${join(targetDir, file)}`);
        }else {
            // Iterate over all the files in that directory and create files.
            templateBuilder({
                targetDir: join(targetDir, file),
                templateDir: join(templateDir, file),
                templateData,
                renderTemplateData
            })
        }
    })
}
export default templateBuilder;