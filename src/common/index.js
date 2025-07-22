const backendDomain = "https://backend-seven-gamma-86.vercel.app"

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