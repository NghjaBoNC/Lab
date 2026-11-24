const LAB_ACHIEVEMENTS = (() => {
  const list = [];
  const add = (cat, ico, title, desc, fn, secret = false) =>
    list.push({ cat, ico, title, desc, check: fn, secret });

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

  // 7. Ví Phòng Trọ — Sổ Chi Tiêu (13)
  add('Ví Trọ','💸','Đồng Tiền Đầu Tiên','Ghi lại 1 khoản chi tiêu đầu tiên',(m)=>m.expCount>=1);
  add('Ví Trọ','🧾','Kế Toán Phòng Trọ','Ghi lại 10 khoản chi tiêu',(m)=>m.expCount>=10);
  add('Ví Trọ','📊','Sổ Sách Minh Bạch','Ghi lại 30 khoản chi tiêu',(m)=>m.expCount>=30);
  add('Ví Trọ','🏦','Bậc Thầy Kiểm Soát','Ghi lại 75 khoản chi tiêu',(m)=>m.expCount>=75);
  add('Ví Trọ','💯','Trăm Giao Dịch','Ghi lại 100 khoản chi tiêu',(m)=>m.expCount>=100);
  add('Ví Trọ','🍜','Ẩm Thực Sinh Viên','Có 5 khoản chi thuộc nhóm Ăn uống',(m)=>m.expFood>=5);
  add('Ví Trọ','🚌','Tuyến Bus Thân Quen','Có 5 khoản chi thuộc nhóm Đi lại',(m)=>m.expBus>=5);
  add('Ví Trọ','🏠','Trụ Cột Phòng Trọ','Có 3 khoản chi thuộc nhóm Trọ/Nét',(m)=>m.expRent>=3);
  add('Ví Trọ','🎚️','Kỷ Luật Tài Chính','Tự điều chỉnh hạn mức chi tiêu tháng',(m)=>m.budgetChanged);
  add('Ví Trọ','📅','Ghi Chép 3 Ngày','Ghi chi tiêu trong 3 ngày khác nhau',(m)=>m.expDays>=3);
  add('Ví Trọ','🗓️','Tuần Lễ Chi Tiêu','Ghi chi tiêu trong 7 ngày khác nhau',(m)=>m.expDays>=7);
  add('Ví Trọ','🛡️','Chi Tiêu Trong Tầm Kiểm Soát','Có ít nhất 10 giao dịch và chưa vượt trần tháng',(m)=>m.expCount>=10&&m.monSpend<=m.budgetMonth);
  add('Ví Trọ','💎','Quản Lý Chuyên Nghiệp','Ghi chi tiêu trong 20 ngày khác nhau',(m)=>m.expDays>=20);

  // 8. Giảng Đường — Tiến Độ Học Phần (13)
  add('Học Phần','🎒','Nhập Học Kỳ Mới','Khởi tạo danh sách học phần đại học',(m)=>m.courseCount>=1);
  add('Học Phần','➕','Mở Rộng Chương Trình','Thêm 1 môn học mới ngoài danh sách gốc',(m)=>m.courseCount>=6);
  add('Học Phần','🕔','Buổi Học Đầu Tiên','Tích lũy 5 tiết học trên giảng đường',(m)=>m.courseDone>=5);
  add('Học Phần','📘','Chuyên Cần Tuần Đầu','Tích lũy 25 tiết học trên giảng đường',(m)=>m.courseDone>=25);
  add('Học Phần','📙','Nửa Trăm Tiết Giảng','Tích lũy 50 tiết học trên giảng đường',(m)=>m.courseDone>=50);
  add('Học Phần','📗','Cán Mốc 100 Tiết','Tích lũy 100 tiết học trên giảng đường',(m)=>m.courseDone>=100);
  add('Học Phần','🎓','200 Tiết Giảng Đường','Tích lũy 200 tiết học trên giảng đường',(m)=>m.courseDone>=200);
  add('Học Phần','⚡','Sẵn Sàng Giữa Kỳ','Đưa 1 học phần đạt tiến độ từ 50%',(m)=>m.courseMid>=1);
  add('Học Phần','⚠️','Báo Động Ôn Thi','Đưa 1 học phần đạt tiến độ từ 80%',(m)=>m.courseEnd>=1);
  add('Học Phần','🔥','Nước Rút Toàn Diện','Có 3 học phần đạt tiến độ từ 80%',(m)=>m.courseEnd>=3);
  add('Học Phần','✅','Qua Môn Đầu Tiên','Hoàn thành 100% số tiết của 1 học phần',(m)=>m.courseFull>=1);
  add('Học Phần','🏅','Tam Môn Toàn Thắng','Hoàn thành 100% số tiết của 3 học phần',(m)=>m.courseFull>=3);
  add('Học Phần','👑','Trọn Vẹn Học Kỳ','Hoàn thành 100% số tiết của 5 học phần',(m)=>m.courseFull>=5);

  // 9. Kho Vũ Khí — Sổ Tay Lệnh (12)
  add('Sổ Lệnh','📋','Một Chạm Tới Termux','Copy 1 lệnh từ Sổ Tay Lệnh',(m)=>m.cmdCopies>=1);
  add('Sổ Lệnh','⚡','Thao Tác Quen Tay','Copy 10 lần lệnh từ Sổ Tay Lệnh',(m)=>m.cmdCopies>=10);
  add('Sổ Lệnh','🚀','Tốc Độ Ánh Sáng','Copy 30 lần lệnh từ Sổ Tay Lệnh',(m)=>m.cmdCopies>=30);
  add('Sổ Lệnh','🤖','Tự Động Hóa Copy','Copy 75 lần lệnh từ Sổ Tay Lệnh',(m)=>m.cmdCopies>=75);
  add('Sổ Lệnh','🛠️','Chế Tạo Vũ Khí','Tự lưu 1 lệnh cá nhân mới',(m)=>m.customCmdCount>=1);
  add('Sổ Lệnh','🧰','Hộp Đồ Nghề Riêng','Tự lưu 5 lệnh cá nhân mới',(m)=>m.customCmdCount>=5);
  add('Sổ Lệnh','🗄️','Kho Lệnh Bách Khoa','Tự lưu 15 lệnh cá nhân mới',(m)=>m.customCmdCount>=15);
  add('Sổ Lệnh','💻','Dân Chơi CLI','Tự lưu 30 lệnh cá nhân mới',(m)=>m.customCmdCount>=30);
  add('Sổ Lệnh','🐧','Tín Đồ Linux','Có ít nhất 3 lệnh tự lưu và 15 lần copy',(m)=>m.customCmdCount>=3&&m.cmdCopies>=15);
  add('Sổ Lệnh','🔐','Pháp Sư Terminal','Có ít nhất 10 lệnh tự lưu và 50 lần copy',(m)=>m.customCmdCount>=10&&m.cmdCopies>=50);
  add('Sổ Lệnh','⚙️','Kỹ Sư Hệ Thống','Copy lệnh 120 lần',(m)=>m.cmdCopies>=120);
  add('Sổ Lệnh','👑','Chúa Tể Dòng Lệnh','Tự lưu 50 lệnh cá nhân mới',(m)=>m.customCmdCount>=50);

  // 10. Đấu Trường Từ Vựng (12)
  add('Từ Vựng','🔤','Từ Vựng Đầu Tiên','Đánh dấu thuộc 1 từ vựng',(m)=>m.vocabMastered>=1);
  add('Từ Vựng','📖','Mười Từ Cốt Lõi','Đánh dấu thuộc 10 từ vựng',(m)=>m.vocabMastered>=10);
  add('Từ Vựng','📚','Chinh Phục Kho Gốc','Đánh dấu thuộc 30 từ vựng',(m)=>m.vocabMastered>=30);
  add('Từ Vựng','🧠','Vốn Từ Vững Vàng','Đánh dấu thuộc 60 từ vựng',(m)=>m.vocabMastered>=60);
  add('Từ Vựng','🌟','Trăm Từ Thực Chiến','Đánh dấu thuộc 100 từ vựng',(m)=>m.vocabMastered>=100);
  add('Từ Vựng','👑','Từ Điển Sống','Đánh dấu thuộc 200 từ vựng',(m)=>m.vocabMastered>=200);
  add('Từ Vựng','➕','Sưu Tầm Từ Mới','Tự nạp thêm 1 từ vựng mới',(m)=>m.customVocabCount>=1);
  add('Từ Vựng','🗂️','Kho Từ Mở Rộng','Tự nạp thêm 15 từ vựng mới',(m)=>m.customVocabCount>=15);
  add('Từ Vựng','🏛️','Tự Điển Cá Nhân','Tự nạp thêm 50 từ vựng mới',(m)=>m.customVocabCount>=50);
  add('Từ Vựng','⚔️','Lên Đài Thử Sức','Hoàn thành 1 lượt Đấu Trường 10 Câu',(m)=>m.quizRuns>=1);
  add('Từ Vựng','🛡️','Chiến Binh Ngôn Ngữ','Hoàn thành 10 lượt Đấu Trường 10 Câu',(m)=>m.quizRuns>=10);
  add('Từ Vựng','💯','Tuyệt Đối 10/10','Đạt điểm tối đa 10/10 trong Đấu Trường',(m)=>m.perfectQuiz>=1);

  // 11. 15 THÀNH TỰU ẨN (Secret)
  add('Bí Ẩn','🦥','Lười Hiệu Quả','Chốt một phiên học dài đúng 10 phút tròn trĩnh',(m)=>m.exact10>=1, true);
  add('Bí Ẩn','👻','Bóng Ma 0 Giờ','Mở phiên học đúng khung giờ 00:00 – 00:05 sáng',(m)=>m.midnightGhost>=1, true);
  add('Bí Ẩn','🪙','Từng Xu Đều Quý','Ghi một khoản chi tiêu siêu nhỏ dưới 5k',(m)=>m.tinySpend>=1, true);
  add('Bí Ẩn','💵','Tròn Trĩnh','Ghi một khoản chi tiêu chẵn tròn bội số 100k',(m)=>m.round100Spend>=1, true);
  add('Bí Ẩn','⏪','Quay Xe Kịp Lúc','Chạm đúp hủy một phiên học đang chạy',(m)=>m.cancelledSessions>=1, true);
  add('Bí Ẩn','🗑️','Dọn Dẹp Ký Ức','Xóa bỏ một ghi chú trong Ghi Chú Nhanh',(m)=>m.deletedNotes>=1, true);
  add('Bí Ẩn','🎯','Thiên Tài Bẩm Sinh','Đạt 10/10 điểm Đấu Trường ngay lượt chơi đầu tiên',(m)=>m.quizRuns===1&&m.perfectQuiz>=1, true);
  add('Bí Ẩn','🔥','Tam Toàn Tề Tựu','Hoàn hảo cả 3: 10/10 Quiz + 100% một môn học + chuỗi 14 ngày',(m)=>m.perfectQuiz>=1&&m.courseFull>=1&&m.bestStreak>=14, true);
  add('Bí Ẩn','🧛','Ma Cà Rồng Thực Thụ','Có 3 phiên học mở sau 23:30 đêm',(m)=>m.lateNight2330>=3, true);
  add('Bí Ẩn','⚡','Tốc Độ Bàn Thờ','Copy lệnh 20 lần mà chưa tự thêm lệnh riêng nào',(m)=>m.cmdCopies>=20&&m.customCmdCount===0, true);
  add('Bí Ẩn','🍱','Ăn Uống Là Chân Ái','Có trên 80% số khoản chi đều dành cho Ăn uống (tối thiểu 10 khoản)',(m)=>m.expCount>=10&&(m.expFood/m.expCount)>=0.8, true);
  add('Bí Ẩn','📚','Mọt Sách Giảng Đường','Tích lũy trên 150 tiết học nhưng chưa từng dùng học bù',(m)=>m.courseDone>=150&&m.makeup===0, true);
  add('Bí Ẩn','🎲','Con Số May Mắn','Tổng số phút học tích lũy rơi vào số chia hết cho 77',(m)=>m.totalMins>=77&&m.totalMins%77===0, true);
  add('Bí Ẩn','🌌','Chinh Phục Bóng Tối','Mở khóa ít nhất 8 thành tựu ẩn khác',(m)=>m.secretUnlockedPre>=8, true);
  add('Bí Ẩn','👁️','Kẻ Thấu Thị Hệ Thống','Mở khóa tổng cộng 100 thành tựu bất kỳ trong Lab',(m)=>m.unlockedPre>=100, true);

  return list;
})();
