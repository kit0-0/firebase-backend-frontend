import { useState } from "react";



export const Edit = () => {
   const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    return (
        <>
            <h1>Edit your profile</h1>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <button>Save</button>
        </>
    )
}