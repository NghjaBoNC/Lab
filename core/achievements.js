const LAB_ACHIEVEMENTS = (() => {
  const list = [];
  const add = (cat, ico, title, desc, fn) => list.push({ cat, ico, title, desc, check: fn });

  // 1. Chuỗi liên tiếp (18)
  [
    [1,'🌱','Khởi Đầu','Giữ chuỗi 1 ngày'],
    [2,'🌿','Nối Nhịp','Giữ chuỗi 2 ngày liên tiếp'],
    [3,'🔥','Bắt Lửa','Giữ chuỗi 3 ngày liên tiếp'],
    [5,'⚡','Vào Guồng','Giữ chuỗi 5 ngày liên tiếp'],
    [7,'🛡️','Tuần Lễ Thép','Giữ chuỗi 7 ngày liên tiếp'],
    [10,'⚔️','Thập Toàn','Giữ chuỗi 10 ngày liên tiếp'],
    [14,'💎','Hai Tuần Bền Bỉ','Giữ chuỗi 14 ngày liên tiếp'],
    [21,'🧠','Hình Thành Thói Quen','Giữ chuỗi 21 ngày liên tiếp'],
    [30,'👑','Chúa Tể 30 Ngày','Giữ chuỗi 30 ngày liên tiếp'],
    [40,'🚀','Vượt Ngưỡng','Giữ chuỗi 40 ngày liên tiếp'],
    [50,'🌟','Nửa Trăm Bền Vững','Giữ chuỗi 50 ngày liên tiếp'],
    [60,'🦾','Cỗ Máy Kỷ Luật','Giữ chuỗi 60 ngày liên tiếp'],
    [75,'🔱','Tam Tứ Bách','Giữ chuỗi 75 ngày liên tiếp'],
    [90,'🏰','Quý Độ Bất Bại','Giữ chuỗi 90 ngày liên tiếp'],
    [120,'🐉','Tứ Nguyệt Thần Công','Giữ chuỗi 120 ngày liên tiếp'],
    [180,'🌌','Nửa Năm Không Nghỉ','Giữ chuỗi 180 ngày liên tiếp'],
    [250,'☄️','Huyền Thoại Sống','Giữ chuỗi 250 ngày liên tiếp'],
    [365,'♾️','Bất Tử Trọn Năm','Giữ chuỗi 365 ngày liên tiếp']
  ].forEach(([n, ico, t, d]) => add('Chuỗi', ico, t, d, (m) => m.bestStreak >= n));

  // 2. Tổng số buổi hoàn thành (18)
  [
    [1,'👣','Bước Chân Đầu','Hoàn thành 1 buổi học'],
    [3,'📘','Làm Quen Nhịp Độ','Hoàn thành 3 buổi học'],
    [5,'📗','Năm Ngón Tay','Hoàn thành 5 buổi học'],
    [7,'📙','Trọn Một Tuần','Hoàn thành 7 buổi học'],
    [10,'🔟','Mốc Hai Chữ Số','Hoàn thành 10 buổi học'],
    [15,'🎯','Nửa Chặng Đầu','Hoàn thành 15 buổi học'],
    [20,'🏅','Hai Chục Phiên','Hoàn thành 20 buổi học'],
    [25,'🎖️','Một Phần Tư Trăm','Hoàn thành 25 buổi học'],
    [30,'🏆','Trọn Lộ Trình 30','Hoàn thành 30 buổi học'],
    [40,'📚','Tích Tiểu Thành Đại','Hoàn thành 40 buổi học'],
    [50,'💫','Cột Mốc 50 Phiên','Hoàn thành 50 buổi học'],
    [65,'⚡','Bền Bỉ Vượt Trội','Hoàn thành 65 buổi học'],
    [80,'🔮','Tám Mươi Lần Chốt','Hoàn thành 80 buổi học'],
    [100,'💯','Bách Chiến Bách Thắng','Hoàn thành 100 buổi học'],
    [150,'🏛️','Kiến Trúc Sư Kỷ Luật','Hoàn thành 150 buổi học'],
    [200,'🌠','Hai Trăm Dấu Ấn','Hoàn thành 200 buổi học'],
    [300,'🐉','Tam Bách Đỉnh Cao','Hoàn thành 300 buổi học'],
    [365,'🌞','Đủ Một Vòng Trái Đất','Hoàn thành 365 buổi học']
  ].forEach(([n, ico, t, d]) => add('Tích lũy', ico, t, d, (m) => m.total >= n));

  // 3. Tổng thời gian tích lũy (16)
  [
    [10,'⏱️','10 Phút Mở Màn','Tích lũy đủ 10 phút học'],
    [30,'⏲️','Nửa Giờ Tập Trung','Tích lũy đủ 30 phút học'],
    [60,'🕐','Giờ Vàng Đầu Tiên','Tích lũy đủ 1 giờ học'],
    [120,'🕑','Hai Giờ Nghiêm Túc','Tích lũy đủ 2 giờ học'],
    [180,'🕒','Ba Giờ Bền Bỉ','Tích lũy đủ 3 giờ học'],
    [300,'🕔','Năm Giờ Chuyên Tâm','Tích lũy đủ 5 giờ học'],
    [600,'🕙','Mười Giờ Luyện Công','Tích lũy đủ 10 giờ học'],
    [900,'🔋','15 Giờ Năng Lượng','Tích lũy đủ 15 giờ học'],
    [1200,'⚙️','20 Giờ Vận Hành','Tích lũy đủ 20 giờ học'],
    [1800,'🧭','30 Giờ Định Hướng','Tích lũy đủ 30 giờ học'],
    [2400,'🔬','40 Giờ Nghiên Cứu','Tích lũy đủ 40 giờ học'],
    [3000,'🎓','50 Giờ Thực Chiến','Tích lũy đủ 50 giờ học'],
    [4500,'🛡️','75 Giờ Rèn Luyện','Tích lũy đủ 75 giờ học'],
    [6000,'💎','100 Giờ Tinh Thông','Tích lũy đủ 100 giờ học'],
    [9000,'🚀','150 Giờ Bứt Phá','Tích lũy đủ 150 giờ học'],
    [12000,'👑','200 Giờ Bậc Thầy','Tích lũy đủ 200 giờ học']
  ].forEach(([min, ico, t, d]) => add('Thời lượng', ico, t, d, (m) => m.totalMins >= min));

  // 4. Cường độ phiên học (14)
  [
    [15,'⚡','Vượt Mức Tối Thiểu','Có 1 phiên dài từ 15 phút'],
    [20,'🔥','Hai Chục Phút Sâu','Có 1 phiên dài từ 20 phút'],
    [30,'🎯','Nửa Tiếng Không Rời','Có 1 phiên dài từ 30 phút'],
    [45,'📚','Một Tiết Đại Học','Có 1 phiên dài từ 45 phút'],
    [60,'🧠','Trọn Một Tiếng Đồng Hồ','Có 1 phiên dài từ 60 phút'],
    [90,'🐉','Hiệp Đấu 90 Phút','Có 1 phiên dài từ 90 phút'],
    [120,'🌌','Hai Giờ Siêu Tập Trung','Có 1 phiên dài từ 120 phút'],
    [180,'☄️','Ba Giờ Không Mệt Mỏi','Có 1 phiên dài từ 180 phút'],
    [240,'👑','Bốn Giờ Thần Thánh','Có 1 phiên dài từ 240 phút']
  ].forEach(([min, ico, t, d]) => add('Cường độ', ico, t, d, (m) => m.maxSession >= min));
  add('Cường độ','🥉','3 Phiên Trên 20p','Có ít nhất 3 buổi học từ 20 phút',(m)=>m.count20>=3);
  add('Cường độ','🥈','5 Phiên Trên 30p','Có ít nhất 5 buổi học từ 30 phút',(m)=>m.count30>=5);
  add('Cường độ','🥇','10 Phiên Trên 30p','Có ít nhất 10 buổi học từ 30 phút',(m)=>m.count30>=10);
  add('Cường độ','💠','3 Phiên Trên 45p','Có ít nhất 3 buổi học từ 45 phút',(m)=>m.count45>=3);
  add('Cường độ','🔱','5 Phiên Trên 60p','Có ít nhất 5 buổi học từ 60 phút',(m)=>m.count60>=5);

  // 5. Giờ giấc & Thói quen (18)
  add('Thói quen','🦉','Cú Đêm Termux','Bắt đầu 1 phiên sau 23:00',(m)=>m.night23>=1);
  add('Thói quen','🌙','Chúa Tể Bóng Đêm','Có 5 phiên học sau 23:00',(m)=>m.night23>=5);
  add('Thói quen','🦇','Hiệp Sĩ Nửa Đêm','Có 10 phiên học sau 23:00',(m)=>m.night23>=10);
  add('Thói quen','🕛','Xuyên Màn Đêm','Học vắt qua mốc 00:00 sáng',(m)=>m.crossMidnight>=1);
  add('Thói quen','🌅','Chim Sớm Bắt Sâu','Mở phiên trước 07:00 sáng',(m)=>m.early7>=1);
  add('Thói quen','☀️','Năng Lượng Ban Mai','Mở phiên từ 07:00–11:59',(m)=>m.morning>=1);
  add('Thói quen','🌤️','Buổi Chiều Hiệu Quả','Mở phiên từ 12:00–17:59',(m)=>m.afternoon>=1);
  add('Thói quen','🌆','Ca Tối Đều Đặn','Mở phiên từ 18:00–22:59',(m)=>m.evening>=1);
  add('Thói quen','🗓️','Đủ Bốn Khung Giờ','Đã từng học ở cả sáng, chiều, tối, đêm',(m)=>m.morning>=1&&m.afternoon>=1&&m.evening>=1&&m.night23>=1);
  add('Thói quen','🎉','Cuối Tuần Không Nghỉ','Hoàn thành buổi học vào Thứ 7',(m)=>m.sat>=1);
  add('Thói quen','🛋️','Chủ Nhật Chăm Chỉ','Hoàn thành buổi học vào Chủ Nhật',(m)=>m.sun>=1);
  add('Thói quen','🔥','Trọn Vẹn Cuối Tuần','Có 4 buổi học rơi vào T7 hoặc CN',(m)=>m.weekend>=4);
  add('Thói quen','📅','Chăm Chỉ Thứ Hai','Hoàn thành buổi học vào Thứ 2',(m)=>m.mon>=1);
  add('Thói quen','🩹','Sửa Sai Kịp Thời','Sử dụng tính năng học bù 1 lần',(m)=>m.makeup>=1);
  add('Thói quen','🛡️','Không Bỏ Cuộc','Sử dụng tính năng học bù 3 lần',(m)=>m.makeup>=3);
  add('Thói quen','✍️','Nhật Ký Đầy Đủ','Có 5 buổi chốt kèm ghi chú bài học',(m)=>m.notedSessions>=5);
  add('Thói quen','📖','Biên Niên Sử','Có 15 buổi chốt kèm ghi chú bài học',(m)=>m.notedSessions>=15);
  add('Thói quen','📜','Kho Lưu Trữ Sống','Có 30 buổi chốt kèm ghi chú bài học',(m)=>m.notedSessions>=30);

  // 6. Hệ sinh thái Lab & Lộ trình (16)
  add('Lab','📝','Ghi Chú Đầu Tiên','Lưu 1 ghi chú trong Ghi Chú Nhanh',(m)=>m.notesCount>=1);
  add('Lab','📒','Sổ Tay Nhỏ','Lưu 5 ghi chú trong Ghi Chú Nhanh',(m)=>m.notesCount>=5);
  add('Lab','🗂️','Kho Ý Tưởng','Lưu 15 ghi chú trong Ghi Chú Nhanh',(m)=>m.notesCount>=15);
  add('Lab','🗄️','Thư Viện Cá Nhân','Lưu 30 ghi chú trong Ghi Chú Nhanh',(m)=>m.notesCount>=30);
  add('Lab','🧠','Bộ Não Thứ Hai','Lưu 50 ghi chú trong Ghi Chú Nhanh',(m)=>m.notesCount>=50);
  add('Lab','🎯','Định Hướng Rõ Ràng','Tự đặt mục tiêu cho 1 ngày',(m)=>m.targetsCount>=1);
  add('Lab','🏹','Người Lập Kế Hoạch','Tự đặt mục tiêu cho 5 ngày',(m)=>m.targetsCount>=5);
  add('Lab','🗺️','Chiến Lược Gia','Tự đặt mục tiêu cho 15 ngày',(m)=>m.targetsCount>=15);
  add('Lab','💬','Nhà Triết Học','Thêm 1 câu châm ngôn cá nhân',(m)=>m.quotesCount>=1);
  add('Lab','🎙️','Người Truyền Lửa','Thêm 5 câu châm ngôn cá nhân',(m)=>m.quotesCount>=5);
  add('Lab','🐧','Nhập Môn Linux','Hoàn thành Tuần 1 lộ trình (7 buổi)',(m)=>m.total>=7);
  add('Lab','🔐','Chinh Phục Bandit','Hoàn thành Tuần 2 lộ trình (14 buổi)',(m)=>m.total>=14);
  add('Lab','🌐','Thợ Săn Gói Tin','Hoàn thành Tuần 3 lộ trình (21 buổi)',(m)=>m.total>=21);
  add('Lab','💻','Code & Dịch Ngược','Hoàn thành Tuần 4 lộ trình (28 buổi)',(m)=>m.total>=28);
  add('Lab','🏁','Tốt Nghiệp Khóa 30','Chinh phục trọn vẹn 30 bài lộ trình',(m)=>m.total>=30);
  add('Lab','🧬','Chủ Nhân NghjaBoNC Lab','Mở khóa ít nhất 50 thành tựu bất kỳ',(m)=>m.unlockedPre>=50);

  return list;
})();
