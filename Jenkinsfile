pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/spanol/teste-e2e-ebac'
                sh '''npm install'''
            }
        }
        stage('Test') {
            steps {
                sh '''npm test'''
            }
        }        
    }
}
