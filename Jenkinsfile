pipeline {
    agent { docker { image 'node:20.16.0-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                sh 'node --test'
                sh 'node server.js'
            }
        }
    }
}