const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your project\'s is',
                default: this.appname
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }
    writing () {
        const templates = [
            '.gitignore',
            'package.json',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'public/logo192.png',
            'public/manifest.json',
            'public/robots.txt',
            'src/app.css',
            'src/app.js',
            'src/app.test.js',
            'src/index.js',
            'src/index.css',
            'src/logo.svg',
            'src/serviceWorker.js',
            'src/setupTests.js',
        ]
        templates.forEach(item=>{
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answers)
        })
    }
}