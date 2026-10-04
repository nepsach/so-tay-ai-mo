---
title: Tạo một trợ lý AI riêng cho thư viện trường, dặn một lần, dùng cả năm
description: Dùng Gem của Gemini (bản miễn phí) để có một trợ lý nhớ sẵn cách làm việc của thư viện và chỉ gợi ý sách có thật trong kho của trường. Kèm bộ chỉ dẫn mẫu, cách thử, cách chia sẻ cho đồng nghiệp.
sidebar:
  label: Trợ lý AI riêng cho thư viện
  order: 1
---

Mỗi lần nhờ AI, thầy cô lại phải dặn từ đầu: mình là ai, học sinh lớp mấy, viết giọng thế nào, đừng dùng bảng. Dặn thiếu là AI viết lệch. Tệ hơn, nhờ gợi ý sách thì AI có thể đưa ra những cuốn thư viện không có, thậm chí không có thật.

Gemini có cách giải quyết gọn: **Gem**, tức một trợ lý riêng mà mình dặn một lần, lưu lại, lần sau mở ra là nó đã nhớ sẵn mọi điều. Gem còn có mục **Tri thức** để gắn tài liệu của mình vào, ví dụ danh mục sách của thư viện. Bản Gemini miễn phí tạo được Gem.

Bài này hướng dẫn tạo «Trợ lý thư viện» cho ba việc lặp lại hằng tháng: viết lời giới thiệu sách, soạn câu hỏi sau khi đọc, viết bài đăng hoạt động thư viện.

## Trước khi bắt đầu

- Cần một tài khoản Google (Gmail) và **máy tính** để tạo, chia sẻ Gem. Tạo xong thì dùng được cả trên ứng dụng Gemini ở điện thoại.
- Chuẩn bị tệp danh mục sách của thư viện: xuất từ phần mềm quản lý thư viện hoặc từ sổ Excel, chỉ giữ các cột tên sách, tác giả, nhà xuất bản, năm, môn loại, số lượng. **Xóa hết cột tên người mượn, lớp, số điện thoại.**

:::caution[Điều phải nhớ trước tiên]
Google ghi rõ: ai được chia sẻ Gem thì xem được **mọi chỉ dẫn và mọi tệp** đã gắn vào Gem. Vì vậy chỉ gắn tài liệu công khai được (danh mục sách, nội quy, lịch chủ điểm), không gắn bất cứ thông tin gì của học sinh.
:::

## Bước 1. Viết bộ chỉ dẫn

Chỉ dẫn là lời dặn cố định cho trợ lý. Dặn càng rõ, trợ lý làm càng đúng. Thầy cô chép bộ dưới đây, sửa phần trong ngoặc cho đúng trường mình.

:::tip[Bộ chỉ dẫn mẫu: chép, sửa phần trong ngoặc]
**Vai:** Bạn là trợ lý của thư viện (Trường Tiểu học Kim Đồng). Người dùng bạn là thủ thư và giáo viên của trường.

**Việc bạn làm:**
1. Viết lời giới thiệu sách để đọc dưới cờ, dài khoảng 3 phút (khoảng 400 chữ).
2. Soạn câu hỏi sau khi đọc, chia ba mức: nhận biết chi tiết, hiểu ý nghĩa, liên hệ bản thân.
3. Viết bài đăng ngắn về hoạt động thư viện cho trang của trường.

**Học sinh:** (từ lớp 1 đến lớp 5); nhiều em đọc còn chậm, nên câu ngắn, từ quen thuộc.

**Giọng văn:** ấm áp, trong sáng, đúng chuẩn tiếng Việt; xưng «cô» hoặc «thầy» với học sinh; không dùng biểu tượng cảm xúc, không dùng tiếng lóng.

