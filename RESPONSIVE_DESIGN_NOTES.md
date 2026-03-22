# ShipperZ Game - Responsive Design Improvements

## Tổng Quan
Game ShipperZ đã được cập nhật để hoạt động tốt trên tất cả các nền tảng: **PC, máy tính bảng (Tablet), và điện thoại (Mobile)**.

## Các Cải Tiến Chính

### 1. **Responsive Layout**
- **Desktop (≥1024px)**: 900x450px, bấm phím để điều khiển
- **Tablet (768px-1023px)**: 80vw x 60vh, hỗ trợ joystick và nút nhảy
- **Mobile (≤767px)**: 100vw x 100vh (fullscreen), tối ưu hóa cho cảm ứng

### 2. **Điều Khiển Động**
- **Desktop**: Ẩn joystick và nút nhảy → sử dụng bàn phím (A/D, Space)
- **Tablet & Mobile**: Hiển thị joystick (trái) và nút nhảy (phải)
- Kích thước nút được tự động điều chỉnh dựa trên kích thước màn hình

### 3. **Kích Thước Nhân Vật**
Nhân vật tự động được scales theo kích thước màn hình:
```
Desktop:   130x130px
Tablet:    110x110px  
Mobile:    90x90px
```
Hàm `adjustPlayerSizeForScreen()` tính toán lại kích thước khi:
- Trang được tải
- Cửa sổ được thay đổi kích thước
- Thiết bị xoay (landscape ↔ portrait)

### 4. **UI Responsiveness**
- **Thời gian & Level**: Tự động scale font-size dựa trên breakpoint
- **Nút bấm**: Điều chỉnh padding và font-size
- **Mô tả điều khiển**: Ẩn trên mobile để tiết kiệm không gian
- **Game Over Message**: Kích thước responsive với scroll overflow

### 5. **Touch Optimization**
```
Meta viewport: width=device-width, maximum-scale=1.0, user-scalable=no
- Ngăn zoom mặc định trên mobile
- Hỗ trợ viewport-fit=cover cho notched devices
- Tối ưu hóa cho landscape + portrait
```

### 6. **Orientation Support**
Game tự động điều chỉnh khi thiết bị xoay:
- Landscape: Full-width gameplay
- Portrait: Full-height gameplay
- Event listener: `orientationchange` → điều chỉnh lại kích thước

### 7. **CSS Media Queries**
```css
/* Desktop: ≥1024px */
@media (min-width: 1024px) { #joystick, #jump-button { display: none; } }

/* Tablet: 768px-1023px */
@media (min-width: 768px) and (max-width: 1023px) { /* scale 80-90% */ }

/* Mobile: ≤767px */
@media (max-width: 767px) { /* fullscreen optimized */ }
```

## Các Tính Năng Chi Tiết

### Mobile Joystick
- Vị trí: Dưới bên trái
- Kích thước: Thay đổi từ 140px (desktop) → 110px (mobile)
- Hỗ trợ: Touch + Mouse
- Deadzone: 18% bán kính (ngăn drift)

### Jump Button
- Vị trí: Dưới bên phải
- Kích thước: Thay đổi từ 92px (desktop) → 70px (mobile)
- Hỗ trợ: Touch + Mouse
- Ẩn trên desktop

### Font Sizing
| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Thời gian | 1.2em | 1em | 0.9em |
| Nút | 0.9em | 0.8em | 0.7em |
| Hướng dẫn | 0.9em | 0.75em | 0.65em (hidden) |
| Game Over | 2.2em | 1.8em | 1.5em |

## Kiểm Thử

### Desktop (1024px+)
✅ Bàn phím: A/D hoặc ← → để di chuyển
✅ Space để nhảy
✅ Joystick và nút nhảy bị ẩn

### Tablet (768px-1023px)
✅ Hiển thị joystick (trái) và jump button (phải)
✅ Hỗ trợ cả keyboard và touch
✅ UI scales 80-90%

### Mobile (≤767px)
✅ Fullscreen gameplay
✅ Joystick + Jump button
✅ Landscape + Portrait support
✅ Ẩn mô tả điều khiển
✅ Font size tối ưu cho small screens

## Cách Sử Dụng

1. **PC/Laptop**: Mở file `shipperz.html` trong trình duyệt → Dùng bàn phím
2. **Tablet**: Mở trên tablet → Dùng joystick + nút nhảy
3. **Điện Thoại**: Mở trên điện thoại → Dùng joystick + nút nhảy
4. **Responsive Test**: F12 → DevTools → Toggle device toolbar

## Technical Details

### Key Functions
- `adjustPlayerSizeForScreen()`: Tính toán kích thước nhân vật dựa vào window width
- Event listeners: `resize`, `orientationchange`
- Breakpoints: 767px, 1023px

### CSS Features
- Flexbox cho layout
- `aspect-ratio` cho scaling tự động
- Relative units: vw, vh, em
- `@media` queries cho responsive design

### JavaScript Optimization
- Debouncing resize events (orientationchange)
- Dynamic size adjustment
- Touch event handling with `passive: false`
- Prevent default scroll behavior

## Browser Support
✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile Chrome, Firefox, Safari

## Future Enhancements
- [ ] Add settings menu for custom control sensitivity
- [ ] Implement dark mode
- [ ] Add haptic feedback (vibration) for mobile
- [ ] Support gamepad controllers
- [ ] Multi-level difficulty scaling

---
**Version**: 1.0 Responsive
**Last Updated**: 2025-11-13
