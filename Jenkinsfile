pipeline{
   agent {
        docker{
                image "davidhailu0/customdocker"
                args "-v /var/run/docker.sock:/var/run/docker.sock -u root"
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

