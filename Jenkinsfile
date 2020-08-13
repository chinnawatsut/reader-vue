pipeline {
  agent any

  stages {
    stage('Build') {
      agent {
        docker { image 'node:12-alpine' }
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'ls'
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
