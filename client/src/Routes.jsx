import { useContext } from "react";
import SignUpAndLoginForm from "./SignUpAndLoginForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

export default function Routes(){
    const {username, id}=useContext(UserContext);

    if(username){
        return (
            <Chat/>
        )
    }

    return(
        <SignUpAndLoginForm/>
    )
}