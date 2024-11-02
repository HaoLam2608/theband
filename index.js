const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phục vụ tệp tĩnh
app.use(express.static(path.join(__dirname))); // Thay 'public' bằng thư mục chứa tệp index.html nếu khác

// Route để phục vụ tệp index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
