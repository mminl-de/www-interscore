function fullscreen(img) {
    const imageUrl = img.src;
    const newWindow = window.open(imageUrl, '_blank');
    newWindow.document.innerHTML = `
<html>
    <head>
        <title>Screenshot</title>
        <style>
            body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: black;
            }
            img {
                max-width: 100%;
                max-height: 100vh;
            }
        </style>
    </head>
    <body>
        <img src="${imageUrl}" alt="Fullscreen Screenshot"/>
    </body>
</html>
    `;
}
