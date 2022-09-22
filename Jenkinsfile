pipeline{
   agent {
        docker{
                image "davidhailu0/dockeralpine:v1"
                args "-v /var/run/docker.sock:/var/run/docker.sock -u root"
            }
        }
    environment{
        AWS_CREDENTIAL = credentials("CREDENTIAL ID")
    }
    // tools{
        
    // }
    stages{
        stage("Build"){   
            steps{
                 sh "docker-compose build prod"
                 sh "docker-compose build test"
            }
        }

        stage("Test"){
            // when{
            //     expression{
            //         env.BRANCH_NAME == "DEV"
            //     }
            // }
            steps{
                sh "docker rm -f localserver"
                sh "docker rm -f server"
                sh "docker-compose run test"
            }
        }

        stage("Deploy"){
            steps{
                // sh "npm start"
                // sh "${SERVER_CREDENTIAL}"
                // //another
                // withCredentials([usernamePassword(credentials:"credential ID",usernameVariable:USER,passwordVariable:PWD)]){

                // }
                sh "docker-compose run prod"
            }
        }
    }
    post{
        always{
            sh "docker system prune"
        }
        // success{

        // }
        // failure{

        // }
    }
}

