// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Aquí puedes añadir etiquetas <link> o <meta> si es necesario */}
      </Head>
      <body>
        <div id="app"></div>
        <Main />
        <NextScript />
        {/* Agregar tus scripts aquí */}
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script type="text/javascript">
          {`
            const app = document.getElementById('app');
            const header = document.createElement('h1');
            const paragraph = document.createElement('p');
            const text = 'Develop. Preview. Ship.';
            const subText = 'Description';
            const headerContent = document.createTextNode(text);
            const pContent = document.createTextNode(subText);
            paragraph.appendChild(pContent);
            header.appendChild(headerContent);
            app.appendChild(header);
            app.appendChild(paragraph);
          `}
        </script>
      </body>
    </Html>
  );
}
