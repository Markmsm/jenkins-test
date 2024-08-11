pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    sh 'echo "Building application"'
                }
            }
        }

        stage('tests') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    sh '''
                        node --test
                    '''
                }
            }
        }
    }
}