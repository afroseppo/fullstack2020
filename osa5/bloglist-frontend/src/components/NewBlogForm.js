import React, { useState } from 'react'

const NewBlogForm = ({ handleCreation }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const addBlog = (event) => {
        event.preventDefault()
        handleCreation({
            author: author,
            title: title,
            url: url
        })
        setTitle('')
        setAuthor('')
        setUrl('')
    }


    return (
        <>
            <h1>Create a new blog</h1>
            <form onSubmit={addBlog}>
                <div>
                    title
                    <input
                        id="title"
                        type="text"
                        value={title}
                        name="Title"
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    author
                    <input
                        id="author"
                        type="text"
                        value={author}
                        name="Author"
                        onChange={handleAuthorChange}
                    />
                </div>
                <div>
                    url
                    <input
                        id="url"
                        type="text"
                        value={url}
                        name="Url"
                        onChange={handleUrlChange}
                    />
                </div>
                <button id='create-button' type="submit">Create</button>
            </form>
        </>
    )
}

export default NewBlogForm