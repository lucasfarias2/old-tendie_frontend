export default (view: string) => `<!DOCTYPE html><html><head><title>Tendie</title></head>

<body>

<div>${view}</div>

<script src="./static/home.js" />
</body></html>`;
