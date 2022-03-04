import React from 'react'
import { SUBSCRIBE_MUTATION } from './GraphQL/Mutations';
import { useMutation } from '@apollo/client';

function SimpleForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subscribe, { error }] = useMutation(SUBSCRIBE_MUTATION);

    const sub = () => {
        subscribe({variables: {input: email,name}});
        console.log("Subscribing");
    }


    return (
        <div>
            <form>
                <input type="text" name='name' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <button type='button' onClick={() => sub()}>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm