import useAuthState from "../GlobalState/auth.state.js"


export default function Login(){
    const {aalu}=useAuthState()
    return (
        <div>Login{aalu}</div>
    )
}