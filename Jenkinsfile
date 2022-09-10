pipeline{
   agent {
        docker{
                image "davidhailu0/dockercomposedebian"
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
                 sh "docker system prune -f"
                 sh "docker-compose build web"
                 sh "docker-compose build test"
                 git url: "https://github.com/davidhailu0/mybus-server.git", branch:"master"
                 sh "docker-compose build server"
            }
        }

        stage("Test"){
            // when{
            //     expression{
            //         env.BRANCH_NAME == "DEV"
            //     }
            // }
            steps{
                sh "docker-compose run -d mybus-client_web"
                sh "docker-compose run -d server"
                sh "docker-compose run test"
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

