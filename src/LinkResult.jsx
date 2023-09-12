import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const LinkResult = ({ inputValue }) => {
    console.log(inputValue)
    const [ShortenLink, setShortenLink] = useState("Shorten Url Is There Ready To Copy")
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [copied])
    return (
        <div className='result'>
            <p>{ShortenLink}</p>
            <CopyToClipboard text={ShortenLink}
                onCopy={() => setCopied(true)}
            >
                <button
                    className={copied ? "copied" : ""}>CopyToCLipboard</button>
            </CopyToClipboard>
        </div>
    )
}

export default LinkResult
