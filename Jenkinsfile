pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }
    
    stages {
          stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }

        stage('e2e Tests') {
            steps {
                sh 'npm run cypress'
            }
        }
    }
}
}
