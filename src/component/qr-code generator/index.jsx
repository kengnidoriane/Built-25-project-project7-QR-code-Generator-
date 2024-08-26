import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css'


export default function QRCodeGenerator() {

  const [qrCOde, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGEnerateQrCode() {
    setQrCode(input);
    setInput(''); //ceci est ajouter pour que le bouton generate ne soit pas cliquable lorsqu'on vient de generer un qr code
  }

  return (
    <div>
        <h1>QR COde Generator</h1>
        <div className='container-input'>
            <input 
              onChange={(e) => setInput(e.target.value)} 
              type="text" 
              name='qr-code' 
              placeholder='Enter your value here'
            />

            <button 
              disabled={input && input.trim() !== '' ? false : true} 
              onClick={handleGEnerateQrCode}
              className='qr-button'
              >
                Generate
            </button>
        </div>
        <div>
          <QRCode
            id='qr-code-value'
            value={qrCOde}
            size={400}
            bgColor='#fff'            
          />
        </div>
    </div>
  )
}
