///<reference types="Cypress" />

describe('File Upload', () => {
    //cypress-file-upload plugins yuklenmeli
    //(npm install --save-dev cypress-file-upload)

    it('Single File Upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "yvz.jpg" //fixtures icerisine yukleyecegimiz dosyayi koyacagiz
        cy.get('#filesToUpload').attachFile(path1) //sectigimiz dosyayi yukledik

        cy.get('#filesToUpload').should('include.text','yvz') //yukledigini dogruladik

    });

    it.skip('Multiple File Upload 1', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1 = "yvz1.jpg"
        const path2 = "yvz2.jpg"
        const path3 = "yvz3.jpg"

        cy.get('#filesToUpload').attachFile(path1)
                                .attachFile(path2)
                                .attachFile(path3)

        cy.get('#filesToUpload').should('include.text','yvz3')
    });

    it('Multiple File Upload 2', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

          
        const path1 = "yvz1.jpg"
        const path2 = "yvz2.jpg"
        const path3 = "yvz3.jpg"
        
        cy.get('#filesToUpload').attachFile([path1, path2, path3])

    });
});