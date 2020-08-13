pipeline {
  agent any

  stages {
    stage('Build') {
      agent {
        docker { image 'node:12-alpine' }
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
        echo 'Building...'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
