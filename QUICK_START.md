# 🎮 ShipperZ Game - Quick Start Guide

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu
- ✅ Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- ✅ Tệp `shipperz.html` 
- ✅ Ảnh nền game (trong thư mục cùng với HTML)

### Tệp Cần Thiết
```
shipperz.html          (game chính)
body.jpg               (ảnh nền)
viahe1.jpg             (đường chân trời)
nhanvat.png            (nhân vật mặc định)
thungrac.png           (platform)
ongnuoc.png            (cống nước)
khucgo.jpg             (gỗ)
hopbian.png            (hộp mục tiêu)
cuncute.png            (chó)
phancute.png           (mèo)
bongbong.png           (banh)
giangsinh.mp3          (nhạc nền)
```

## 🎮 Cách Chơi

### Desktop/Laptop 🖥️
```
⌨️ Điều khiển:
  A / ← → để di chuyển sang trái/phải
  Space / W để nhảy
  
🎵 Âm thanh:
  Nhấn "🔊 BẬT NHẠC" để bật/tắt
  
🔄 Chơi lại:
  Nhấn "Reset Nhân Vật" để reset game
```

### Tablet 📱
```
👆 Điều khiển:
  Joystick (trái) để di chuyển
  Nút "NHẢY" (phải) để nhảy
  
💡 Tip:
  - Có thể vẫn dùng bàn phím được
  - Dùng cả hai hoặc chỉ một cách
```

### Điện Thoại 📲
```
👆 Điều khiển:
  Joystick (dưới trái) → kéo để di chuyển trái/phải
  Nút "NHẢY" (dưới phải) → nhấn để nhảy
  
🌐 Hướng dẫn:
  Giữ joystick lâu sẽ di chuyển liên tục
  Nhấn nút NHẢY để nhảy cao
  
📱 Xoay Điện Thoại:
  Game tự động điều chỉnh khi xoay
  Landscape: rộng hơn, dễ chơi hơn
  Portrait: hẹp hơn, challenge hơn
```

## 🎯 Mục Tiêu Game

1. **Đi từ trái sang phải** - Vượt qua các chướng ngại vật
2. **Nhảy qua lỗ sâu** - Không rơi xuống vực
3. **Tránh vật cản** - Không chạm vào vật nguy hiểm
4. **Đến hộp mục tiêu** - Cuối cùng
5. **Trong 60 giây** - Có hạn thời gian

## 📊 Bảng Điểm

```
🏆 Kỷ lục Cá Nhân
  - Lưu TOP 5 lần chơi nhanh nhất
  - Hiển thị sau mỗi lần chiến thắng
  - Reset khi xóa cache browser

🎭 Nhân Vật
  - Level 1: Nhân vật mặc định (nhanvat.png)
  - Level 2: Chủ quán (chuquan.png) [unlock sau level 1]
  - Level 3: Cô giáo (cogiao.png) [unlock sau level 2]
  - Level 4: Bộ đội (bodoi.png) [unlock sau level 3]
  - Level 5: Bác sĩ (bacsi.png) [unlock sau level 4]
```

## ⚡ Tính Năng Chính

### 1. Responsive Design
- ✅ Auto-scale cho tất cả thiết bị
- ✅ PC: 900×450 (bàn phím)
- ✅ Tablet: 80% màn hình (touch)
- ✅ Mobile: Fullscreen (touch optimized)

### 2. Smart UI
- ✅ Font size thay đổi theo thiết bị
- ✅ Nút bấm tự động scale
- ✅ Layout tự động điều chỉnh

### 3. Touch Controls
- ✅ Joystick di chuyển (trái)
- ✅ Jump button nhảy (phải)
- ✅ Hỗ trợ landscape + portrait

### 4. Keyboard Support
- ✅ A/D: di chuyển
- ✅ Space: nhảy
- ✅ ← →: di chuyển
- ✅ W: nhảy

## 🔧 Cách Chạy

### Cách 1: Mở File Trực Tiếp
```
1. Mở file explorer
2. Tìm file shipperz.html
3. Double-click để mở trong trình duyệt
```

### Cách 2: Dùng Trình Duyệt
```
1. Mở Chrome, Firefox, Safari, hoặc Edge
2. Ctrl+O (hoặc Cmd+O trên Mac)
3. Chọn file shipperz.html
4. Chơi ngay!
```

