import React from 'react'

const ListView = ({ files }: any) => {
    return (
        <div>
            <h1>List of files in the repository</h1>
            <ul>
                {files.map((e: string) => (
                    <li key={e}>{e}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListView
