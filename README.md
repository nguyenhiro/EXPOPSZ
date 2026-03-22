# 📦 SHIPPERZ - Game Giao Hàng Vui Vẻ

**ShipperZ** là một tựa game chạy vô tận (Endless Runner) vui nhộn và thử thách, nơi bạn hóa thân thành các nhân vật đời thường để vượt qua chướng ngại vật và giao hàng an toàn.

Game được phát triển bởi **Nguyễn Hoài Nam (Hiro Nguyen)** cùng sự hỗ trợ của **AI Gemini**.

![ShipperZ Game Screenshot](nhanvat.png)

---

## ✨ Tính Năng Nổi Bật

*   **🏃 Lối chơi hấp dẫn**: Chạy, nhảy và trượt để né tránh vô số chướng ngại vật (thùng rác, ống nước, tường gạch...).
*   **👥 Hệ thống nhân vật đa dạng**:
    *   **Shipper**: Giao hàng siêu tốc độ.
    *   **Chủ Quán**: Phục vụ tận tình.
    *   **Cô Giáo**: Kiến thức uyên thâm.
    *   **Bộ Đội**: Kỷ luật thép.
    *   **Bác Sĩ**: Hồi phục thần kỳ.
*   **💰 Thu thập Xu**: Ăn xu trên đường đi để tích điểm (Lưu ý: Va chạm sẽ bị trừ xu, hết xu sẽ thua cuộc).
*   **📱 Đa nền tảng**: Tương thích hoàn hảo trên cả Máy tính (PC) và Điện thoại di động (Mobile/Tablet).
*   **📶 Chế độ Offline (PWA)**: Hỗ trợ cài đặt như ứng dụng native và chơi không cần mạng internet.
*   **level**: Hệ thống 100 màn chơi với độ khó tăng dần (tốc độ, mật độ vật cản).
*   **🎵 Âm thanh sống động**: Nhạc nền vui tươi và hiệu ứng âm thanh chân thực.

---

## 🎮 Hướng Dẫn Cách Chơi

Mục tiêu của bạn là sống sót trong vòng **60 giây** mỗi màn để qua màn tiếp theo.

### 1. Điều Khiển

| Thao Tác | Máy Tính (PC) | Điện Thoại (Mobile) |
| :--- | :--- | :--- |
| **Nhảy** | Phím `Space` hoặc `Mũi tên lên (↑)` | Vuốt màn hình lên trên (👆) |
| **Ngồi / Trượt** | Phím `Mũi tên xuống (↓)` | Vuốt màn hình xuống dưới (👇) |

### 2. Quy Tắc Sinh Tồn
*   **Né tránh vật cản**: Đừng để chạm vào chướng ngại vật (phân cute, bong bóng, thùng rác...).
*   **Thu thập xu**: Xu đóng vai trò là "mạng sống".
    *   Va chạm khi **có xu**: Trừ xu, nhân vật nhấp nháy (bất tử tạm thời).
    *   Va chạm khi **hết xu**: Game Over.
*   **Tăng tốc**: Tốc độ game sẽ tăng dần sau mỗi màn chơi.

---

## 🛠️ Cài Đặt & Chạy Game

Game được xây dựng bằng **HTML5, CSS3 và Vanilla JavaScript**, không cần cài đặt phức tạp.

### Cách 1: Chơi trực tiếp
1.  Tải toàn bộ mã nguồn về máy.
2.  Mở file `shipperz.html` bằng trình duyệt web bất kỳ (Chrome, Safari, Edge, Firefox...).

### Cách 2: Cài đặt như App (PWA)
1.  Mở game trên trình duyệt Chrome (Android) hoặc Safari (iOS).
2.  Chọn menu và nhấn **"Thêm vào màn hình chính" (Add to Home Screen)**.
3.  Game sẽ xuất hiện như một ứng dụng độc lập trên điện thoại của bạn và có thể chơi khi tắt mạng.

---

## 📂 Cấu Trúc Thư Mục

*   `shipperz.html`: File mã nguồn chính chứa HTML, CSS và Logic game.
*   `manifest.json`: Cấu hình cho tính năng Web App (PWA).
*   `sw.js`: Service Worker giúp game chạy Offline.
*   `*.png / *.jpg`: Tài nguyên hình ảnh (nhân vật, nền, vật cản).
*   `*.mp3`: Tài nguyên âm thanh.

---

## 🤝 Đóng Góp & Donate

ShipperZ là một dự án cá nhân miễn phí. Nếu bạn yêu thích trò chơi này, hãy ủng hộ tác giả để có thêm động lực phát triển các phiên bản tiếp theo!

Trong giao diện game, nhấn nút **❤️ Donate** để xem thông tin chi tiết.

*   **Tác giả**: Nguyễn Hoài Nam (Hiro Nguyen)
*   **Ngân hàng**: MB Bank
*   **STK**: 0393369901

---

## 📜 Phiên Bản

*   **v1.0**:
    *   Ra mắt 5 nhân vật.
    *   Hệ thống 100 level.
    *   Hỗ trợ PWA Offline.
    *   Tối ưu hóa cho Mobile (Touch/Swipe).

*Chúc bạn có những giây phút thư giãn vui vẻ cùng ShipperZ!* 🚀