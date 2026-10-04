---
title: Nhờ AI viết công thức Excel thống kê lượt mượn theo lớp, theo tháng
description: Không đếm tay sổ mượn nữa. Mô tả bảng cho AI (không dán dữ liệu thật), nhận công thức COUNTIFS, kiểm lại bằng bộ lọc. Có tệp Excel mẫu tải về.
head:
  - tag: meta
    attrs: { property: "og:image", content: "https://nepsach.github.io/so-tay-ai-mo/anh/d1-ngang.png" }
sidebar:
  label: Thống kê lượt mượn bằng Excel
  order: 4
---

![Nhờ AI viết công thức Excel thống kê lượt mượn](/so-tay-ai-mo/anh/d1-ngang.png)

**Cuối tháng phải chốt lượt mượn từng lớp? Một công thức Excel đếm thay, AI viết công thức giúp. Chỉ mô tả bảng cho AI, không dán danh sách học sinh.**

[Tải tệp Excel mẫu](/so-tay-ai-mo/tep/thong-ke-luot-muon-mau.xlsx): trang «Muon tra» là sổ mượn mẫu (chỉ có mã học sinh), trang «Thong ke» đã có sẵn công thức. Đổi ngày ở ô B1 là ra số tháng khác.

## Ba bước

1. **Mô tả bảng của mình cho AI** (ChatGPT hoặc Gemini) bằng câu mẫu dưới đây. Chỉ nói tên cột, không dán dữ liệu.
2. **Dán công thức AI đưa vào ô thống kê.** Máy báo lỗi thì đổi mọi dấu phẩy `,` trong công thức thành dấu chấm phẩy `;`: máy cài định dạng Việt Nam thường dùng dấu chấm phẩy.
3. **Kiểm một lớp bằng tay:** bấm **Dữ liệu** → **Lọc**, lọc lớp 3A và tháng 10, đếm số dòng. Khớp với công thức thì dùng cho cả bảng.

:::tip[Câu mẫu: sửa phần trong ngoặc cho đúng bảng của mình]
Tôi có bảng Excel, trang tính tên («Muon tra»): cột A là ngày mượn, cột B là lớp, cột C là mã học sinh, cột D là tên sách, cột E là ngày trả (để trống nếu chưa trả). Ở trang khác, ô B1 là ngày đầu tháng cần thống kê, cột A từ dòng 4 là tên lớp. Viết công thức đếm số lượt mượn của mỗi lớp trong tháng đó, và công thức đếm số sách lớp đó chưa trả. Giải thích từng phần của công thức bằng lời dễ hiểu.
:::

Công thức trong tệp mẫu (cho lớp ở ô A4):

```
=COUNTIFS('Muon tra'!$B:$B,A4,'Muon tra'!$A:$A,">="&$B$1,'Muon tra'!$A:$A,"<"&EDATE($B$1,1))
```

Đọc là: đếm các dòng có **lớp** bằng A4, **ngày mượn** từ ngày đầu tháng đến trước ngày đầu tháng sau.

<details>
<summary>Xem thêm: vì sao không dán danh sách thật vào AI, và các phép đếm khác</summary>

- Mô tả cột là đủ để AI viết công thức. Dán danh sách thật là đưa mã, tên học sinh lên máy chủ của hãng AI, không cần thiết.
- Đếm theo khối: thêm một cột «Khối» rồi dùng cùng cách.
- Đếm lượt đọc tại chỗ, lượt giáo viên mượn: làm thêm trang tính riêng, công thức giống hệt, chỉ đổi tên trang.
- Đã dùng phần mềm thư viện: nhiều phần mềm xuất được sổ mượn ra Excel; xuất xong làm như trên.

</details>

:::note[Nguồn, ngày làm thử]
Hàm COUNTIFS theo trang hỗ trợ của Microsoft. Nếp Sách làm thử tệp mẫu trên Microsoft Excel ngày 4/10/2026: kết quả công thức khớp với đếm tay từng lớp.
:::
