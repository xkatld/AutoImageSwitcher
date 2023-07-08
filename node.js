const fs = require('fs');
const path = require('path');

// 图片目录
const imageDir = 'img';
// 允许的图片类型
const allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];

// 获取图片目录下的所有图片文件
const images = fs.readdirSync(imageDir).filter(file => {
  const ext = path.extname(file).toLowerCase().slice(1);
  return allowedTypes.includes(ext);
});

// 随机选择一张图片
const randomImage = images[Math.floor(Math.random() * images.length)];

// 输出图片
const imagePath = path.join(imageDir, randomImage);
const image = fs.readFileSync(imagePath);

// 设置Content-Type
let contentType = 'image/jpeg'; // 默认设置为jpeg类型
const ext = path.extname(randomImage).toLowerCase().slice(1);
if (ext === 'png') {
  contentType = 'image/png';
} else if (ext === 'gif') {
  contentType = 'image/gif';
}

// 发送响应
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(image);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
