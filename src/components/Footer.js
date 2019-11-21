import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us <a href="https://www.instagram.com/blackboxmd/">@blackboxmd</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()}. All rights reserved. Recrafted
          by <a href="https://www.blackboxmd.fyi/">BlackBoxMediaDesign</a>.
        </span>
      </div>
    </footer>
  </div>
)
