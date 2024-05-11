import cl from './EmailList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { emailService } from '../../services/email.service';

export function EmailList(){
    const { data } = useQuery({
        queryKey:['email list'],
        queryFn:()=> emailService.getEmails()
    });
    
    return (
      <div className={cl.list}>
        {data?.map(email => (
            <div key={email.text}>{email.text}</div>
        ))}
      </div>)
}