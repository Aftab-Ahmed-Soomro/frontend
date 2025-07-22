const backendDomain = "http://localhost:5000"

const summaryApi = {
    signup : {
        url : `${backendDomain}/api/register`,
        method : "post"
    },
    signin : {
        url : `${backendDomain}/api/login`,
        method : "post"
    }
}

export default summaryApi