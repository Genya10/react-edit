import EmailEditor from "./email-editor/EmailEditor";
import { EmailList } from "./email-list/EmailList";

export function Home(){
    return <div style={{
        display:'grid',
        gridTemplateColumns:'1fr .8fr'
    }}>
        <EmailEditor/>
        <EmailList/>
    </div>
}