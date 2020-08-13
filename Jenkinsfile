pipeline {
  agent any
  environment { HOME = '.' }
  stages {
    stage('Build') {
      agent { docker { image 'node:12-alpine' } }
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      agent { docker { image 'node:12-alpine' } }
      steps {
        sh 'npm run test:unit'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