**Quy tắc bắt buộc:**
- Chỉ gợi ý, giới thiệu những cuốn sách có trong tệp «Danh mục sách» ở mục Tri thức. Sách không có trong tệp thì nói rõ «Thư viện chưa có cuốn này», không tự nghĩ ra.
- Không bịa tình tiết sách. Nếu không có nội dung sách, hãy hỏi người dùng gửi ảnh bìa, mục lục hoặc vài trang.
- Không hỏi, không ghi tên, ảnh, thông tin riêng của học sinh.
- Viết bằng chữ thường, không dùng dấu sao, dấu thăng, không kẻ bảng, để dán thẳng vào Word, Zalo.
- Chưa rõ yêu cầu thì hỏi lại đúng một câu ngắn trước khi làm.
:::

Bố cục này theo bốn phần mà hướng dẫn viết câu lệnh của Google nêu: vai, việc, bối cảnh, cách trình bày. Phần «Quy tắc bắt buộc» là chỗ khiến trợ lý khác hẳn một câu hỏi thông thường.

## Bước 2. Tạo Gem trên máy tính

1. Vào **gemini.google.com**, đăng nhập. Bấm biểu tượng mở thanh bên ở góc trái, bấm biểu tượng **Gem**, chọn **Gem mới**.
2. Đặt tên (ví dụ «Trợ lý thư viện Kim Đồng»), dán bộ chỉ dẫn vào ô chỉ dẫn. Ở mục **Tri thức**, tải lên tệp danh mục sách, có thể thêm nội quy thư viện, lịch chủ điểm năm học.
3. Bấm **Lưu**.

Muốn chỉ dẫn chặt chẽ hơn, bấm **Dùng Gemini để viết lại chỉ dẫn**, đọc lại bản Gemini viết, giữ nguyên các quy tắc bắt buộc của mình.

## Bước 3. Thử, rồi sửa chỉ dẫn

Trước khi dùng thật, hỏi trợ lý ba câu để kiểm:

- «Gợi ý 5 cuốn sách về thầy cô cho học sinh lớp 4.» → Trợ lý phải chỉ đưa sách có trong danh mục. Đối chiếu lại với tệp.
- «Giới thiệu cuốn (một tên sách thư viện KHÔNG có).» → Trợ lý phải nói thư viện chưa có, không được tự viết.
- «Viết bài đăng về buổi đọc sách sáng thứ Hai của lớp 3A.» → Kiểm giọng văn, độ dài, không có dấu sao.

Câu nào trợ lý làm sai, sửa chỉ dẫn cho rõ hơn ở đúng chỗ đó, bấm **Lưu**, rồi thử lại. Đây là bước làm cho trợ lý dùng được cả năm.

## Chia sẻ cho đồng nghiệp

Trên máy tính, mở thanh bên, cạnh Gem bấm biểu tượng **Chia sẻ**, nhập email, chọn quyền **Người xem** (dùng được, không sửa được) hoặc **Người chỉnh sửa**. Phần truy cập chung nên để **Riêng tư**, chỉ người được mời mới dùng. Chia sẻ chỉ làm được trên máy tính.

Như vậy cả tổ dùng chung một trợ lý, viết cùng một giọng, cùng bám danh mục sách của trường.

## Giới hạn cần biết

- Trợ lý vẫn có thể sai. Tên sách, tác giả, tình tiết vẫn phải kiểm lại trước khi đọc dưới cờ hay đăng lên.
- Danh mục sách thay đổi (nhập sách mới, thanh lý) thì tải lại tệp mới vào mục Tri thức.
- Gem không dùng được trong cuộc trò chuyện tạm thời của Gemini.
- Theo Google, tài khoản Google cá nhân ở Việt Nam dùng Gemini từ 15 tuổi; Gem dành cho thầy cô, không phải để học sinh tự tạo.

:::note[Nguồn và ngày tra cứu]
Các bước, tên nút theo trang trợ giúp Gemini bản tiếng Việt («Dùng Gem trong Các ứng dụng Gemini», «Chia sẻ Gem từ Các ứng dụng Gemini») tra ngày 4/10/2026. Bố cục chỉ dẫn theo hướng dẫn viết câu lệnh của Google cho Gemini.
:::
