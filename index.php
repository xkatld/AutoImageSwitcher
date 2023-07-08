<?php
// 图片目录
$imageDir = 'img';
// 允许的图片类型
$allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];

// 获取图片目录下的所有图片文件
$images = glob($imageDir . '/*.{'.implode(',', $allowedTypes).'}', GLOB_BRACE);

// 随机选择一张图片
$randomImage = $images[array_rand($images)];

// 输出图片
header('Content-Type: image/jpeg'); // 根据实际图片类型设置Content-Type
readfile($randomImage);
?>