### Cách 3: Local Server (Nếu Cần)
```bash
# Với Python 3
python -m http.server 8000

# Với Node.js
npx http-server

# Rồi mở browser vào:
http://localhost:8000/shipperz.html
```

## 📱 Test Responsive (DevTools)

### Chrome/Firefox/Edge
```
1. Mở game trong browser
2. Nhấn F12 để mở DevTools
3. Nhấn Ctrl+Shift+M để mở Device Toolbar
4. Chọn thiết bị:
   - iPhone 12 (portrait + landscape)
   - iPad (portrait + landscape)
   - Pixel 5 (portrait + landscape)
5. Test gameplay trên từng size
```

## 🎨 Responsive Breakpoints

```
📱 Mobile: ≤ 767px
   - Fullscreen: 100vw × 100vh
   - Nhân vật: 90×90 px
   - Joystick: 110×110 px
   - Nút: 70×70 px
   
📊 Tablet: 768px - 1023px
   - Container: 80vw × 60vh
   - Nhân vật: 110×110 px
   - Joystick: 130×130 px
   - Nút: 80×80 px
   
🖥️ Desktop: ≥ 1024px
   - Cố định: 900×450 px
   - Nhân vật: 130×130 px
   - Joystick: HIDDEN
   - Nút: HIDDEN
```

## 🐛 Troubleshooting

### Game không tải
- ✅ Kiểm tra các ảnh trong cùng thư mục
- ✅ Kiểm tra console (F12) xem có lỗi không
- ✅ Thử refresh page (F5)
- ✅ Xóa cache (Ctrl+Shift+Delete)

### Âm thanh không phát
- ✅ Kiểm tra file giangsinh.mp3 có tồn tại
- ✅ Kiểm tra browser settings cho âm thanh
- ✅ Nhấn nút "BẬT NHẠC" để kích hoạt
- ✅ Thử trình duyệt khác

### Joystick không response
- ✅ Kiểm tra nếu đang dùng desktop (joystick bị ẩn)
- ✅ Cố gắng nhấn jump button
- ✅ Kiểm tra F12 console có error không
- ✅ Thử refresh page

### Mobile không fullscreen
- ✅ Kiểm tra meta viewport được set đúng
- ✅ Xóa zoom settings trên device
- ✅ Thử xoay điện thoại
- ✅ Thử trình duyệt khác

## 💾 Lưu Game Progress

```
Browser localStorage được dùng để lưu:
  - Kỷ lục cá nhân (TOP 5)
  - Nhân vật hiện tại
  - Level hiện tại
  
Xóa data:
  F12 → Application → LocalStorage → Xóa
```

## ✅ Compatibility

| Browser | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ |
| Edge | ✅ | ⚠️ | ✅ |

## 📖 Tài Liệu Thêm

- **README_RESPONSIVE.md** - Hướng dẫn responsive design chi tiết
- **RESPONSIVE_DESIGN_NOTES.md** - Ghi chú kỹ thuật đầy đủ
- **shipperz.html** - Mã nguồn game

## 🎯 Tips & Tricks

### Chơi Tốt Hơn
1. **Nhảy sớm** - Nhảy trước khi đến lỗ sâu
2. **Dòng chuyển động** - Tránh đối tượng di chuyển
3. **Âm thanh** - Bật nhạc để có trải nghiệm tốt hơn
4. **Practice** - Level càng cao càng khó, cần luyện tập

### Phím Tắt
- **F12**: Mở DevTools
- **Ctrl+R** hoặc **F5**: Refresh game
- **Ctrl+Shift+Delete**: Xóa cache
- **Ctrl+Shift+M**: DevTools Device Mode

## 🎓 Học Hỏi

Game này được thiết kế để:
- ✅ Học HTML/CSS/JavaScript
- ✅ Thử nghiệm responsive design
- ✅ Thực hành game development
- ✅ Test trên nhiều thiết bị

## 📞 Support

Nếu gặp sự cố:
1. Kiểm tra console (F12 → Console)
2. Xem lại thư mục chứa các file hình ảnh
3. Thử trình duyệt khác
4. Xóa cache và reload

---

**Version**: 1.0 Responsive  
**Last Updated**: 2025-11-13  
**Status**: Ready to play! 🎮
