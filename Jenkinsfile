pipeline{
   agent {
        docker{
                image "davidhailu0/customdocker"
                args "--env DOCKER_HOST=tcp://docker:2376 -u root"
            }
        }
    // environment{
        // NEW_VERSION = "1.3"
        // SERVER_CREDENTIAL = credentials("CREDENTIAL ID")
    // }
    // tools{
        
    // }
    stages{
        stage("Build"){   
            steps{
                 sh "docker --help"
                 sh "docker-compose build web"
            }
        }

        stage("Test"){
            // when{
            //     expression{
            //         env.BRANCH_NAME == "DEV"
            //     }
            // }
            steps{
                sh "docker --help"
            }
        }

        // stage("Deploy"){
        //     steps{
        //         sh "npm start"
        //         sh "${SERVER_CREDENTIAL}"
        //         //another
        //         withCredentials([usernamePassword(credentials:"credential ID",usernameVariable:USER,passwordVariable:PWD)]){

        //         }
        //     }
        // }
    }
    // post{
    //     always{

    //     }
    //     success{

    //     }
    //     failure{

    //     }
    // }
}

