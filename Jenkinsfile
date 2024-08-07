pipeline {
    agent { docker { image 'node:20.16.0-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    sh '''
                        node --test
                        node server.js
                    '''
                }
            }
        }
    }
}